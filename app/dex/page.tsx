"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from "recharts"

type PairResponse = {
  pairs: Array<{
    chainId: string
    dexId: string
    pairAddress: string
    baseToken: { address: string; name: string; symbol: string }
    quoteToken: { address: string; name: string; symbol: string }
    priceUsd?: string
    priceNative?: string
    fdv?: number
    liquidity?: { usd?: number; base?: number; quote?: number }
    volume?: { h24?: number; h6?: number; h1?: number; m5?: number }
    priceChange?: { h24?: number; h6?: number; h1?: number; m5?: number }
    info?: { imageUrl?: string; websites?: any; socials?: any }
  }>
}

type Trade = {
  time: number // ms timestamp (we'll normalize)
  priceUsd?: number
  priceNative?: number
  amount?: number // base token amount
  side?: "buy" | "sell"
  txId?: string
}

type TradesResponse = {
  trades?: Array<{
    blockNumber?: number
    txHash?: string
    timestamp: number // ms
    priceUsd?: number
    priceNative?: number
    amount?: number
    side?: "buy" | "sell"
  }>
}

const PAIR = "0x35fd6A1530115628b70df663F6D1d6E0Dcf75D11"
const CHAIN = "base"
const PAIR_URL = `https://api.dexscreener.com/latest/dex/pairs/${CHAIN}/${PAIR}`
const TRADES_URL = `https://api.dexscreener.com/latest/dex/trades/${CHAIN}/${PAIR}?limit=200`

function useDexData(pollMs = 5000) {
  const [pair, setPair] = React.useState<PairResponse["pairs"][number] | null>(null)
  const [trades, setTrades] = React.useState<Trade[]>([])
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(true)

  const fetchAll = React.useCallback(async () => {
    try {
      setError(null)
      const [pairRes, tradesRes] = await Promise.all([
        fetch(PAIR_URL, { cache: "no-store" }),
        fetch(TRADES_URL, { cache: "no-store" }),
      ])

      if (!pairRes.ok) throw new Error(`Pair ${pairRes.status}`)
      const pairJson: PairResponse = await pairRes.json()
      const p = pairJson.pairs?.[0]
      if (p) setPair(p)

      if (!tradesRes.ok) throw new Error(`Trades ${tradesRes.status}`)
      const tradesJson: TradesResponse = await tradesRes.json()
      const mapped =
        tradesJson.trades?.map((t) => ({
          time: Number(t.timestamp),
          priceUsd: t.priceUsd ? Number(t.priceUsd) : undefined,
          priceNative: t.priceNative ? Number(t.priceNative) : undefined,
          amount: t.amount,
          side: t.side,
          txId: t.txHash,
        })) ?? []
      // sort ascending by time
      mapped.sort((a, b) => a.time - b.time)
      setTrades(mapped)

      setLoading(false)
    } catch (e: any) {
      setError(e?.message || "Failed to load")
      setLoading(false)
    }
  }, [])

  React.useEffect(() => {
    fetchAll()
    const id = setInterval(fetchAll, pollMs)
    return () => clearInterval(id)
  }, [fetchAll, pollMs])

  return { pair, trades, loading, error }
}

function formatUsd(n?: number) {
  if (n == null || Number.isNaN(n)) return "-"
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: n < 1 ? 6 : 4,
  }).format(n)
}

function formatNum(n?: number) {
  if (n == null || Number.isNaN(n)) return "-"
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(2) + "B"
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + "M"
  if (n >= 1_000) return (n / 1_000).toFixed(2) + "K"
  return n.toLocaleString()
}

function formatPct(n?: number) {
  if (n == null || Number.isNaN(n)) return "-"
  const sign = n > 0 ? "+" : ""
  return `${sign}${n.toFixed(2)}%`
}

function buildSeries(trades: Trade[]) {
  // Build line series from trades (use priceUsd). Keep last ~60 minutes or last 300 trades.
  const MAX_POINTS = 300
  const ts = trades.filter((t) => t.priceUsd != null)
  const sliced = ts.slice(-MAX_POINTS)
  return sliced.map((t) => ({
    t: t.time,
    price: Number(t.priceUsd),
  }))
}

function timeLabel(ms: number) {
  const d = new Date(ms)
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

export default function DexLikePage() {
  const { pair, trades, loading, error } = useDexData(5000)

  const series = React.useMemo(() => buildSeries(trades), [trades])

  const price = pair?.priceUsd ? Number(pair.priceUsd) : undefined
  const priceChange24 = pair?.priceChange?.h24
  const fdv = pair?.fdv
  const liqUsd = pair?.liquidity?.usd
  const vol24 = pair?.volume?.h24

  const name = pair?.baseToken?.name || "Token"
  const symbol = pair?.baseToken?.symbol || ""

  return (
    <main className="min-h-screen bg-[#0b1221] text-white">
      <div className="mx-auto max-w-7xl px-3 md:px-6 py-6 md:py-10">
        {/* Header */}
        <div className="mb-4 md:mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {name} <span className="text-zinc-400">{symbol ? `/${symbol}` : ""}</span>
            </h1>
            <p className="text-sm text-zinc-400">
              Pair on Base • {pair?.pairAddress?.slice(0, 6)}...{pair?.pairAddress?.slice(-4)}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl md:text-3xl font-bold tabular-nums">
              {price !== undefined ? formatUsd(price) : "-"}
            </div>
            <div className={`text-sm md:text-base ${(priceChange24 ?? 0) >= 0 ? "text-emerald-400" : "text-red-400"}`}>
              {formatPct(priceChange24)} 24h
            </div>
          </div>
        </div>

        {/* Layout: chart left, info + trades right on desktop; stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Left: Chart (takes 2/3 on desktop) */}
          <Card className="lg:col-span-2 border border-zinc-800 bg-[#0e1424]">
            <CardContent className="p-3 md:p-4">
              <ChartContainer
                config={{
                  price: {
                    label: "Price (USD)",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[320px] md:h-[480px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={series}>
                    <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                    <XAxis
                      dataKey="t"
                      tickFormatter={timeLabel}
                      stroke="#9ca3af"
                      tick={{ fontSize: 12 }}
                      axisLine={{ stroke: "#374151" }}
                      tickLine={{ stroke: "#374151" }}
                    />
                    <YAxis
                      dataKey="price"
                      stroke="#9ca3af"
                      tickFormatter={(v) =>
                        v < 1 ? v.toFixed(6) : v.toLocaleString(undefined, { maximumFractionDigits: 4 })
                      }
                      width={70}
                      axisLine={{ stroke: "#374151" }}
                      tickLine={{ stroke: "#374151" }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="var(--color-price)"
                      strokeWidth={2}
                      dot={false}
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
              {loading && <div className="mt-3 text-xs text-zinc-400">Loading latest price…</div>}
              {error && <div className="mt-3 text-xs text-red-400">Error loading data: {error}</div>}
            </CardContent>
          </Card>

          {/* Right: Info panel + Trades table */}
          <div className="space-y-4 md:space-y-6">
            {/* Info */}
            <Card className="border border-zinc-800 bg-[#0e1424]">
              <CardContent className="p-4 md:p-5">
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                  <InfoItem label="Token" value={`${name} (${symbol || "-"})`} />
                  <InfoItem label="Price (USD)" value={formatUsd(price)} />
                  <InfoItem label="FDV" value={fdv != null ? formatUsd(fdv) : "-"} />
                  <InfoItem label="Liquidity" value={liqUsd != null ? formatUsd(liqUsd) : "-"} />
                  <InfoItem label="24h Volume" value={vol24 != null ? formatUsd(vol24) : "-"} />
                  <InfoItem
                    label="24h Change"
                    value={formatPct(priceChange24)}
                    valueClass={(priceChange24 ?? 0) >= 0 ? "text-emerald-400" : "text-red-400"}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Trades */}
            <Card className="border border-zinc-800 bg-[#0e1424]">
              <CardContent className="p-0">
                <div className="px-4 pt-4">
                  <h2 className="text-sm font-semibold text-zinc-200">Live Trades</h2>
                </div>
                <div className="overflow-auto">
                  <table className="w-full text-sm">
                    <thead className="sticky top-0 bg-[#0e1424]">
                      <tr className="text-zinc-400">
                        <Th>Time</Th>
                        <Th className="text-right">Price</Th>
                        <Th className="text-right">Amount</Th>
                        <Th className="text-right pr-4">Type</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {trades
                        .slice()
                        .reverse()
                        .slice(0, 50)
                        .map((t, idx) => (
                          <tr
                            key={t.txId ?? idx}
                            className="border-t border-zinc-800/70 hover:bg-white/5 transition-colors"
                          >
                            <Td>{timeLabel(t.time)}</Td>
                            <Td align="right">{formatUsd(t.priceUsd)}</Td>
                            <Td align="right">{t.amount != null ? t.amount.toLocaleString() : "-"}</Td>
                            <Td align="right" className="pr-4">
                              <span
                                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs ${
                                  t.side === "buy"
                                    ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                                    : "bg-red-500/10 text-red-300 border border-red-500/30"
                                }`}
                              >
                                {t.side?.toUpperCase() ?? "-"}
                              </span>
                            </Td>
                          </tr>
                        ))}
                      {trades.length === 0 && !loading && (
                        <tr>
                          <td colSpan={4} className="p-4 text-center text-zinc-400">
                            No recent trades.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="px-4 pb-3 pt-2 text-[11px] text-zinc-500">
                  Updating every 5s • Source: Dexscreener API
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

function InfoItem({ label, value, valueClass }: { label: string; value: React.ReactNode; valueClass?: string }) {
  return (
    <div className="space-y-1">
      <div className="text-zinc-400">{label}</div>
      <div className={`font-medium text-zinc-100 tabular-nums ${valueClass ?? ""}`}>{value}</div>
    </div>
  )
}

function Th({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <th className={`px-4 py-2 text-left font-medium ${className}`}>{children}</th>
}
function Td({
  children,
  align,
  className = "",
}: React.PropsWithChildren<{ align?: "left" | "right" | "center"; className?: string }>) {
  return (
    <td
      className={`px-4 py-2 ${align === "right" ? "text-right" : align === "center" ? "text-center" : ""} ${className}`}
    >
      {children}
    </td>
  )
}

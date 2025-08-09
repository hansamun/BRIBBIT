import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chart — BRIBBIT on BASE",
  description: "Live chart from Dexscreener for BRIBBIT on BASE",
}

export default function ChartPage() {
  // Full width, min height 600px, responsive, no border iframe
  const src = "https://dexscreener.com/base/0x35fd6A1530115628b70df663F6D1d6E0Dcf75D11?embed=1&theme=dark"

  return (
    <main className="min-h-screen bg-[#011A5D] text-white">
      <section className="w-full">
        <iframe
          title="Dexscreener Live Chart"
          src={src}
          className="w-full h-[85vh] min-h-[600px] border-0"
          style={{ display: "block", background: "#0b1221" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  )
}

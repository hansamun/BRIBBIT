"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Reveal from "@/components/reveal"
import { useState } from "react"

export default function BribbitWebsite() {
  const contractAddress = "0x106b3bfa5e41a4d9f4e69b5af4f518e444d0496f"
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    const ok = await copyText(contractAddress)
    if (ok) {
      setCopied(true)
      if ("vibrate" in navigator) navigator.vibrate?.(30)
      window.setTimeout(() => setCopied(false), 1400)
    }
  }

  async function copyText(text: string) {
    try {
      if (window.isSecureContext && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
        return true
      }
    } catch {
      // fallback below
    }
    try {
      const ta = document.createElement("textarea")
      ta.value = text
      ta.setAttribute("readonly", "")
      ta.style.position = "fixed"
      ta.style.opacity = "0"
      ta.style.left = "-9999px"
      document.body.appendChild(ta)
      ta.select()
      const ok = document.execCommand("copy")
      document.body.removeChild(ta)
      return ok
    } catch {
      return false
    }
  }

  return (
    <div className="min-h-screen bg-[#011A5D] text-white overflow-x-hidden">
      {/* Header - sticky, mobile scrollable nav */}
      <header
        className="sticky top-0 z-50 bg-[#011A5D]/90 supports-[backdrop-filter]:backdrop-blur-md border-b border-black/10"
        style={{ paddingTop: "max(0px, env(safe-area-inset-top))" }}
      >
        <div className="mx-auto max-w-7xl px-3 py-3">
          <nav
            aria-label="Primary"
            className="mx-auto flex w-full max-w-[28rem] md:max-w-3xl items-center justify-center gap-2 md:gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
          >
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#how-to-buy", label: "How to Buy" },
              { href: "#join-us", label: "Join Us" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="snap-start bg-white text-black rounded-full px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base font-subheading hover:opacity-90 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero: BRIBBIT on BASE - mobile-first spacings */}
      <section id="home" className="relative overflow-hidden px-3 py-8 md:py-16 bg-[#3BA3FF] text-black scroll-mt-20">
        {/* CA pill - moved into flow so it doesn't overlap header on mobile */}
        <Reveal className="mx-auto w-full max-w-[46rem]" y={-8}>
          <button
            type="button"
            onClick={copyToClipboard}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                copyToClipboard()
              }
            }}
            aria-label="Tap to copy contract address"
            className={`group w-full max-w-[46rem] mx-auto flex items-center gap-3 sm:gap-4 bg-white border-2 border-black rounded-3xl px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 shadow-[0_6px_0_0_rgba(0,0,0,0.35)] active:translate-y-[1px] transition
      ${copied ? "ring-2 ring-green-500 ring-offset-2 ring-offset-[#3BA3FF]" : ""}`}
          >
            <span className="font-subheading text-lg sm:text-xl md:text-2xl text-black">CA :</span>
            <code className="flex-1 min-w-0 text-sm sm:text-base md:text-xl font-mono leading-snug break-all tracking-wide text-black select-none">
              {contractAddress}
            </code>
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? "Copied" : ""}
          </span>
        </Reveal>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center mt-6">
          {/* Wordmark */}
          <Reveal className="text-center md:text-left">
            <div className="relative mx-auto md:mx-0 w-[260px] h-[160px] sm:w-[320px] sm:h-[200px] md:w-[420px] md:h-[260px]">
              <Image
                src="/images/bribbit-wordmark.png"
                alt="BABY RIBBIT wordmark"
                fill
                className="object-contain drop-shadow-[0_6px_0_rgba(0,0,0,0.35)]"
                priority
              />
            </div>
          </Reveal>

          {/* Frog image */}
          <Reveal className="relative mx-auto md:mx-0 w-64 h-64 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem]" delay={120}>
            <Image
              src="/images/baby-ribbit-hero.png"
              alt="Bribbit baby frog with pacifier illustration"
              fill
              className="object-contain drop-shadow-[0_8px_0_rgba(0,0,0,0.35)]"
              priority
            />
          </Reveal>
        </div>
      </section>

      {/* Who is BRIBBIT */}
      <section id="about" className="py-12 md:py-16 px-3 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-heading mb-6 md:mb-8">WHO IS $BRIBBIT?</h2>
          </Reveal>

          <div className="space-y-4 text-base md:text-xl font-body">
            <Reveal as="p">
              {"$BRIBBIT (BABY RIBBIT) IS THE OFFICIAL BABY OF RIBBIT — SMALL IN SIZE, HUGE IN VIBES."}
            </Reveal>
            <Reveal as="p" delay={80}>
              {"BORN FROM THE RIBBIT COMMUNITY, $BRIBBIT BRINGS THE SAME ENERGY IN A CUTER, CHAOTIC PACKAGE."}
            </Reveal>
            <Reveal as="p" delay={160}>
              {"TINY LEGS, BIG HOPS — READY TO OUTJUMP THE COMPETITION."}
            </Reveal>
            <Reveal as="p" delay={240}>
              {"NO UTILITY. NO PROMISES — JUST PURE MEME POWER AND COMMUNITY FUN."}
            </Reveal>
            <Reveal as="p" delay={320}>
              {"HEAR THE LITTLE CROAK? THAT'S BRIBBIT ASKING YOU TO HOP IN."}
            </Reveal>
            <Reveal as="p" delay={400}>
              <span className="text-xl md:text-2xl mt-6 md:mt-8 font-highlight block">$BRIBBIT TO THE MOON.</span>
            </Reveal>
          </div>

          <Reveal className="mt-8 md:mt-10 flex justify-center" delay={520}>
            <Image
              src="/images/baby-ribbit-handshake.png"
              alt="Bribbit and Ribbit shaking hands illustration"
              width={420}
              height={420}
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 object-contain drop-shadow-[0_8px_0_rgba(0,0,0,0.35)]"
            />
          </Reveal>
        </div>
      </section>
      <section id="live-chart" className="w-full px-0 py-8 md:py-12 bg-[#011A5D]">
        <div className="w-full">
          <iframe
            title="Dexscreener Live Chart — BRIBBIT on BASE"
            src="https://dexscreener.com/base/0x35fd6A1530115628b70df663F6D1d6E0Dcf75D11?embed=1&theme=dark&trades=0"
            loading="lazy"
            className="w-full min-h-[600px] h-[75vh] border-0"
            style={{ display: "block", background: "#0b1221" }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Renounce / Contract Info */}
      <section className="py-12 md:py-16 px-3 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <Reveal className="flex justify-center md:justify-start">
              <Image
                src="/images/bribbit-bottle.png"
                alt="Baby Ribbit drinking from a bottle logo"
                width={480}
                height={480}
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] object-contain drop-shadow-[0_8px_0_rgba(0,0,0,0.35)]"
              />
            </Reveal>

            <div className="text-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                <Reveal>
                  <Card className="bg-blue-600 border-4 border-black">
                    <CardContent className="p-5 md:p-6">
                      <h3 className="text-lg md:text-xl font-subheading mb-1.5 md:mb-2">CONTRACT</h3>
                      <p className="text-2xl md:text-3xl font-highlight text-yellow-400">RENOUNCED</p>
                    </CardContent>
                  </Card>
                </Reveal>

                <Reveal delay={120}>
                  <Card className="bg-blue-600 border-4 border-black">
                    <CardContent className="p-5 md:p-6">
                      <h3 className="text-lg md:text-xl font-subheading mb-1.5 md:mb-2">LIQUIDITY</h3>
                      <p className="text-2xl md:text-3xl font-highlight text-yellow-400">LOCKED</p>
                    </CardContent>
                  </Card>
                </Reveal>

                <Reveal delay={240}>
                  <Card className="bg-blue-600 border-4 border-black">
                    <CardContent className="p-5 md:p-6">
                      <h3 className="text-lg md:text-xl font-subheading mb-1.5 md:mb-2">SUPPLY</h3>
                      <p className="text-2xl md:text-3xl font-highlight text-yellow-400">1 BILLION</p>
                    </CardContent>
                  </Card>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section id="how-to-buy" className="py-12 md:py-16 px-3 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-heading text-center mb-8 md:mb-12 text-purple-300 transform -rotate-1">
              HOW TO BUY?
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch auto-rows-fr">
            {[
              "DOWNLOAD THE METAMASK EXTENSION FROM THE OFFICIAL WEBSITE AND INSTALL IT IN YOUR BROWSER. FUND IT BY TRANSFERRING BASED ETHEREUM FROM AN EXCHANGE OR ALTERNATIVE ON-RAMP AND SWAP IT TO BASE CHAIN.",
              "GO TO UNISWAP'S WEBSITE AND CONNECT YOUR METAMASK WALLET.",
              "TO SWAP BASE FOR $BRIBBIT, SELECT BASE IN THE FROM FIELD AND CHOOSE $BRIBBIT IN THE TO FIELD USING OUR CONTRACT ADDRESS. ENTER THE AMOUNT OF TOKENS YOU WANT & PRESS SWAP.",
              "VERIFY YOUR TRANSACTION STATUS IN METAMASK UNDER THE ACTIVITY TAB OR ON BASESCAN USING YOUR BASE ADDRESS. IMPORT THE TOKEN TO YOUR METAMASK BY PASTING THE CONTRACT ADDRESS.",
            ].map((text, i) => (
              <Reveal key={i} delay={i * 120} className="h-full">
                <Card className="h-full w-full rounded-2xl bg-blue-600 border-4 border-black">
                  <CardContent className="h-full p-5 md:p-6 flex">
                    <p className="text-[13px] sm:text-sm font-body uppercase text-left">{text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NFT */}
      <section className="py-12 md:py-16 px-3 scroll-mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-heading mb-6 md:mb-8 text-blue-300">NFTS SOON</h2>
          </Reveal>

          <Reveal className="mx-auto flex justify-center" delay={120}>
            <Image
              src="/images/nft-preview.png"
              alt="BRIBBIT NFT preview: baby frog in hoodie with BRIBBIT background"
              width={512}
              height={512}
              className="w-full max-w-xs sm:max-w-md h-auto object-contain"
            />
          </Reveal>
        </div>
      </section>

      {/* Join Us */}
      <section id="join-us" className="py-12 md:py-16 px-3 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <Card className="bg-blue-700 border-4 border-black">
              <CardContent className="p-6 md:p-8 text-center">
                <p className="text-base md:text-xl font-body mb-5 md:mb-6">
                  Join a thriving community of frog lovers, runners, and adventure seekers rallying behind BRIBBIT — the
                  baby of RIBBIT. From a tiny tadpole on a lily pad to a symbol of cuteness, loyalty, and unstoppable
                  baby spirit, BRIBBIT proves that starting small can lead to giant hops.
                </p>
                <div className="mt-3 md:mt-4 flex flex-wrap items-center justify-center gap-2.5 md:gap-4">
                  <Button
                    asChild
                    className="bg-[#229ED9] hover:bg-[#1b8fc6] text-white font-subheading py-2.5 px-5 md:py-3 md:px-6 rounded-full text-sm md:text-lg"
                  >
                    <a
                      href="https://t.me/babyribbitbase"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Telegram"
                    >
                      TELEGRAM
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="bg-black hover:bg-neutral-900 text-white font-subheading py-2.5 px-5 md:py-3 md:px-6 rounded-full text-sm md:text-lg"
                  >
                    <a
                      href="https://x.com/BabyRibbitBase"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Twitter (X)"
                    >
                      TWITTER
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="text-base md:text-xl font-body">@ 2025 — All rights reserved</p>
      </footer>
    </div>
  )
}

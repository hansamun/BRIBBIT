"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function BribbitWebsite() {
  const contractAddress = "0X7779F5FEF2944A01A786227A2D9764B388BA6B2"

  return (
    <div className="min-h-screen bg-[#011A5D] text-white overflow-x-hidden">
      {/* Header - centered navigation (no CA) */}
      <header className="p-4 md:p-6 bg-[#011A5D]">
        <nav aria-label="Primary" className="mx-auto flex w-full max-w-3xl items-center justify-center gap-2 md:gap-4">
          <a
            href="#home"
            className="bg-white text-black rounded-full px-4 py-2 text-sm md:text-base font-subheading hover:opacity-90"
          >
            Home
          </a>
          <a
            href="#about"
            className="bg-white text-black rounded-full px-4 py-2 text-sm md:text-base font-subheading hover:opacity-90"
          >
            About
          </a>
          <a
            href="#how-to-buy"
            className="bg-white text-black rounded-full px-4 py-2 text-sm md:text-base font-subheading hover:opacity-90"
          >
            How to Buy
          </a>
          <a
            href="#join-us"
            className="bg-white text-black rounded-full px-4 py-2 text-sm md:text-base font-subheading hover:opacity-90"
          >
            Join Us
          </a>
        </nav>
      </header>

      {/* Hero: BRIBBIT on BASE */}
      <section id="home" className="relative overflow-hidden py-12 md:py-20 px-4 bg-[#3BA3FF] text-black">
        {/* Optional CA pill inside hero (keep or remove as needed) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4">
          <div className="flex items-center gap-3 bg-white border-2 border-black rounded-full px-5 py-2 shadow-[0_6px_0_0_rgba(0,0,0,0.5)]">
            <span className="font-subheading text-2xl">CA :</span>
            <span className="font-mono text-sm md:text-base break-all">{contractAddress}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center pt-16">
          <div className="text-center md:text-left">
            <div className="relative mx-auto md:mx-0 w-[320px] h-[120px] md:w-[560px] md:h-[220px]">
              <Image
                src="/images/bribbit-wordmark.png"
                alt="BRIBBIT on BASE wordmark"
                fill
                className="object-contain drop-shadow-[0_6px_0_rgba(0,0,0,0.35)]"
                priority
              />
            </div>
          </div>

          <div className="relative mx-auto md:mx-0 w-80 h-80 md:w-[28rem] md:h-[28rem]">
            <Image
              src="/images/baby-ribbit-hero.png"
              alt="Bribbit baby frog with pacifier illustration"
              fill
              className="object-contain drop-shadow-[0_8px_0_rgba(0,0,0,0.35)]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Who is BRIBBIT */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-heading mb-8">WHO IS $BRIBBIT?</h2>
          <div className="space-y-4 text-lg md:text-xl font-body">
            <p>$BRIBBIT (BABY RIBBIT) IS THE OFFICIAL BABY OF RIBBIT — SMALL IN SIZE, HUGE IN VIBES.</p>
            <p>BORN FROM THE RIBBIT COMMUNITY, $BRIBBIT BRINGS THE SAME ENERGY IN A CUTER, CHAOTIC PACKAGE.</p>
            <p>TINY LEGS, BIG HOPS — READY TO OUTJUMP THE COMPETITION.</p>
            <p>NO UTILITY. NO PROMISES — JUST PURE MEME POWER AND COMMUNITY FUN.</p>
            <p>HEAR THE LITTLE CROAK? THAT{"'"}S BRIBBIT ASKING YOU TO HOP IN.</p>
            <p className="text-2xl mt-8 font-highlight">$BRIBBIT TO THE MOON.</p>
          </div>

          {/* Handshake image under Who is */}
          <div className="mt-10 flex justify-center">
            <Image
              src="/images/baby-ribbit-handshake.png"
              alt="Bribbit and Ribbit shaking hands illustration"
              width={500}
              height={500}
              className="w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-[0_8px_0_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
      </section>

      {/* Renounce / Contract Info with image on the left */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Bribbit image */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/bribbit-bottle.png"
                alt="Bribbit on Base drinking from a bottle illustration"
                width={500}
                height={500}
                className="w-64 h-64 md:w-[28rem] md:h-[28rem] object-contain drop-shadow-[0_8px_0_rgba(0,0,0,0.35)]"
              />
            </div>

            {/* Right: Cards */}
            <div className="text-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card className="bg-blue-600 border-4 border-black">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-subheading mb-2">CONTRACT</h3>
                    <p className="text-3xl font-highlight text-yellow-400">RENOUNCED</p>
                  </CardContent>
                </Card>
                <Card className="bg-blue-600 border-4 border-black">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-subheading mb-2">LIQUIDITY</h3>
                    <p className="text-3xl font-highlight text-yellow-400">LOCKED</p>
                  </CardContent>
                </Card>
                <Card className="bg-blue-600 border-4 border-black">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-subheading mb-2">SUPPLY</h3>
                    <p className="text-3xl font-highlight text-yellow-400">1 BILLION</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section id="how-to-buy" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-heading text-center mb-12 text-purple-300 transform -rotate-1">
            HOW TO BUY?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-blue-600 border-4 border-black">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-2xl font-highlight">
                    1
                  </div>
                  <div>
                    <p className="text-sm font-body uppercase">
                      DOWNLOAD THE METAMASK EXTENSION FROM THE OFFICIAL WEBSITE AND INSTALL IT IN YOUR BROWSER. FUND IT
                      BY TRANSFERRING BASED ETHEREUM FROM AN EXCHANGE OR ALTERNATIVE ON-RAMP AND SWAP IT TO BASE CHAIN.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-600 border-4 border-black">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-2xl font-highlight">
                    2
                  </div>
                  <div>
                    <p className="text-sm font-body uppercase">
                      GO TO UNISWAP{"'"}S WEBSITE AND CONNECT YOUR METAMASK WALLET.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-600 border-4 border-black">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-2xl font-highlight">
                    3
                  </div>
                  <div>
                    <p className="text-sm font-body uppercase">
                      TO SWAP BASE FOR $BRIBBIT, SELECT BASE IN THE FROM FIELD AND CHOOSE $BRIBBIT IN THE TO FIELD USING
                      OUR CONTRACT ADDRESS. ENTER THE AMOUNT OF TOKENS YOU WANT &amp; PRESS SWAP.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-600 border-4 border-black">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-2xl font-highlight">
                    4
                  </div>
                  <div>
                    <p className="text-sm font-body uppercase">
                      VERIFY YOUR TRANSACTION STATUS IN METAMASK UNDER THE ACTIVITY TAB OR ON BASESCAN USING YOUR BASE
                      ADDRESS. IMPORT THE TOKEN TO YOUR METAMASK BY PASTING THE CONTRACT ADDRESS.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NFT */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-heading mb-8 text-blue-300">NFTS SOON</h2>

          <div className="max-w-md mx-auto">
            <Card className="bg-yellow-400 border-4 border-black">
              <CardContent className="p-8">
                <div className="w-full h-64 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-6xl text-black font-highlight">NFT</div>
                </div>
                <p className="text-black font-subheading">BRIBBIT NFT Collection Coming Soon!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section id="join-us" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-blue-700 border-4 border-black">
            <CardContent className="p-8 text-center">
              <p className="text-lg md:text-xl font-body mb-6">
                Join a thriving community of frog lovers, runners, and adventure seekers rallying behind BRIBBIT — the
                baby of RIBBIT. From a tiny tadpole on a lily pad to a symbol of cuteness, loyalty, and unstoppable baby
                spirit, BRIBBIT proves that starting small can lead to giant hops.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-subheading py-3 px-8 rounded-full text-xl">
                JOIN US!
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="text-xl font-body">@ 2025 — All rights reserved</p>
      </footer>
    </div>
  )
}

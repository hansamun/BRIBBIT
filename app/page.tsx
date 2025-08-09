"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Reveal from "@/components/reveal"

export default function BribbitWebsite() {
  const contractAddress = "COOMING SOON"

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
        <Reveal as="div" className="absolute left-1/2 -translate-x-1/2 top-4" y={-8}>
          <div className="flex items-center gap-3 bg-white border-2 border-black rounded-full px-5 py-2 shadow-[0_6px_0_0_rgba(0,0,0,0.5)]">
            <span className="font-subheading text-2xl">CA :</span>
            <span className="font-mono text-sm md:text-base break-all">{contractAddress}</span>
          </div>
        </Reveal>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center pt-16">
          <Reveal className="text-center md:text-left" delay={0}>
            <div className="relative mx-auto md:mx-0 w-[320px] h-[120px] md:w-[560px] md:h-[220px]">
              <Image
                src="/images/bribbit-wordmark.png"
                alt="BRIBBIT on BASE wordmark"
                fill
                className="object-contain drop-shadow-[0_6px_0_rgba(0,0,0,0.35)]"
                priority
              />
            </div>
          </Reveal>

          <Reveal className="relative mx-auto md:mx-0 w-80 h-80 md:w-[28rem] md:h-[28rem]" delay={120}>
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
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal delay={0}>
            <h2 className="text-5xl md:text-6xl font-heading mb-8">WHO IS $BRIBBIT?</h2>
          </Reveal>

          <div className="space-y-4 text-lg md:text-xl font-body">
            <Reveal as="p" delay={0}>
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
              <span className="text-2xl mt-8 font-highlight block">$BRIBBIT TO THE MOON.</span>
            </Reveal>
          </div>

          <Reveal className="mt-10 flex justify-center" delay={520}>
            <Image
              src="/images/baby-ribbit-handshake.png"
              alt="Bribbit and Ribbit shaking hands illustration"
              width={500}
              height={500}
              className="w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-[0_8px_0_rgba(0,0,0,0.35)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Renounce / Contract Info with image on the left */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Reveal className="flex justify-center md:justify-start" delay={0}>
              <Image
                src="/images/bribbit-bottle.png"
                alt="Bribbit on Base drinking from a bottle illustration"
                width={500}
                height={500}
                className="w-64 h-64 md:w-[28rem] md:h-[28rem] object-contain drop-shadow-[0_8px_0_rgba(0,0,0,0.35)]"
              />
            </Reveal>

            <div className="text-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Reveal delay={0}>
                  <Card className="bg-blue-600 border-4 border-black">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-subheading mb-2">CONTRACT</h3>
                      <p className="text-3xl font-highlight text-yellow-400">RENOUNCED</p>
                    </CardContent>
                  </Card>
                </Reveal>

                <Reveal delay={120}>
                  <Card className="bg-blue-600 border-4 border-black">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-subheading mb-2">LIQUIDITY</h3>
                      <p className="text-3xl font-highlight text-yellow-400">LOCKED</p>
                    </CardContent>
                  </Card>
                </Reveal>

                <Reveal delay={240}>
                  <Card className="bg-blue-600 border-4 border-black">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-subheading mb-2">SUPPLY</h3>
                      <p className="text-3xl font-highlight text-yellow-400">1 BILLION</p>
                    </CardContent>
                  </Card>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section id="how-to-buy" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-5xl md:text-6xl font-heading text-center mb-12 text-purple-300 transform -rotate-1">
              HOW TO BUY?
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "DOWNLOAD THE METAMASK EXTENSION FROM THE OFFICIAL WEBSITE AND INSTALL IT IN YOUR BROWSER. FUND IT BY TRANSFERRING BASED ETHEREUM FROM AN EXCHANGE OR ALTERNATIVE ON-RAMP AND SWAP IT TO BASE CHAIN.",
              "GO TO UNISWAP'S WEBSITE AND CONNECT YOUR METAMASK WALLET.",
              "TO SWAP BASE FOR $BRIBBIT, SELECT BASE IN THE FROM FIELD AND CHOOSE $BRIBBIT IN THE TO FIELD USING OUR CONTRACT ADDRESS. ENTER THE AMOUNT OF TOKENS YOU WANT & PRESS SWAP.",
              "VERIFY YOUR TRANSACTION STATUS IN METAMASK UNDER THE ACTIVITY TAB OR ON BASESCAN USING YOUR BASE ADDRESS. IMPORT THE TOKEN TO YOUR METAMASK BY PASTING THE CONTRACT ADDRESS.",
            ].map((text, i) => (
              <Reveal key={i} delay={i * 120}>
                <Card className="bg-blue-600 border-4 border-black">
                  <CardContent className="p-6">
                    <p className="text-sm font-body uppercase">{text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NFT */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <h2 className="text-5xl md:text-6xl font-heading mb-8 text-blue-300">NFTS SOON</h2>
          </Reveal>

          <Reveal className="mx-auto flex justify-center" delay={120}>
            <Image
              src="/images/nft-preview.png"
              alt="BRIBBIT NFT preview: baby frog in hoodie with BRIBBIT background"
              width={512}
              height={512}
              className="w-full max-w-md h-auto object-contain"
            />
          </Reveal>
        </div>
      </section>

      {/* Join Us */}
      <section id="join-us" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Reveal delay={0}>
            <Card className="bg-blue-700 border-4 border-black">
              <CardContent className="p-8 text-center">
                <p className="text-lg md:text-xl font-body mb-6">
                  Join a thriving community of frog lovers, runners, and adventure seekers rallying behind BRIBBIT — the
                  baby of RIBBIT. From a tiny tadpole on a lily pad to a symbol of cuteness, loyalty, and unstoppable
                  baby spirit, BRIBBIT proves that starting small can lead to giant hops.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-subheading py-3 px-8 rounded-full text-xl">
                  JOIN US!
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="text-xl font-body">@ 2025 — All rights reserved</p>
      </footer>
    </div>
  )
}

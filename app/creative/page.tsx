"use client";

import { useState } from "react";
import PageLayout from "../../components/PageLayout";

type CardKey = "reviews" | "reels" | "nami" | "article" | "making";

const CARDS: { key: CardKey; label: string; description: string }[] = [
  {
    key: "reviews",
    label: "reviews",
    description:
      "i made my handwriting a font and put the cafe name right in the image. i keep my captions playful with tons of emojis but never sacrifice my honest takes. i always appreciate the good but will point out what's lacking. every review has a rating at the bottom for matcha, study spot, and outlets and wifi.",
  },
  {
    key: "reels",
    label: "reels",
    description:
      "cafe culture is more than just the drinks. it's the interior, the vibes, how they structure themselves, whether it's a good study spot. these reels were my first real introduction to video editing, learning to film aesthetic clips and cut them to a beat. after months of creating behind the camera, i finally felt comfortable adding a face to the account, making review videos, sharing my honest thoughts, and just being myself on screen.",
  },
  {
    key: "nami",
    label: "nami",
    description:
      "nami is a matcha brand started by @urmomashley, a youtuber i followed growing up who used to make lifestyle content. she has been a big inspiration because she combines so many of my passions. when nami reached out to make me an ambassador it felt like a pivotal 'i made it' moment. i even got to meet her briefly in la.",
  },
  {
    key: "article",
    label: "article",
    description:
      "voyage la reached out to write an article about me and my matcha journey. it was a surreal opportunity that made me feel like i could be seen by the greater la area, not just my immediate community. writing it also reminded me why i started and how this account is truly more than just a cafe page.",
  },
  {
    key: "making",
    label: "making matcha",
    description:
      "i expanded my account to making my own matcha. filming these videos taught me how to capture the process of creating. matcha has a technique and tradition behind it, and i care deeply about honoring that. making matcha is therapeutic, slow, intentional, and one of the few things that fully pulls me away from a screen.",
  },
];

const SCATTER: Record<CardKey, string> = {
  reviews: "translate(-60%, 150vh) rotate(-15deg)",
  reels: "translate(60%, 150vh) rotate(12deg)",
  nami: "translate(-80%, 150vh) rotate(-20deg)",
  article: "translate(20%, 150vh) rotate(8deg)",
  making: "translate(80%, 150vh) rotate(18deg)",
};

const SCATTER_LIFE: Record<"life-reels" | "life-75", string> = {
  "life-reels": "translate(-60%, 150vh) rotate(-15deg)",
  "life-75": "translate(60%, 150vh) rotate(12deg)",
};

const FIRSTRAY_CARDS = [
  { key: "firstray-shop" as const, label: "shop" },
  { key: "firstray-stickers" as const, label: "stickers" },
  { key: "firstray-custom" as const, label: "custom" },
  { key: "firstray-collabs" as const, label: "collabs" },
] as const;

const SCATTER_FIRSTRAY: Record<(typeof FIRSTRAY_CARDS)[number]["key"], string> = {
  "firstray-shop": "translate(-60%, 150vh) rotate(-15deg)",
  "firstray-stickers": "translate(60%, 150vh) rotate(12deg)",
  "firstray-custom": "translate(-60%, 150vh) rotate(-20deg)",
  "firstray-collabs": "translate(60%, 150vh) rotate(18deg)",
};

export default function CreativePage() {
  const [scattered, setScattered] = useState(false);
  const [scatteredLife, setScatteredLife] = useState(false);
  const [scatteredSubstack, setScatteredSubstack] = useState(false);
  const [scatteredLinkedin, setScatteredLinkedin] = useState(false);
  const [scatteredFirstray, setScatteredFirstray] = useState(false);

  return (
    <PageLayout>
      <style>{`.flip-card:hover .flip-inner { transform: rotateY(180deg); }
.flip-inner { transition: transform 0.5s ease; transform-style: preserve-3d; transform-origin: center center; }`}</style>
      <main className="container mx-auto px-6 py-1 -mt-8 font-sans text-[#434040] lowercase">
        <section className="max-w-4xl mx-auto pt-2 pb-12">
          <div className="relative z-0">
          <h2 className="text-3xl font-normal text-[#717171] lowercase mb-3">why creative?</h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-8">
            i have always been a creative person. paper crafts, origami, stickers, drawing,
            painting, duck tape creations, knitting. but as the world became more technically
            inclined, i noticed myself gravitating towards it too. all of a sudden creativity
            outlets were getting replaced by doomscrolling, graphic design became possible with a
            couple words and the click of a button, and everyone was falling further and further
            from the creative parts of themselves that make them human. i truly believe we all have
            aspects of our personality, things we loved doing when we were younger, that are worth
            rediscovering. that's why i've tapped back into all of my creative sides, even when it
            doesn't necessarily align with my professional goals. it keeps me grounded, keeps me
            human, and helps me hold onto what makes me unique and special as a person.
          </p>

          <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-8 py-10 overflow-visible relative z-50" style={{ zIndex: 50 }}>
            <div className="flex items-center justify-between w-full">
              <h1 className="text-xl font-normal text-gray-400 lowercase">@chugofmatcha</h1>
              <div className="flex gap-3 items-center">
                <a
                  href="https://www.instagram.com/chugofmatcha"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@chugofmatcha"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative z-50" style={{ height: "560px", position: "relative", zIndex: 50 }}>
              {/* Paragraph behind cards */}
              <div
                className="absolute inset-0 flex items-center justify-center text-center px-10 py-4 overflow-hidden z-0"
                style={{
                  opacity: scattered ? 1 : 0,
                }}
              >
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 leading-relaxed lowercase">
                    i started <strong>chug of matcha</strong> in march 2025 <em>almost by accident</em>. i realized i had already been visiting every new cafe that opened in la, dragging friends across the city to try the latest matcha, and forming <strong>very strong opinions</strong> about all of it. i figured, why not share my findings with the world. what started as simple cafe reviews turned into something <em>much bigger than i ever expected</em>. i made my own handwriting into a font, designed a review format that felt personal and honest, and built a whole system for rating <strong>matcha, study vibes, outlets, and wifi.</strong>
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed lowercase">
                    from there i started making reels. i wanted to capture what a cafe actually <em>feels like</em> beyond just the drink — the light, the furniture, the music, the people. this was my <strong>first real introduction to video editing</strong>, learning to shoot aesthetic clips on the fly, think about how they would cut together, and sync everything to a beat. it was harder than i expected and <em>more rewarding than i anticipated.</em>
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed lowercase">
                    voyage la reached out to feature me in an article about my matcha journey. writing that piece reminded me how much this account is about <strong>more than matcha</strong>. it is about who i am and what i care about. i have also started filming myself making matcha at home, reviewing powders, and documenting the quiet ritual of it — <em>how it can be so therapeutic and calming.</em>
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed lowercase">
                    matcha for me is <strong>not just a drink</strong>. it is the thing that gets me out of bed, the excuse to explore a new neighborhood, and <em>the one part of my day that is just mine</em>. chug of matcha taught me how to create in public, how to have a voice, and how to hold onto the parts of myself that have nothing to do with productivity or career goals.
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed lowercase mt-2">
                    <strong>it is the most human thing i do.</strong>
                  </p>
                </div>
              </div>

              {/* Cards */}
              <div className="absolute inset-0 z-10 flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2" style={{ flex: 1 }}>
                  {CARDS.slice(0, 2).map((card) => (
                    <div
                      key={card.key}
                      className="flip-card relative cursor-pointer rounded-2xl"
                      style={{
                        perspective: "1000px",
                        height: "100%",
                        ...(scattered
                          ? {
                              transition: "transform 0.7s ease, opacity 0.7s ease",
                              transform: SCATTER[card.key],
                              opacity: 0,
                            }
                          : {}),
                      }}
                    >
                      <div className="flip-inner" style={{ position: "absolute", inset: 0 }}>
                      <div
                        className="absolute inset-0 rounded-2xl border border-gray-200"
                        style={{
                          backfaceVisibility: "hidden",
                          backgroundImage: `url('/images/matcha-${card.key}.png')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <p className="absolute bottom-3 left-4"><span className="bg-[#888888]/60 px-3 py-1 rounded-full text-xs text-white lowercase">{card.label}</span></p>
                      </div>
                      <div
                        className="absolute inset-0 bg-white rounded-2xl p-5 flex items-center border border-gray-100"
                        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                      >
                        <p className="text-sm text-gray-600 leading-relaxed lowercase">{card.description}</p>
                      </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2" style={{ flex: 1 }}>
                  {CARDS.slice(2).map((card) => (
                    <div
                      key={card.key}
                      className="flip-card relative cursor-pointer rounded-2xl"
                      style={{
                        perspective: "1000px",
                        height: "100%",
                        ...(scattered
                          ? {
                              transition: "transform 0.7s ease, opacity 0.7s ease",
                              transform: SCATTER[card.key],
                              opacity: 0,
                            }
                          : {}),
                      }}
                    >
                      <div className="flip-inner" style={{ position: "absolute", inset: 0 }}>
                      <div
                        className="absolute inset-0 rounded-2xl border border-gray-200"
                        style={{
                          backfaceVisibility: "hidden",
                          backgroundImage: `url('/images/matcha-${card.key}.png')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <p className="absolute bottom-3 left-4"><span className="bg-[#888888]/60 px-3 py-1 rounded-full text-xs text-white lowercase">{card.label}</span></p>
                      </div>
                      <div
                        className="absolute inset-0 bg-white rounded-2xl p-5 flex items-center border border-gray-100"
                        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                      >
                        <p className="text-sm text-gray-600 leading-relaxed lowercase">{card.description}</p>
                      </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              {!scattered ? (
                <button
                  type="button"
                  onClick={() => setScattered(true)}
                  className="px-6 py-2 rounded-full text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors lowercase"
                >
                  learn more
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setScattered(false)}
                  className="px-6 py-2 rounded-full text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors lowercase"
                >
                  show less
                </button>
              )}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-8 py-10 mt-6 overflow-visible relative z-50" style={{ zIndex: 40 }}>
            <div className="flex items-center justify-between w-full">
              <h1 className="text-xl font-normal text-gray-400 lowercase">@chugoflife</h1>
              <div className="flex gap-3 items-center">
                <a
                  href="https://www.instagram.com/chugoflife"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@chugoflife"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative" style={{ height: "276px", position: "relative", zIndex: 50 }}>
              {/* Paragraph behind cards */}
              <div
                className="absolute inset-0 flex items-center justify-center text-center z-0"
                style={{
                  opacity: scatteredLife ? 1 : 0,
                }}
              >
                <div className="space-y-3 text-sm text-gray-500 leading-relaxed lowercase text-center px-10">
                  <p>growing up, public speaking was one of my <em>greatest passions</em>. leadership programs, speech and debate, giving speeches to my whole school. going into college i was terrified of losing that part of myself, something i did <em>purely for the love of it</em>.</p>
                  <p>i tried starting a podcast, then a tiktok, but <strong>fear of judgment</strong> and lack of direction kept getting in the way. turning 21 and starting 2026 felt like a <em>reset</em>. i finally built a <strong>real brand and image</strong> i believed in before ever posting anything.</p>
                  <p>i have been creating since <strong>january 1, 2026</strong> and already had my first viral moment. this has taught me so much about what it means to <strong>put yourself out there</strong> and go after your dreams. even though progress is slow, i feel <em>passionate to create every single day</em>. <strong>chugoflife</strong> is me reclaiming the part of myself that has always loved having a voice.</p>
                </div>
              </div>

              {/* Cards */}
              <div className="absolute inset-0 z-10 grid grid-cols-2 gap-2 h-full">
              {[
                { key: "life-reels" as const, label: "reels", image: "/images/life-reels.png", description: "Placeholder description for reels." },
                { key: "life-75" as const, label: "brand", image: "/images/life-75.png", description: "Placeholder description for 75 holistic." },
              ].map((card) => (
                <div
                  key={card.key}
                  className="flip-card relative cursor-pointer rounded-2xl"
                  style={{
                    perspective: "1000px",
                    height: "100%",
                    ...(scatteredLife
                      ? {
                          transition: "transform 0.7s ease, opacity 0.7s ease",
                          transform: SCATTER_LIFE[card.key],
                          opacity: 0,
                        }
                      : {}),
                  }}
                >
                  <div className="flip-inner" style={{ position: "absolute", inset: 0 }}>
                  <div
                    className="absolute inset-0 rounded-2xl border border-gray-200"
                    style={{
                      backfaceVisibility: "hidden",
                      backgroundImage: card.key === "life-reels" ? "url('/images/life-reels.png')" : "url('/images/life-75.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <p className="absolute bottom-3 left-4"><span className="bg-[#888888]/60 px-3 py-1 rounded-full text-xs text-white lowercase">{card.label}</span></p>
                  </div>
                  <div
                    className="absolute inset-0 bg-white rounded-2xl p-5 flex items-center border border-gray-100"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    {card.key === "life-reels" ? (
                      <div className="space-y-2 text-sm text-gray-500 leading-relaxed lowercase">
                        <p>long form thoughts, life questions, and <em>honest takes</em> on everything. these videos are me reclaiming my love for public speaking and finally <strong>putting my voice out into the world</strong>. my first viral moment came from a simple would you rather life question video, which reminded me that <em>authenticity resonates more than perfection.</em></p>
                      </div>
                    ) : (
                      <div className="space-y-2 text-sm text-gray-500 leading-relaxed lowercase">
                        <p>i wanted my content to revolve around <strong>positivity and growth</strong>, values i am deeply committed to in <em>2026 and throughout my twenties</em>. i believe in sharing those thoughts openly and honestly, because i know i am not the only one navigating this season of life and <em>trying to figure it out.</em></p>
                      </div>
                    )}
                  </div>
                  </div>
                </div>
              ))}
            </div>
            </div>

            <div className="flex justify-center mt-6">
              {!scatteredLife ? (
                <button
                  type="button"
                  onClick={() => setScatteredLife(true)}
                  className="px-6 py-2 rounded-full text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors lowercase"
                >
                  learn more
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setScatteredLife(false)}
                  className="px-6 py-2 rounded-full text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors lowercase"
                >
                  show less
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6" style={{ zIndex: 30 }}>
            {/* Substack box */}
            <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-8 overflow-visible relative z-50" style={{ zIndex: 30 }}>
              <div className="flex items-center justify-between w-full">
                <h2 className="text-xl font-normal text-gray-400 lowercase">substack</h2>
                <a
                  href="https://substack.com/@chugoflife"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Substack"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" fill="currentColor">
                    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                  </svg>
                </a>
              </div>
              <div className="relative" style={{ height: "276px", position: "relative", zIndex: 50 }}>
                <div
                  className="absolute inset-0 flex items-center justify-center text-center z-0"
                  style={{ opacity: scatteredSubstack ? 1 : 0 }}
                >
                  <div className="space-y-3 text-sm text-gray-500 leading-relaxed lowercase text-center px-10">
                    <p>writing is a muscle i hadn't used in a while. substack gave me a reason to pick it back up, turning spoken thoughts into something more <em>intentional and lasting</em>. it is a different kind of creative challenge than video. there is no tone of voice to rely on, no facial expression to fill in the gaps. just <strong>words on a page</strong>. i have found a lot of peace in that, and it has made me a <em>sharper thinker</em>.</p>
                  </div>
                </div>
                <div className="absolute inset-0 z-10">
                  <div
                    className="flip-card relative cursor-pointer rounded-2xl h-full w-full"
                    style={{
                      perspective: "1000px",
                      ...(scatteredSubstack
                        ? {
                            transition: "transform 0.7s ease, opacity 0.7s ease",
                            transform: "translate(0, 150vh) rotate(8deg)",
                            opacity: 0,
                          }
                        : {}),
                    }}
                  >
                    <div className="flip-inner" style={{ position: "absolute", inset: 0 }}>
                      <div
                        className="absolute inset-0 rounded-2xl border border-gray-200"
                        style={{
                          backfaceVisibility: "hidden",
                          backgroundImage: "url('/images/substack.png')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div
                        className="absolute inset-0 bg-white rounded-2xl p-5 flex items-center justify-center border border-gray-100"
                        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                      >
                        <div className="space-y-2 text-sm text-gray-500 leading-relaxed lowercase">
                          <p>i have always been better at expressing myself through video, but finding good writing again reminded me how much i <em>missed it</em>. substack felt like a place to slow down and turn a feeling into something <strong>eloquent and meaningful</strong>.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                {!scatteredSubstack ? (
                  <button
                    type="button"
                    onClick={() => setScatteredSubstack(true)}
                    className="px-6 py-2 rounded-full text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors lowercase"
                  >
                    learn more
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setScatteredSubstack(false)}
                    className="px-6 py-2 rounded-full text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors lowercase"
                  >
                    show less
                  </button>
                )}
              </div>
            </div>

            {/* LinkedIn box */}
            <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-8 overflow-visible relative z-50" style={{ zIndex: 30 }}>
              <div className="flex items-center justify-between w-full">
                <h2 className="text-xl font-normal text-gray-400 lowercase">linkedin</h2>
                <a
                  href="https://www.linkedin.com/in/1arushigupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              <div className="relative" style={{ height: "276px", position: "relative", zIndex: 50 }}>
                <div
                  className="absolute inset-0 flex items-center justify-center text-center z-0"
                  style={{ opacity: scatteredLinkedin ? 1 : 0 }}
                >
                  <div className="space-y-3 text-sm text-gray-500 leading-relaxed lowercase text-center px-10">
                    <p>over time i realized my content was evolving into something <em>less traditionally professional</em>, and i found more of a home on instagram and substack. but i still come back to linkedin occasionally, because <strong>some conversations belong in that space</strong> and i haven't fully left it behind.</p>
                  </div>
                </div>
                <div className="absolute inset-0 z-10">
                  <div
                    className="flip-card relative cursor-pointer rounded-2xl h-full w-full"
                    style={{
                      perspective: "1000px",
                      ...(scatteredLinkedin
                        ? {
                            transition: "transform 0.7s ease, opacity 0.7s ease",
                            transform: "translate(0, 150vh) rotate(8deg)",
                            opacity: 0,
                          }
                        : {}),
                    }}
                  >
                    <div className="flip-inner" style={{ position: "absolute", inset: 0 }}>
                      <div
                        className="absolute inset-0 rounded-2xl border border-gray-200"
                        style={{
                          backfaceVisibility: "hidden",
                          backgroundImage: "url('/images/linkedin.png')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div
                        className="absolute inset-0 bg-white rounded-2xl p-5 flex items-center justify-center border border-gray-100"
                        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                      >
                        <div className="space-y-2 text-sm text-gray-500 leading-relaxed lowercase">
                          <p>linkedin was my <strong>first experience</strong> putting thoughts out to people i actually knew. scarier than posting to strangers, and <em>more rewarding than i expected</em>. some posts did well and it was genuinely surprising to see people i respected engaging with my thoughts.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                {!scatteredLinkedin ? (
                  <button
                    type="button"
                    onClick={() => setScatteredLinkedin(true)}
                    className="px-6 py-2 rounded-full text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors lowercase"
                  >
                    learn more
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setScatteredLinkedin(false)}
                    className="px-6 py-2 rounded-full text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors lowercase"
                  >
                    show less
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-8 py-10 mt-6 overflow-visible relative z-50" style={{ zIndex: 20 }}>
            <div className="flex items-center justify-between w-full">
            <h2 className="text-xl font-normal text-gray-400 lowercase">firstraydesigns</h2>
              <div className="flex gap-3 items-center">
                <a href="https://firstraydesigns.com" target="_blank" rel="noopener noreferrer" aria-label="Website">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13v6l5 3-1 1.5-6-3.5V7h2z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/firstraycustom" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative" style={{ height: "560px", position: "relative", zIndex: 50 }}>
              <div
                className="absolute inset-0 flex items-center justify-center text-center z-0"
                style={{ opacity: scatteredFirstray ? 1 : 0 }}
              >
                <div className="space-y-4 text-sm text-gray-500 leading-relaxed lowercase text-center px-10">
                  <p>over quarantine i wanted to start a business. i was always drawn to entrepreneurship and the free time felt like a sign. i wanted it to mean something, so i thought about causes close to my heart and landed on <strong>children's hospitals</strong>. growing up i had a condition called <em>4th nerve palsy</em> that had me in and out of hospitals, and the sticker at the end of every visit always put a smile on my face. i wanted to give that back, especially to <em>teenagers who had outgrown the disney and cartoon stickers</em>. that is where <strong>first ray designs</strong> was born.</p>
                  <p>it wasn't easy. i taught myself to digitally hand draw every design on my ipad, cut them at home using a <strong>cricut machine</strong>, and package them myself. getting sales was its own challenge, which pushed me to think creatively about marketing. that led to <strong>firstraycustom</strong>, an account where i drew celebrities in sticker form, gaining real traction and <em>attention from some big names</em>.</p>
                  <p>all net proceeds went directly to <strong>children's hospitals across the country</strong>, with 50% benefiting the <em>recreational therapy fun fund at lucile packard children's hospital stanford</em> and the rest going to <strong>st. jude's children's hospital</strong>. i also reached out directly to hospitals to donate <strong>200k stickers</strong>, hoping to bring a small moment of joy to kids who needed it most. i am grateful to the <em>20+ hospitals nationwide</em> who responded with kind words, pictures, and testimonials that reminded me exactly why i started.</p>
                </div>
              </div>

              <div className="absolute inset-0 z-10 grid grid-cols-2 gap-2 h-full">
                {FIRSTRAY_CARDS.map((card) => (
                  <div
                    key={card.key}
                    className="flip-card relative cursor-pointer rounded-2xl"
                    style={{
                      perspective: "1000px",
                      height: "100%",
                      ...(scatteredFirstray
                        ? {
                            transition: "transform 0.7s ease, opacity 0.7s ease",
                            transform: SCATTER_FIRSTRAY[card.key],
                            opacity: 0,
                          }
                        : {}),
                    }}
                  >
                    <div className="flip-inner" style={{ position: "absolute", inset: 0 }}>
                      <div
                        className="absolute inset-0 rounded-2xl border border-gray-200"
                        style={{
                          backgroundImage: `url('/images/${card.key}.png')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <p className="absolute bottom-3 left-4"><span className="bg-[#888888]/60 px-3 py-1 rounded-full text-xs text-white lowercase">{card.label}</span></p>
                      </div>
                      <div
                        className="absolute inset-0 bg-white rounded-2xl p-5 flex items-center justify-center border border-gray-100"
                        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                      >
                        {card.key === "firstray-shop" ? (
                          <div className="space-y-2 text-sm text-gray-500 leading-relaxed lowercase">
                            <p>building firstraydesigns.com on wix was my <em>first time owning a business from start to finish</em>. every decision, from the layout to the product listings, was <strong>mine to make</strong>.</p>
                          </div>
                        ) : card.key === "firstray-stickers" ? (
                          <div className="space-y-2 text-sm text-gray-500 leading-relaxed lowercase">
                            <p>i designed stickers i would actually want to buy, drew them on my ipad, printed and cut them on a cricut, then <strong>packaged every single one by hand</strong>. the whole process, from concept to delivery, was <em>entirely mine</em>.</p>
                          </div>
                        ) : card.key === "firstray-custom" ? (
                          <div className="space-y-2 text-sm text-gray-500 leading-relaxed lowercase">
                            <p>my marketing strategy was drawing <strong>celebrities in sticker form</strong>. one of my favorite influencers reposted my work and it received over <em>53k likes</em>, my first taste of <strong>social media virality</strong>.</p>
                          </div>
                        ) : (
                          <div className="space-y-2 text-sm text-gray-500 leading-relaxed lowercase">
                            <p>i partnered with local businesses to expand my mission. one collab with <strong>jiaren cafe</strong> had me <em>hand delivering drinks to hospitals</em> packaged with my stickers. others included caitlin smiles and inAtalent, adding handmade beanies and cards to the packages.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6">
              {!scatteredFirstray ? (
                <button
                  type="button"
                  onClick={() => setScatteredFirstray(true)}
                  className="px-6 py-2 rounded-full text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors lowercase"
                >
                  learn more
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setScatteredFirstray(false)}
                  className="px-6 py-2 rounded-full text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors lowercase"
                >
                  show less
                </button>
              )}
            </div>
          </div>

          </div>
        </section>
      </main>
    </PageLayout>
  );
}
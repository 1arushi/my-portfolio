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

export default function CreativePage() {
  const [hovered, setHovered] = useState<CardKey | null>(null);
  const [scattered, setScattered] = useState(false);

  return (
    <PageLayout>
      <main className="container mx-auto px-6 py-1 -mt-8 font-sans text-[#434040] lowercase">
        <section className="max-w-4xl mx-auto pt-2 pb-12">

          <h2 className="text-4xl font-normal text-gray-400 lowercase mb-3">why creative?</h2>
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

          <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-8 py-10">
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

            <div className="relative" style={{ height: "560px" }}>
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
                      className="relative cursor-pointer rounded-2xl"
                      style={{
                        transformStyle: "preserve-3d",
                        transition: scattered
                          ? "transform 0.7s ease, opacity 0.7s ease"
                          : "transform 0.5s ease",
                        transform: scattered
                          ? SCATTER[card.key]
                          : hovered === card.key
                          ? "rotateY(180deg)"
                          : "rotateY(0deg)",
                        opacity: scattered ? 0 : 1,
                        perspective: "1000px",
                        height: "100%",
                      }}
                      onMouseEnter={() => !scattered && setHovered(card.key)}
                      onMouseLeave={() => setHovered(null)}
                    >
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
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2" style={{ flex: 1 }}>
                  {CARDS.slice(2).map((card) => (
                    <div
                      key={card.key}
                      className="relative cursor-pointer rounded-2xl"
                      style={{
                        transformStyle: "preserve-3d",
                        transition: scattered
                          ? "transform 0.7s ease, opacity 0.7s ease"
                          : "transform 0.5s ease",
                        transform: scattered
                          ? SCATTER[card.key]
                          : hovered === card.key
                          ? "rotateY(180deg)"
                          : "rotateY(0deg)",
                        opacity: scattered ? 0 : 1,
                        perspective: "1000px",
                        height: "100%",
                      }}
                      onMouseEnter={() => !scattered && setHovered(card.key)}
                      onMouseLeave={() => setHovered(null)}
                    >
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

        </section>
      </main>
    </PageLayout>
  );
}
"use client";

import { useState } from "react";
import PageLayout from "../../components/PageLayout";

const CAROUSEL_COUNT = 4;

export default function AboutPage() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [liked, setLiked] = useState(false);
  const [imageModal, setImageModal] = useState<string | null>(null);

  return (
    <PageLayout>
      <main className="container mx-auto px-6 py-1 -mt-8 font-sans text-[#434040] lowercase">
        {/* Instagram-style profile card */}
        <section className="max-w-lg mx-auto pt-2 pb-12">
          <div className="bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden">
            {/* Header row */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <img src="/images/avatar.png" className="w-10 h-10 rounded-full object-cover" />
                <span className="text-sm text-gray-500">about me</span>
              </div>
              <a
                href="https://www.instagram.com/arushi.i"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto px-4 py-1 rounded-md text-xs font-medium bg-[#D9D9D9] text-white hover:bg-gray-300 transition-colors lowercase"
              >
                follow
              </a>
              <span className="text-gray-500 text-lg font-semibold ml-2">...</span>
            </div>

            {/* Photo carousel */}
            <div className="relative">
              <div className="relative">
                <div className="h-80 w-full rounded-none overflow-hidden">
                  <div className="w-full h-80 bg-gray-200" />
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentPhoto((p) => (p === 0 ? CAROUSEL_COUNT - 1 : p - 1))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:bg-white/80 transition-colors shadow-sm"
                  aria-label="Previous photo"
                >
                  &#8249;
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentPhoto((p) => (p === CAROUSEL_COUNT - 1 ? 0 : p + 1))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:bg-white/80 transition-colors shadow-sm"
                  aria-label="Next photo"
                >
                  &#8250;
                </button>
              </div>
              {/* Dot indicators */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
                {Array.from({ length: CAROUSEL_COUNT }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentPhoto(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentPhoto ? "bg-gray-600" : "bg-gray-300"
                    }`}
                    aria-label={`Go to photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Action row: heart, comment, share, bookmark */}
            <div className="flex items-center gap-4 px-4 py-2 border-b border-gray-100">
              {liked ? (
                <img
                  src="/images/icon-heart-red.png"
                  alt=""
                  role="button"
                  tabIndex={0}
                  onClick={() => setLiked(!liked)}
                  onKeyDown={(e) => e.key === "Enter" && setLiked(false)}
                  className="w-6 h-6 cursor-pointer"
                />
              ) : (
                <img
                  src="/images/icon-heart.png"
                  alt=""
                  role="button"
                  tabIndex={0}
                  onClick={() => setLiked(!liked)}
                  onKeyDown={(e) => e.key === "Enter" && setLiked(true)}
                  className="w-6 h-6 cursor-pointer"
                />
              )}
              <img src="/images/icon-comment.png" alt="" className="w-6 h-6" />
              <img src="/images/icon-share.png" alt="" className="w-6 h-6" />
              <img src="/images/icon-bookmark.png" alt="" className="w-6 h-6 ml-auto" />
            </div>

            {/* Caption */}
            <div className="px-4 py-3">
              <p className="text-sm text-[#434040] leading-relaxed lowercase mt-2">
                <span className="font-bold">about me</span>{" "}
                hi! i'm arushi :)<br />
                a 3rd year data science & cognitive science major at ucla!
              </p>
              <p className="text-sm text-[#434040] leading-relaxed lowercase mt-3">
                my favorite thing is being at the intersection of technology, people, and creativity — understanding how they shape each other and finding my place within that.
              </p>
              <p className="text-sm text-[#434040] leading-relaxed lowercase mt-3">
                i believe that as the world becomes more technical, the most important thing we can do is move forward without losing what makes us human: creativity, care, and thoughtfulness. that is what drives everything i build and create.
              </p>
              <p className="text-sm text-[#434040] leading-relaxed lowercase mt-3">
                outside of work i love exploring new cafes, creating content, having deep conversations, storytelling, and capturing life in the most beautiful way i can.
              </p>
              <p className="text-sm text-[#6B7FD4] leading-relaxed lowercase mt-3">
                #productmanagement (jira, asana, workflow, agile methodologies)<br />
                #technical (r, sql, python, c++, java, cursor, vibe coding)<br />
                #data (tableau, power bi, power automate, excel)<br />
                #design (canva, figma, photoshop, video editing, capcut)
              </p>
            </div>
          </div>
        </section>

        {/* Experience section */}
        <section id="experience-row" className="max-w-4xl mx-auto pb-12">
          <h2 className="text-3xl font-normal text-[#717171] lowercase mb-3">experience</h2>
          <div className="flex flex-row justify-between items-center w-full">
            {[
              "/images/logo-cisco.png",
              "/images/logo-notion.png",
              "/images/logo-acely.png",
              "/images/logo-uber.png",
              "/images/logo-microsoft.png",
            ].map((src) => (
              <div
                key={src}
                className="bg-white rounded-2xl shadow-md border border-gray-200 w-[115px] h-[115px] flex items-center justify-center"
              >
                <img src={src} alt="" className="w-16 h-16 object-contain" />
              </div>
            ))}
          </div>
        </section>

        {/* Community section */}
        <section className="max-w-4xl mx-auto pb-12">
          <h2 className="text-3xl font-normal text-[#717171] lowercase mb-3">community</h2>

          {/* DevX — normal layout */}
          <div className="flex flex-col mb-24">
            <div className="flex items-start gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 w-[100px] h-[100px] flex-shrink-0 overflow-hidden flex items-center justify-center">
                  <img src="/images/logo-devx.png" alt="" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-xl font-normal text-[#717171] lowercase">ucla devx</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed lowercase ml-auto max-w-xs">
                devx has been a beautiful community of creative builders. i am grateful to have grown throughout my 3 years at ucla from a marketing lead to product manager to president, and to have been able to give back by growing the club entrepreneurially and expanding professional opportunities for our members.
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-4 ml-4">
              <div onClick={() => setImageModal("/images/devx-community1.png")} className="cursor-pointer">
                <img src="/images/devx-community1.png" alt="" className="h-44 w-auto object-cover" style={{ transform: "rotate(-4deg)" }} />
              </div>
              <div onClick={() => setImageModal("/images/devx-community2.png")} className="cursor-pointer">
                <img src="/images/devx-community2.png" alt="" className="h-44 w-auto object-cover" style={{ transform: "rotate(6deg) translateY(16px)" }} />
              </div>
              <div onClick={() => setImageModal("/images/devx-community3.png")} className="cursor-pointer">
                <img src="/images/devx-community3.png" alt="" className="h-44 w-auto object-cover" style={{ transform: "rotate(-2deg) translateY(8px)" }} />
              </div>
            </div>
          </div>

          {/* Sigma Eta Pi — two columns: paragraph left; title+logo then photos right */}
          <div className="flex flex-col mb-24">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col max-w-xs">
                <p className="text-sm text-gray-500 leading-relaxed lowercase">
                  sigma eta pi, ucla's professional co-ed entrepreneurship fraternity, has been an incredible community of passionate builders who constantly inspire me to keep creating. i am grateful to have given back through roles as rush chair (director of recruitment) and vppa (vice president of professional affairs), helping shape the community that shaped me.
                </p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-xl font-normal text-[#717171] lowercase">sigma eta pi</h3>
                  <div className="bg-white rounded-2xl shadow-md border border-gray-200 w-[100px] h-[100px] flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <img src="/images/logo-sep.png" alt="" className="w-16 h-16 object-contain" />
                  </div>
                </div>
                <div className="flex flex-row gap-4 mt-16">
                  <div onClick={() => setImageModal("/images/sep-community1.png")} className="cursor-pointer">
                    <img src="/images/sep-community1.png" alt="" className="h-44 w-auto object-cover" style={{ transform: "rotate(-4deg)" }} />
                  </div>
                  <div onClick={() => setImageModal("/images/sep-community3.png")} className="cursor-pointer">
                    <img src="/images/sep-community3.png" alt="" className="h-44 w-auto object-cover" style={{ transform: "rotate(6deg) translateY(16px)" }} />
                  </div>
                  <div onClick={() => setImageModal("/images/sep-community2.png")} className="cursor-pointer">
                    <img src="/images/sep-community2.png" alt="" className="h-44 w-auto object-cover" style={{ transform: "rotate(-2deg) translateY(8px)" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Space — normal layout */}
          <div className="flex flex-col mb-24">
            <div className="flex items-start gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 w-[100px] h-[100px] flex-shrink-0 overflow-hidden flex items-center justify-center">
                  <img src="/images/logo-productspace.png" alt="" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-xl font-normal text-[#717171] lowercase">product space</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed lowercase ml-auto max-w-xs">
                knowing i wanted to pursue product, product space was my dream organization to join. it has given me deep insight into the product world and connected me with like-minded people who are constantly pushing themselves to improve. everyone there inspires me to stay ambitious and keep going after what i want.
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-4 ml-4">
              <div onClick={() => setImageModal("/images/ps-community1.png")} className="cursor-pointer">
                <img src="/images/ps-community1.png" alt="" className="h-44 w-auto object-cover" style={{ transform: "rotate(-4deg)" }} />
              </div>
              <div onClick={() => setImageModal("/images/ps-community2.png")} className="cursor-pointer">
                <img src="/images/ps-community2.png" alt="" className="h-44 w-auto object-cover" style={{ transform: "rotate(6deg) translateY(16px)" }} />
              </div>
              <div onClick={() => setImageModal("/images/ps-community3.png")} className="cursor-pointer">
                <img src="/images/ps-community3.png" alt="" className="h-44 w-auto object-cover" style={{ transform: "rotate(-2deg) translateY(8px)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Media I live by section */}
        <section className="max-w-4xl mx-auto pb-16">
          <h2 className="text-3xl font-normal text-[#717171] lowercase mb-3">media i live by</h2>
          <div className="grid grid-cols-3 gap-10 w-full">
            {[
              "placeholder 1",
              "placeholder 2",
              "placeholder 3",
              "placeholder 4",
              "placeholder 5",
              "placeholder 6",
            ].map((label) => (
              <div
                key={label}
                className="bg-white rounded-2xl shadow-md border border-gray-200 w-full h-[350px] flex flex-col items-center justify-start pt-6 px-6"
              >
                <div className="bg-gray-200 w-[145px] h-[205px] shrink-0" />
                <p className="mt-4 text-sm text-gray-500 text-center lowercase">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      {imageModal && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={() => setImageModal(null)}
        >
          <img
            src={imageModal}
            alt=""
            className="max-h-[85vh] max-w-[85vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </PageLayout>
  );
}

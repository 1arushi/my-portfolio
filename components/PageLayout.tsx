"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/arushi.i", label: "Instagram" },
  { href: "https://www.linkedin.com/in/1arushigupta", label: "LinkedIn" },
  { href: "https://x.com/arushi_i", label: "Twitter" },
];

const NAV = [
  { href: "/", label: "projects" },
  { href: "/creative", label: "creative" },
  { href: "/about", label: "about me" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-6 py-16">
        <div className="space-y-1">
          <h1 className="text-4xl font-normal text-[#434040] lowercase">
            arushi gupta
          </h1>
          <p className="text-sm text-gray-500 lowercase">
            product manager, data scientist, creative storyteller
          </p>
        </div>
        <div className="flex gap-4 mt-4 mb-6">
          {NAV.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 lowercase ${
                  isActive
                    ? "bg-[#434040] text-white hover:bg-[#555353]"
                    : "border border-gray-300 text-gray-500 hover:bg-gray-50"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
        <div className="border-t border-gray-300" />
      </header>

      {children}

      {/* Footer */}
      <footer className="container mx-auto px-6 py-16 mt-auto">
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-1">
              <h2 className="text-lg font-light text-gray-800 lowercase">
                arushi gupta
              </h2>
              <div className="flex gap-4">
                <a
                  href={SOCIAL_LINKS[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                  aria-label={SOCIAL_LINKS[0].label}
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href={SOCIAL_LINKS[1].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                  aria-label={SOCIAL_LINKS[1].label}
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
                <a
                  href={SOCIAL_LINKS[2].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                  aria-label={SOCIAL_LINKS[2].label}
                >
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="text-right space-y-1">
              <p className="text-sm text-gray-500 lowercase">let's connect!</p>
              <a
                href="mailto:1arushi.gupta@gmail.com"
                className="text-sm text-gray-800 hover:text-gray-600 transition-colors lowercase block"
              >
                1arushi.gupta@gmail.com
              </a>
            </div>
          </div>
        </div>
        <p className="text-xs text-[#D9D9D9] text-center mt-6 lowercase">
          made with{" "}
          <a href="https://www.instagram.com/chugofmatcha" target="_blank" rel="noopener noreferrer" className="text-[#AEAEAE] hover:text-[#D9D9D9] transition-colors">
            matcha lattes
          </a>{" "}
          &{" "}
          <a href="https://substack.com/@chugoflife" target="_blank" rel="noopener noreferrer" className="text-[#AEAEAE] hover:text-[#D9D9D9] transition-colors">
            substack
          </a>{" "}
          breaks 🍵⭐️
        </p>
      </footer>
    </div>
  );
}

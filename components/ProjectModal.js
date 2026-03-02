"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, Cell, PieChart, Pie, Tooltip, ResponsiveContainer, Legend, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

export default function ProjectModal({ project, isOpen, onClose, nextProjects = [], onSelectProject, projects: allProjects = [] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevIndex = allProjects.length > 0 ? (currentIndex - 1 + allProjects.length) % allProjects.length : -1;
  const nextIndex = allProjects.length > 0 ? (currentIndex + 1) % allProjects.length : -1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      onClick={handleOverlayClick}
    >
      {/* Back / Forward buttons — outside white card */}
      {allProjects.length > 0 && onSelectProject && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (prevIndex >= 0) onSelectProject(allProjects[prevIndex]);
            }}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-[60] bg-[#D9D9D9]/50 hover:bg-[#D9D9D9]/70 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-colors duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (nextIndex >= 0) onSelectProject(allProjects[nextIndex]);
            }}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-[60] bg-[#D9D9D9]/50 hover:bg-[#D9D9D9]/70 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-colors duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      <div
        className={isExpanded
          ? "fixed inset-0 z-50 bg-white overflow-y-auto p-12 rounded-none"
          : "relative bg-white rounded-[40px] shadow-xl max-w-3xl w-full mx-4 max-h-[90vh] flex flex-col overflow-hidden animate-[fadeInScale_0.2s_ease-out]"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center text-gray-500 z-10"
        >
          {isExpanded ? "↘" : "↖"}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center text-gray-500 z-10"
          aria-label="Close"
        >
          ×
        </button>
        <div className={isExpanded ? "p-12 overflow-y-auto" : "p-12 max-h-[60vh] overflow-y-auto"}>
          {/* Company Name */}
          <h2 className="text-3xl font-semibold text-black mb-6 lowercase">
            {project.name}
          </h2>

          {/* Timeline, Role, Org, Team Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <p className="text-xs text-gray-400 mb-1 lowercase">timeline</p>
              <p className="text-sm text-gray-500 lowercase">{project.timeline}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1 lowercase">role</p>
              <p className="text-sm text-gray-500 lowercase">{project.role}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1 lowercase">org</p>
              <p className="text-sm text-gray-500 lowercase">{project.org}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1 lowercase">team</p>
              <p className="text-sm text-gray-500 lowercase">{project.team}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-6"></div>

          {/* Goal and Description — two-column */}
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <p className="text-xs text-gray-400 mb-2 lowercase">goal</p>
              <p className="text-base text-gray-900 leading-relaxed lowercase">
                {project.goal}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-2 lowercase">description</p>
              <p className="text-sm text-gray-900 leading-relaxed lowercase">
                {project.description}
              </p>
            </div>
          </div>

          {/* Case Study — full-width, only if present */}
          {project.caseStudy && (() => {
            const BOLD_WORDS = /(excel|power automate|power bi|prompt engineering|data pipelines|sharepoint|tableau|RAG|\br\b)/gi;
            const isHeadingLine = (line) => {
              const t = line.trim().toLowerCase();
              return t.startsWith("project") || t.startsWith("bonus");
            };
            const renderParagraphWithBold = (text) => {
              const parts = text.split(BOLD_WORDS);
              return parts.map((part, i) =>
                part.toLowerCase().match(/^(excel|power automate|power bi|prompt engineering|data pipelines|sharepoint|tableau|rag|r)$/i) ? (
                  <strong key={i} style={{ color: "#434040" }}>{part}</strong>
                ) : (
                  part
                )
              );
            };

            const renderSectionText = (block) =>
              block.split("\n").map((line, i) => {
                const trimmed = line.trim();
                if (!trimmed) return <div key={i} className="h-2" />;
                if (trimmed.toLowerCase().startsWith("project ")) {
                  return (
                    <p key={i} className="font-semibold text-gray-900 lowercase leading-relaxed underline">
                      {trimmed}
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-sm text-gray-900 font-normal leading-relaxed lowercase whitespace-pre-line">
                    {trimmed}
                  </p>
                );
              });

            // Microsoft: render section as single heading + single paragraph (no extra line breaks)
            const renderMicrosoftSectionText = (block) => {
              const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
              const heading = lines.find((l) => l.toLowerCase().startsWith("project "));
              const paragraphLines = lines.filter((l) => !l.toLowerCase().startsWith("project "));
              const paragraphText = paragraphLines.join(" ");
              return (
                <>
                  {heading && (
                    <p className="font-semibold text-gray-900 lowercase leading-relaxed underline">
                      {heading}
                    </p>
                  )}
                  {paragraphText && (
                    <p className="text-sm text-gray-900 font-normal leading-relaxed lowercase whitespace-pre-line">
                      {paragraphText}
                    </p>
                  )}
                </>
              );
            };

            // Uber: sectioned case study with charts
            if (project.id === "uber") {
              const UBER_FRUSTRATIONS = [
                { name: "expensive fees", value: 71 },
                { name: "long wait times", value: 32 },
                { name: "stolen/lost orders", value: 12 },
                { name: "limited options", value: 8 },
                { name: "unclear delivery", value: 6 },
              ];
              const UBER_UBER_ONE = [
                { name: "heard of it, not using", value: 49 },
                { name: "active member", value: 16 },
                { name: "never heard of it", value: 9 },
              ];
              const UBER_LOCKER = [
                { name: "maybe", value: 41 },
                { name: "definitely", value: 18 },
                { name: "probably not", value: 8 },
                { name: "not sure", value: 6 },
                { name: "definitely not", value: 1 },
              ];
              const PIE_COLORS = ["#434040", "#D9D9D9", "#888888"];
              const sections = project.caseStudy.split(/(?=\nproject \d —)/);
              const intro = sections[0].trim();
              const section1 = sections[1] || "";
              const section2 = sections[2] || "";
              const section3 = sections[3] || "";

              return (
                <>
                  <div className="border-t border-gray-200 my-6"></div>
                  <p className="text-xs text-gray-400 mb-2 lowercase">overview</p>
                  <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1 mb-6">
                    {intro.split("\n").map((line, i) => {
                      const trimmed = line.trim();
                      if (!trimmed) return <div key={i} className="h-2" />;
                      return (
                        <p key={i} className="text-sm text-gray-900 font-normal leading-relaxed lowercase whitespace-pre-line">
                          {trimmed}
                        </p>
                      );
                    })}
                  </div>
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-6 items-start">
                      <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                        {renderSectionText(section1)}
                      </div>
                      <div className="max-w-[200px] w-full h-[180px] flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={UBER_FRUSTRATIONS} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                            <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#9ca3af" }} />
                            <YAxis type="category" dataKey="name" width={100} tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                            <Bar dataKey="value" fill="#434040" radius={0} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-6 items-start">
                      <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                        {renderSectionText(section2)}
                      </div>
                      <div className="max-w-[200px] w-full h-[180px] flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={UBER_UBER_ONE}
                              dataKey="value"
                              nameKey="name"
                              cx="50%"
                              cy="50%"
                              innerRadius={50}
                              outerRadius={70}
                              paddingAngle={0}
                            >
                              {UBER_UBER_ONE.map((_, i) => (
                                <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-6 items-start">
                      <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                        {renderSectionText(section3)}
                      </div>
                      <div className="max-w-[200px] w-full h-[180px] flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={UBER_LOCKER} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                            <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                            <YAxis hide />
                            <Bar dataKey="value" fill="#434040" radius={0} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </>
              );
            }

            // Microsoft: sectioned case study with charts below each project paragraph
            if (project.id === "microsoft") {
              const MS_PAIN_POINTS = [
                { name: "advanced knowledge", value: 86 },
                { name: "time consuming", value: 64 },
                { name: "creating visuals", value: 42 },
                { name: "understanding formulas", value: 42 },
              ];
              const MS_USE_CASES = [
                { name: "academic", value: 80 },
                { name: "internships", value: 63 },
                { name: "personal finance", value: 45 },
                { name: "never used", value: 7 },
              ];
              const MS_LEARNING_PREFERENCES = [
                { name: "online tutorials", value: 81 },
                { name: "study guides", value: 49 },
                { name: "workshops", value: 35 },
                { name: "webinars", value: 23 },
              ];
              const MS_COLORS = ["#f35629", "#7ebb01", "#ffba06", "#05a3ee"];

              const sections = project.caseStudy.split(/(?=\nproject \d —)/);
              const intro = sections[0].trim();
              const section1 = sections[1] || "";
              const section2 = sections[2] || "";
              const section3 = sections[3] || "";
              const section4 = sections[4] || "";

              return (
                <>
                  <div className="border-t border-gray-200 my-6"></div>
                  <p className="text-xs text-gray-400 mb-2 lowercase">overview</p>
                  <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1 mb-6">
                    {intro.split("\n").map((line, i) => {
                      const trimmed = line.trim();
                      if (!trimmed) return <div key={i} className="h-2" />;
                      return (
                        <p key={i} className="text-sm text-gray-900 font-normal leading-relaxed lowercase whitespace-pre-line">
                          {trimmed}
                        </p>
                      );
                    })}
                  </div>
                  <div className="space-y-8">
                    {/* Project 1 — pain points (horizontal bar chart) */}
                    <div>
                      <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                        {renderMicrosoftSectionText(section1)}
                      </div>
                      <div className="w-full mt-4" style={{ height: 180 }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={MS_PAIN_POINTS} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                            <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: "#9ca3af" }} />
                            <YAxis type="category" dataKey="name" width={100} tick={{ fontSize: 9, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                            <Bar dataKey="value" radius={0}>
                              {MS_PAIN_POINTS.map((_, i) => (
                                <Cell key={i} fill={MS_COLORS[i % MS_COLORS.length]} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Project 2 — use cases (donut chart with legend) */}
                    <div>
                      <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                        {renderMicrosoftSectionText(section2)}
                      </div>
                      <div className="w-full mt-4" style={{ height: 220 }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={MS_USE_CASES}
                              dataKey="value"
                              nameKey="name"
                              cx="50%"
                              cy="45%"
                              innerRadius={50}
                              outerRadius={80}
                              paddingAngle={0}
                            >
                              {MS_USE_CASES.map((_, i) => (
                                <Cell key={i} fill={MS_COLORS[i % MS_COLORS.length]} />
                              ))}
                            </Pie>
                            <Legend layout="horizontal" align="center" wrapperStyle={{ paddingTop: 8 }} tick={{ fontSize: 9, fill: "#9ca3af" }} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Project 3 — learning preferences (radar chart) */}
                    <div>
                      <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                        {renderMicrosoftSectionText(section3)}
                      </div>
                      <div className="w-full mt-4" style={{ height: 220 }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <RadarChart data={MS_LEARNING_PREFERENCES} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                            <PolarGrid stroke="#e5e7eb" />
                            <PolarAngleAxis dataKey="name" tick={{ fontSize: 9, fill: "#9ca3af" }} />
                            <PolarRadiusAxis angle={90} tick={{ fontSize: 9, fill: "#9ca3af" }} />
                            <Radar name="value" dataKey="value" stroke="#f35629" fill="#f35629" fillOpacity={0.3} />
                          </RadarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Project 4 — final recommendations (text only) */}
                    {section4 && (
                      <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                        {renderMicrosoftSectionText(section4)}
                      </div>
                    )}
                  </div>
                </>
              );
            }

            // Acely: sectioned case study with 3 charts after project 3
            if (project.id === "acely" && project.caseStudy) {
              const ACELY_PERFORMANCE = [
                { name: "dec", value: 19 },
                { name: "feb", value: 7 },
                { name: "apr", value: 6 },
                { name: "jan", value: 6 },
                { name: "mar", value: 6 },
                { name: "may", value: 3 },
                { name: "jul", value: 2 },
                { name: "jun", value: 1 },
              ];
              const ACELY_AUDIENCE = [
                { name: "high school", value: 68 },
                { name: "anyone", value: 26 },
                { name: "college", value: 4 },
                { name: "post college", value: 2 },
              ];
              const ACELY_AUDIENCE_COLORS = ["#2e3bd9", "#4653f9", "#5f6cfa", "#919efc"];

              const sections = project.caseStudy.split(/(?=\nproject \d —)/);
              const intro = sections[0].trim();
              const section1 = sections[1] || "";
              const section2 = sections[2] || "";
              const section3 = sections[3] || "";
              const section4 = sections[4] || "";

              return (
                <>
                  <div className="border-t border-gray-200 my-6"></div>
                  <p className="text-xs text-gray-400 mb-2 lowercase">overview</p>
                  <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1 mb-6">
                    {intro.split("\n").map((line, i) => {
                      const trimmed = line.trim();
                      if (!trimmed) return <div key={i} className="h-2" />;
                      return (
                        <p key={i} className="text-sm text-gray-900 font-normal leading-relaxed lowercase whitespace-pre-line">
                          {trimmed}
                        </p>
                      );
                    })}
                  </div>
                  <div className="space-y-8">
                    <div>
                      <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                        {(() => {
                          const lines = section1.split("\n").map((l) => l.trim()).filter(Boolean);
                          const heading = lines.find((l) => l.toLowerCase().startsWith("project "));
                          const paragraphText = lines.filter((l) => !l.toLowerCase().startsWith("project ")).join(" ");
                          const parts = paragraphText.split("creative tab");
                          const paragraphContent = parts.length > 1 ? (
                            <>{parts[0]}<a href="/creative" className="underline text-[#434040] hover:opacity-70 cursor-pointer">creative tab</a>{parts[1]}</>
                          ) : (
                            paragraphText
                          );
                          return (
                            <>
                              {heading && (
                                <p className="font-semibold text-gray-900 lowercase leading-relaxed underline">{heading}</p>
                              )}
                              <p className="text-sm text-gray-900 font-normal leading-relaxed lowercase whitespace-pre-line">
                                {paragraphContent}
                              </p>
                            </>
                          );
                        })()}
                      </div>
                      <div className="w-full mt-4">
                        <p className="text-xs text-gray-400 mb-2 lowercase">viral content</p>
                        <div className="overflow-x-auto flex gap-3">
                          {[
                            { src: "/images/acely-viral1.png", caption: "293k views" },
                            { src: "/images/acely-viral2.png", caption: "255k views" },
                            { src: "/images/acely-viral3.png", caption: "112k views" },
                            { src: "/images/acely-viral4.png", caption: "64.8k views" },
                            { src: "/images/acely-viral5.png", caption: "57.8k views" },
                          ].map(({ src, caption }, i) => (
                            <figure key={i} className="flex-shrink-0">
                              <img src={src} alt="" className="h-48 w-auto rounded-xl object-cover flex-shrink-0" />
                              <figcaption className="text-xs text-gray-400 text-center mt-1">{caption}</figcaption>
                            </figure>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                      {renderMicrosoftSectionText(section2)}
                    </div>
                    <div>
                      <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                        {renderMicrosoftSectionText(section3)}
                      </div>
                      <div className="grid grid-cols-2 gap-6 mt-4">
                        <div>
                          <p className="text-xs text-gray-400 mb-2 lowercase">performance by month</p>
                          <div style={{ height: 200 }}>
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={ACELY_PERFORMANCE} margin={{ top: 0, right: 0, left: 0, bottom: 20 }}>
                                <XAxis dataKey="name" tick={{ fontSize: 9, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                                <YAxis hide />
                                <Bar dataKey="value" fill="#4653f9" radius={0} />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-2 lowercase">target audience breakdown</p>
                          <div style={{ height: 250 }}>
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={ACELY_AUDIENCE}
                                  dataKey="value"
                                  nameKey="name"
                                  cx="50%"
                                  cy="45%"
                                  innerRadius={50}
                                  outerRadius={80}
                                  paddingAngle={0}
                                >
                                  {ACELY_AUDIENCE.map((_, i) => (
                                    <Cell key={i} fill={ACELY_AUDIENCE_COLORS[i % ACELY_AUDIENCE_COLORS.length]} />
                                  ))}
                                </Pie>
                                <Legend layout="horizontal" align="center" wrapperStyle={{ paddingTop: 8 }} tick={{ fontSize: 9, fill: "#9ca3af" }} />
                              </PieChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                      {renderMicrosoftSectionText(section4)}
                    </div>
                  </div>
                </>
              );
            }

            // Blink: sectioned case study with image strips inside each project section
            if (project.id === "blink" && project.caseStudy) {
              const sections = project.caseStudy.split(/(?=\nproject \d —)/);
              const intro = sections[0].trim();
              const section1 = sections[1] || "";
              const section2 = sections[2] || "";
              const section3 = sections[3] || "";
              const section4 = sections[4] || "";

              const ImageStrip = ({ label, images }) => (
                <div className="w-full mt-4">
                  <p className="text-xs text-gray-400 mb-2 lowercase">{label}</p>
                  <div className="overflow-x-auto flex gap-3">
                    {images.map((src, i) => (
                      <img key={i} src={src} alt="" className="h-48 w-auto rounded-xl object-cover flex-shrink-0" />
                    ))}
                  </div>
                </div>
              );

              const BLINK_MVP_IMAGES = ["/images/blink-mvp.png"];
              const BLINK_DESIGN_IMAGES = ["/images/blink-v1.png", "/images/blink-v2.png", "/images/blink-v3.png", "/images/blink-v4.png"];
              const BLINK_VIRAL_IMAGES = ["/images/blink-viral1.png", "/images/blink-viral2.png", "/images/blink-viral3.png"];
              const BLINK_FUNDRAISER_IMAGES = ["/images/blink-fundraiser1.jpg", "/images/blink-fundraiser2.jpg"];

              return (
                <>
                  <div className="border-t border-gray-200 my-6"></div>
                  <p className="text-xs text-gray-400 mb-2 lowercase">overview</p>
                  <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1 mb-6">
                    {intro.split("\n").map((line, i) => {
                      const trimmed = line.trim();
                      if (!trimmed) return <div key={i} className="h-2" />;
                      return (
                        <p key={i} className="text-sm text-gray-900 font-normal leading-relaxed lowercase whitespace-pre-line">
                          {trimmed}
                        </p>
                      );
                    })}
                  </div>
                  <div className="space-y-8">
                    <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                      {renderMicrosoftSectionText(section1)}
                    </div>
                    <div>
                      <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                        {renderMicrosoftSectionText(section2)}
                      </div>
                      <ImageStrip label="design progression" images={BLINK_DESIGN_IMAGES} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                        {renderMicrosoftSectionText(section3)}
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <p className="text-xs text-gray-400 mb-2 lowercase">social media mvp</p>
                          <img src="/images/blink-mvp.png" alt="" className="h-48 w-full object-cover rounded-xl" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-2 lowercase">viral content</p>
                          <div className="overflow-x-auto flex gap-3">
                            {BLINK_VIRAL_IMAGES.map((src, i) => (
                              <img key={i} src={src} alt="" className="h-48 w-auto rounded-xl object-cover flex-shrink-0" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                        {renderMicrosoftSectionText(section4)}
                      </div>
                      <ImageStrip label="fundraiser" images={BLINK_FUNDRAISER_IMAGES} />
                    </div>
                  </div>
                </>
              );
            }

            // Bruin Tank: sectioned case study with bold words and sponsor logos
            if (project.id === "bruin-tank" && project.caseStudy) {
              const sections = project.caseStudy.split(/(?=\nproject \d —)/);
              const intro = sections[0].trim();
              const section1 = sections[1] || "";
              const section2 = sections[2] || "";
              const section3 = sections[3] || "";

              const renderBruinTankSection = (block, boldPhrases) => {
                const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
                const heading = lines.find((l) => l.toLowerCase().startsWith("project "));
                const paragraphText = lines.filter((l) => !l.toLowerCase().startsWith("project ")).join(" ");
                if (boldPhrases.length === 0) {
                  return (
                    <>
                      {heading && <p className="font-semibold text-gray-900 lowercase leading-relaxed underline">{heading}</p>}
                      <p className="text-sm text-gray-900 font-normal leading-relaxed lowercase whitespace-pre-line">{paragraphText}</p>
                    </>
                  );
                }
                const escaped = boldPhrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
                const regex = new RegExp(`(${escaped.join("|")})`, "g");
                const parts = paragraphText.split(regex);
                const paragraphContent = (
                  <>
                    {parts.map((part, i) =>
                      boldPhrases.includes(part) ? (
                        <strong key={i} style={{ color: "#434040" }}>{part}</strong>
                      ) : (
                        part
                      )
                    )}
                  </>
                );
                return (
                  <>
                    {heading && <p className="font-semibold text-gray-900 lowercase leading-relaxed underline">{heading}</p>}
                    <p className="text-sm text-gray-900 font-normal leading-relaxed lowercase whitespace-pre-line">{paragraphContent}</p>
                  </>
                );
              };

              const BRUIN_TANK_SPONSORS = [
                { src: "/images/figma-logo.png", caption: "figma", imgClassName: "w-10 h-10 object-contain" },
                { src: "/images/notion-logo.png", caption: "notion", imgClassName: "w-9 h-9 object-contain" },
                { src: "/images/elevenlabs-logo.png", caption: "elevenlabs", imgClassName: "w-10 h-10 object-contain" },
                { src: "/images/perplexity-logo.png", caption: "perplexity", imgClassName: "w-10 h-10 object-contain" },
                { src: "/images/monster-logo.png", caption: "monster", imgClassName: "w-10 h-10 object-contain" },
              ];

              return (
                <>
                  <div className="border-t border-gray-200 my-6"></div>
                  <p className="text-xs text-gray-400 mb-2 lowercase">overview</p>
                  <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1 mb-6">
                    {intro.split("\n").map((line, i) => {
                      const trimmed = line.trim();
                      if (!trimmed) return <div key={i} className="h-2" />;
                      return (
                        <p key={i} className="text-sm text-gray-900 font-normal leading-relaxed lowercase whitespace-pre-line">
                          {trimmed}
                        </p>
                      );
                    })}
                  </div>
                  <div className="space-y-8">
                    <div>
                      <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                        {renderBruinTankSection(section1, ["sponsorship packet"])}
                      </div>
                      <div className="w-full mt-4">
                        <p className="text-xs text-gray-400 mb-2 lowercase">sponsors</p>
                        <div className="flex gap-10 items-center flex-wrap">
                          {BRUIN_TANK_SPONSORS.map(({ src, caption, imgClassName }, i) => (
                            <div key={i} className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm">
                              <img src={src} alt={caption} className={imgClassName} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                      {renderBruinTankSection(section2, ["Framer", "Tally", "Figma"])}
                    </div>
                    <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                      {renderBruinTankSection(section3, ["crisis management", "adaptability"])}
                    </div>
                  </div>
                </>
              );
            }

            // Cisco: intro full-width, then all project sections with photos stacked on the left
            if (project.id === "cisco" && project.caseStudy) {
              const sections = project.caseStudy.split(/(?=\nproject \d —)/);
              const intro = sections[0].trim();
              const projectSections = sections.slice(1);

              const introLines = intro.split("\n");

              return (
                <>
                  <div className="border-t border-gray-200 my-6"></div>
                  <div>
                    <p className="text-xs text-gray-400 mb-2 lowercase">overview</p>
                    <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1 mb-6">
                      {introLines.map((line, i) => {
                        const trimmed = line.trim();
                        if (!trimmed) return <div key={i} className="h-2" />;
                        return (
                          <p key={i} className="text-sm text-gray-900 font-normal leading-relaxed lowercase whitespace-pre-line">
                            {renderParagraphWithBold(trimmed)}
                          </p>
                        );
                      })}
                    </div>
                    <div className="grid grid-cols-[160px_1fr] gap-8 items-stretch">
                      <div className="flex flex-col gap-3 pt-6 h-full">
                        <img
                          src="/images/cisco-photo1.png"
                          alt={`${project.name} photo 1`}
                          className="w-full flex-1 min-h-0 rounded-2xl object-cover"
                        />
                        <img
                          src="/images/cisco-photo2.png"
                          alt={`${project.name} photo 2`}
                          className="w-full flex-1 min-h-0 rounded-2xl object-cover"
                        />
                      </div>
                      <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                        {projectSections.map((section, idx) => {
                          const hasContent = section && section.trim().length > 0;
                          if (!hasContent) return null;
                          return <div key={idx}>{renderSectionText(section)}</div>;
                        })}
                      </div>
                    </div>
                  </div>
                </>
              );
            }

            // DevX: intro full-width, then all project sections with photos stacked on the left
            if (project.id === "devx" && project.caseStudy) {
              const sections = project.caseStudy.split(/(?=\nproject \d —)/);
              const intro = sections[0].trim();
              const projectSections = sections.slice(1);

              const introLines = intro.split("\n");

              return (
                <>
                  <div className="border-t border-gray-200 my-6"></div>
                  <div>
                    <p className="text-xs text-gray-400 mb-2 lowercase">overview</p>
                    <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1 mb-6">
                      {introLines.map((line, i) => {
                        const trimmed = line.trim();
                        if (!trimmed) return <div key={i} className="h-2" />;
                        return (
                          <p key={i} className="text-sm text-gray-900 font-normal leading-relaxed lowercase whitespace-pre-line">
                            {renderParagraphWithBold(trimmed)}
                          </p>
                        );
                      })}
                    </div>
                    <div className="grid grid-cols-[100px_1fr] gap-8 items-stretch">
                      <div className="flex flex-col gap-3 pt-6 h-full">
                        <img
                          src="/images/devx-photo3.jpeg"
                          alt={`${project.name} photo 1`}
                          className="w-full flex-1 min-h-0 rounded-2xl object-cover"
                        />
                        <img
                          src="/images/devx-photo1.jpg"
                          alt={`${project.name} photo 2`}
                          className="w-full flex-1 min-h-0 rounded-2xl object-cover"
                        />
                        <img
                          src="/images/devx-photo2.png"
                          alt={`${project.name} photo 3`}
                          className="w-full flex-1 min-h-0 rounded-2xl object-cover"
                        />
                      </div>
                      <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                        {projectSections.map((section, idx) => {
                          const hasContent = section && section.trim().length > 0;
                          if (!hasContent) return null;
                          return <div key={idx}>{renderSectionText(section)}</div>;
                        })}
                      </div>
                    </div>
                  </div>
                </>
              );
            }

            // Default: single-column case study
            const lines = project.caseStudy.split("\n");
            return (
              <>
                <div className="border-t border-gray-200 my-6"></div>
                <div>
                  <p className="text-xs text-gray-400 mb-2 lowercase">overview</p>
                  <div className="text-sm text-gray-900 leading-relaxed lowercase font-sans space-y-1">
                    {lines.map((line, i) => {
                      const trimmed = line.trim();
                      if (!trimmed) return <div key={i} className="h-2" />;
                      if (isHeadingLine(line)) {
                        return (
                          <p key={i} className="font-semibold text-gray-900 lowercase leading-relaxed underline">
                            {trimmed}
                          </p>
                        );
                      }
                      return (
                        <p key={i} className="text-sm text-gray-900 font-normal leading-relaxed lowercase whitespace-pre-line">
                          {renderParagraphWithBold(trimmed)}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })()}

          {/* Takeaway + Skills — two-column grid */}
          {(project.takeaway || project.skills) && (
            <>
              <div className="border-t border-gray-200 my-6"></div>
              <div className="grid grid-cols-2 gap-16 mt-6">
                <div>
                  <p className="text-xs text-gray-400 mb-2 lowercase">takeaway</p>
                  <p className="text-sm text-gray-900 leading-relaxed lowercase">{project.takeaway}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-2 lowercase">skills</p>
                  {project.skills && (
                    <>
                      <p className="text-xs text-gray-400 mt-2 lowercase">technical</p>
                      <p className="text-sm text-gray-900 leading-relaxed">{project.skills.technical.join(" · ")}</p>
                      <p className="text-xs text-gray-400 mt-3 lowercase">behavioral</p>
                      <p className="text-sm text-gray-900 leading-relaxed">{project.skills.behavioral.join(" · ")}</p>
                    </>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Next — two clickable cards (at bottom of scrollable content) */}
          {nextProjects.length > 0 && onSelectProject && (
            <div className="border-t border-gray-200 mt-6 pt-6">
              <p className="text-xs text-gray-400 mb-4 lowercase">next</p>
              <div className="grid grid-cols-2 gap-4">
                {nextProjects.map((nextProject) => (
                    <div
                      key={nextProject.id}
                      onClick={() => onSelectProject(nextProject)}
                      className="relative cursor-pointer rounded-[40px] overflow-hidden aspect-video transition-transform duration-200 hover:scale-[1.02]"
                    >
                      {nextProject.image && (
                        <Image
                          src={nextProject.image}
                          alt={nextProject.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

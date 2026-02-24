"use client";

import { useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "../components/ProjectModal";
import PageLayout from "../components/PageLayout";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCardClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleSelectProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
  };

  const currentIndex = selectedProject
    ? projects.findIndex((p) => p.id === selectedProject.id)
    : -1;
  const nextProjects =
    currentIndex >= 0
      ? [1, 2].map((offset) => projects[(currentIndex + offset) % projects.length])
      : [];

  return (
    <>
      <PageLayout>
        <main className="container mx-auto px-6 py-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleCardClick(project)}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative cursor-pointer rounded-[40px] overflow-hidden aspect-video transition-transform duration-200 hover:scale-[1.02] shadow-md"
              >
                <img
                  src={hoveredCard === project.id && project.gif ? project.gif : project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
                />
                <div className="absolute top-0 right-0 m-4 mr-4 mt-4">
                  <span className="text-xs text-white bg-[#D9D9D9]/50 px-3 py-1 rounded-full lowercase">
                    {project.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </PageLayout>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        nextProjects={nextProjects}
        onSelectProject={handleSelectProject}
        projects={projects}
      />
    </>
  );
}

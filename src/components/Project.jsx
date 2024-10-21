import React, { forwardRef, useState, useEffect } from "react";
import { BiLogoGithub } from "react-icons/bi";

const Project = forwardRef(({ selectedMember }, ref) => {
  if (!selectedMember) {
    return null; // If no member is selected, render nothing
  }

  const [imageIndexState, setImageIndexState] = useState({});

  const currentProject = selectedMember.projects[0]; // Assuming we're dealing with the first project

  const getImageIndexForProject = (projectId) => {
    return imageIndexState[projectId] || 0;
  };

  const nextImage = (projectId) => {
    setImageIndexState((prevState) => {
      const project = selectedMember.projects.find((p) => p.title === projectId);
      if (project && project.image.length > 0) {
        const nextIndex = (getImageIndexForProject(projectId) + 1) % project.image.length;
        return { ...prevState, [projectId]: nextIndex };
      }
      return prevState;
    });
  };

  const prevImage = (projectId) => {
    setImageIndexState((prevState) => {
      const project = selectedMember.projects.find((p) => p.title === projectId);
      if (project && project.image.length > 0) {
        const prevIndex = (getImageIndexForProject(projectId) - 1 + project.image.length) % project.image.length;
        return { ...prevState, [projectId]: prevIndex };
      }
      return prevState;
    });
  };

  return (
    <div ref={ref} className="flex min-h-screen w-full flex-col items-center justify-center gap-8 p-4 md:px-14 md:py-24">
      <h1 className="text-4xl font-light text-white md:text-6xl">
        {selectedMember.name}'s Projects
      </h1>

      <div className="flex w-full flex-col gap-8 text-white">
        {selectedMember.projects.map((project, index) => {
          const currentImageIndex = getImageIndexForProject(project.title);

          return (
            <div key={index} className="flex flex-col items-center gap-8 md:flex-row md:gap-16 lg:gap-24">
              {/* Project Image - Slideshow */}
              {project.image && project.image.length > 0 ? (
                <div className="relative group w-full md:w-[40vw] lg:w-[50vw]">
                  <img
                    src={project.image[currentImageIndex]} // Display the current image
                    alt={project.title}
                    className={
                      project.type === "android"
                        ? "rounded-2xl hover:scale-105 w-full max-w-[300px] max-h-[250vh] object-cover transition-all duration-300"
                        : "rounded-2xl hover:scale-105 w-full max-w-[100vh] max-h-[500px] object-cover transition-all duration-300"
                    }
                  />
                  {/* Hidden Navigation buttons that show on hover */}
                  {project.image.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(project.title)}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                      >
                        &#9664; {/* Left arrow */}
                      </button>
                      <button
                        onClick={() => nextImage(project.title)}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                      >
                        &#9654; {/* Right arrow */}
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <div className="text-gray-400">No project image available</div>
              )}

              {/* Project Info */}
              <div className="flex flex-col gap-5 w-full max-w-[400px]">
                {/* Project Title and Description */}
                <div className="flex flex-col gap-3">
                  <div className="text-xl font-semibold md:text-2xl">{project.title}</div>
                  <p className="text-gray-400 text-base md:text-lg">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="rounded-lg bg-black px-4 py-2 text-sm md:text-base">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-2 text-orange-500 hover:underline"
                  >
                    <BiLogoGithub className="text-2xl" color="orange" />
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Project;
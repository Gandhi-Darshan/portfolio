import React, { forwardRef } from "react";

const Project = forwardRef(({ selectedMember }, ref) => {
  if (!selectedMember) {
    return null; // If no member is selected, render nothing
  }

  return (
    <div
      ref={ref}
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <h1 className="text-4xl font-light text-white md:text-6xl">
        {selectedMember.name}'s Projects
      </h1>

      <div className="flex w-full flex-col gap-16 text-white">
        {selectedMember.projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-8 md:flex-row md:gap-24"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
            />

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                {/* Project Title */}
                <div className="text-xl font-semibold">{project.title}</div>

                {/* Project Description */}
                <p className="text-gray-400">{project.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-5">
                {project.tech.map((tech, index) => (
                  <span key={index} className="rounded-lg bg-black p-3">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Project;
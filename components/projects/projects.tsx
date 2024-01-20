import React from "react";
import { ProjectItem } from "..";

export function Projects() {
  return (
    <>
      <div className="flex items-center justify-center">
        <p
          className={`
          text-5xl
          text-light
          dark:text-dark
          `}
        >
          Projects
        </p>
      </div>
      <div className="mt-4 grid gap-3">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </>
  );
}

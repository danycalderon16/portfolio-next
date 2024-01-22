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
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        <ProjectItem key={1}/>
        <ProjectItem key={2}/>
        <ProjectItem key={3}/>
        <ProjectItem key={4}/>
         
      </div>
    </>
  );
}

import React from "react";
import { Section, Subtitle } from "@/components";
import { ProjectItem } from "..";

export function Projects() {
  return (
    <Section id="projects">
      <Subtitle text="Projects" />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        <ProjectItem key={1} />
      </div>
    </Section>
  );
}

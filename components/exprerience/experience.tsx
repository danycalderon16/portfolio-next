import React from "react";
import { TimeLine } from "./time-line";
import { Section, Subtitle } from "@/components";

export function Experience() {
  return (
    <Section id="experience">
      <Subtitle text="Experience" />
      <div>
        <TimeLine />
      </div>
    </Section>
  );
}

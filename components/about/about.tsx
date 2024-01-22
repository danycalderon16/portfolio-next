"use client";
import Image from "next/image";
import React from "react";
import { Section } from "@/components";

export const About = () => {
  return (
  <Section id="about">

    <div className="flex justify-start gap-10">
      <Image
        className="rounded-[50%]"
        src="/profile.jpeg"
        alt="profile"
        sizes="20vw"
        width={200}
        height={200}
        />
      <div className="flex-grow">
        <p className="text-[2rem] md:text-[3rem] lg:text-[4rem] dark:text-zinc-50">
          Full Stack Developer
        </p>
      </div>
    </div>
        </Section>
  );
};

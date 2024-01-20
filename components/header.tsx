import React from "react";
import Image from "next/image";
export const Header = () => {
  return (
    <div className="flex justify-start gap-10">
      <Image
        className="rounded-[50%]"
        src="/profile.jpeg"
        alt="profile"
        sizes="20vw"
        width={200}
        height={200}
      />
      <div className="flex-grow divide-y-2">
        <p className="text-[2rem] md:text-[3rem] lg:text-[4rem] dark:text-zinc-50">
          Full Stack Developer
        </p>
        
        <p className={`text-[1rem]
        md:text-[1.5rem]
        lg:text-[2rem]
        dark:text-zinc-50
        italic`
        }>
         React.JS, Next.JS, AWS, Node.JS, JavaScript, Typescript, Python, Java
        </p>
      </div>
    </div>
  );
};

import React from "react";

interface Props {
  text: string;
}

export const Subtitle = ({ text }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <h2
        className={`
    text-5xl
    text-light
    dark:text-dark
    `}
      >
        {text}
      </h2>
    </div>
  );
};

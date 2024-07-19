import React from "react";
import { urlFor } from "../../sanity/lib/client";
import Image from "next/image";
import { Section } from "../interface";

const ProjectSection = ({ projectSection }: { projectSection: Section }) => {
  console.log(projectSection);
  return (
    <div
      className={`${projectSection.background} min-h-screen w-full`}
      key={projectSection.subtitle}
    >
      <h2 className={`${projectSection.font} ${projectSection.layout}`}>
        {projectSection.subtitle}
      </h2>
      <div className="">
        {projectSection.images &&
          projectSection.images.map((image, index) => (
            <Image
              key={index}
              src={urlFor(image).url() as string}
              alt={projectSection.subtitle}
              width={200}
              height={200}
            />
          ))}
        {projectSection.text &&
          projectSection.text.map((text: string, index) => <p key={index}>{text}</p>)}
      </div>
    </div>
  );
};

export default ProjectSection;

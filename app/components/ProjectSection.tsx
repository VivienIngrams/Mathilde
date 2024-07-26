import React from "react";
import { urlFor } from "../../sanity/lib/client";
import Image from "next/image";
import { Section } from "../interface";

const ProjectSection = ({ projectSection }: { projectSection: Section }) => {
  console.log(projectSection);
  return (
    <div className={`${projectSection.background} min-h-screen w-full`}>
      <div className={`${projectSection.font} ${projectSection.layout}`}>
        <Image
          src={urlFor(projectSection.images[0]).url() as string}
          alt={projectSection.subtitle}
          width={200}
          height={200}
        />
     {projectSection.text && (
      <p>{projectSection.text[0]}</p>)}
             
      </div>
    </div>
  );
};

export default ProjectSection;

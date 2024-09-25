import React from "react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { Mirante } from "@/app/interface";
import { urlFor } from "@/sanity/lib/image";

export const Mirante1 = ({ projectSection }: { projectSection: Mirante }) => {
  return (
    <div className="min-h-screen pt-12 ">
      <div className="pb-24 md:grid md:grid-cols-3">
        <div className="flex flex-col justify-center pt-8 md:pt-32 md:pb-8 text-right  md:ml-8 col-span-1">
          <h1 className="md:hidden">{projectSection.title}</h1>
          {projectSection.image && (
            <div className="md:hidden relative h-full md:h-[75%] w-full">
              <Image
                src={urlFor(projectSection.image).url() as string}
                alt={projectSection.title}
                fill
                className="object-contain md:pl-4"
                style={{ objectPosition: "left" }}
              />
            </div>
          )}
          <PortableText value={projectSection.content} />
        </div>
        <div className="hidden md:flex flex-col justify-center items-start  md:min-h-[100vh] md:w-full md:pl-12 col-span-2">
          <h1 className="md:pl-4">{projectSection.title}</h1>
          {projectSection.image && (
            <div className="relative md:h-[75%] w-full">
              <Image
                src={urlFor(projectSection.image).url() as string}
                alt={projectSection.title}
                fill
                className="object-containmd:pl-4"
                style={{ objectPosition: "left" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Mirante2 = ({ projectSection }: { projectSection: Mirante }) => {
  return (
    <div>
      <div className="h-[35vh] pt-12 md:min-h-screen w-full relative">
        {projectSection.image && (
          <Image
            src={urlFor(projectSection.image).url() as string}
            alt={projectSection.title}
            fill
            className="object-contain"
          />
        )}
      </div>
      <div className="flex flex-col md:pb-24 md:grid md:grid-cols-3">
        <div className="md:flex md:flex-col md:justify-center md:items-end  md:min-h-[30vh] w-full">
          <h1 className="md:pr-8">{projectSection.title}</h1>
        </div>
        <div className="md:pt-4 md:flex md:flex-col md:justify-center md:items-center md:h-[30vh] w-full md:col-span-2">
          <div className="md:columns-2 md:gap-8 md:-p-4">
            <PortableText value={projectSection.content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Mirante3 = ({ projectSection }: { projectSection: Mirante }) => {
  return (
    <div className="min-h-screen md:pb-24 pt-12 flex flex-col md:grid md:grid-cols-3">
      <div className="flex flex-col justify-center md:items-end h-[10vh] md:min-h-[100vh] w-full md:w-full">
        <h1 className="md:mr-8">{projectSection.title}</h1>
      </div>
      <div className="columns-1 md:flex flex-col justify-center items-start md:min-h-[100vh] w-full">
        {projectSection.image && (
          <div>
          <div className="relative h-[95%] w-full">
            <Image
              src={urlFor(projectSection.image.asset).url()}
              alt={projectSection.title}
              width={700}
              height={300}
              className="w-full h-auto object-contain"
              loading="lazy"
              style={{ objectPosition: "left" }}
            />
          </div></div>
        )}
      </div>
      <div className="flex flex-col justify-center pt-8 pb-20 md:p-12 md:mr-8">
        <PortableText value={projectSection.content} />
      </div>
    </div>
  );
};

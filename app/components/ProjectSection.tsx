
import Image from "next/image";
import { urlFor } from "../../sanity/lib/client";
import { Section } from "../interface";

import Link from "next/link";

export const ProjectSection1 = ({
  projectSection,
  title,
 }: {
  projectSection: Section;
  title: string;
 }) => {


  return (
    <div className={` min-h-screen w-full bg-[rgba(228,221,214,0.85)]`}>
      <div className={` md:grid md:grid-cols-2  `}>
        {projectSection.text && (
          <div className="md:hidden text-right ">
            <div className="px-4">
              <h1 className="py-2">{title}</h1>
              <p className="">{projectSection.text[0]}</p>
            </div>
          </div>
        )}
        <div className="flex flex-col md:justify-end md:items-end h-[75vh] md:h-[80vh] w-[85vw] md:w-[50vw]  ">
          <div className="relative h-full w-full md:w-[60%]">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
        {projectSection.text && (
          <div className="hidden md:flex flex-col justify-center pl-20">
            <div className="w-[50%]">
              <h1 className="py-4">{title}</h1>
              <p className="">{projectSection.text[0]}</p>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export const ProjectSection2 = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div
      className={` ${projectSection.background} bg-[#c2b7a9]  w-full -mt-[35vh] pt-60`}
    >
      <div className={`  p-8 md:p-32`}>
        {projectSection.text && (
          <div className={` md:text-right md:max-w-[50vw] mx-auto`}>
            <h3>{projectSection.text[0]}</h3>
            <h3>{projectSection.text[1]}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export const ProjectSection3 = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  
  return (
    <div className={` bg-[rgba(228,221,214,0.85)] min-h-screen  w-full`}>
      <div
        className={` md:grid md:grid-cols-5 min-h-full md:h-[95vh] w-full  `}
      >
        <div></div>
        <div className="h-[80vh] md:h-full w-full flex flex-row items-center">
          <div className="relative w-[120%] h-[80%] -mx-24 ">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={title}
                fill
                className="absolute object-contain"
              />
            )}
          </div>
        </div>
        <div className="h-[60vh] md:h-full w-full flex flex-row justify-end md:items-start">
          <div className="relative w-[70%] h-[90%] md:h-[60%] mt-4 ">
            {projectSection.images &&  (
              <Image
                src={urlFor(projectSection.images[1]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
        <div className="h-[70vh] md:h-full w-full flex flex-row justify-start md:items-end ">
          <div className="relative w-[90%] md:w-[130%] h-[100%] md:h-[80%] ml-4 -mr-10 -mb-16">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[2]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
        <div className="h-[50vh] md:h-full w-full flex items-center md:items-start justify-end">
          <div className="relative w-[100%] md:w-[70%] h-[80%] md:h-[50%] mr-4 ">
            {projectSection.images &&  (
              <Image
                src={urlFor(projectSection.images[3]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export const ProjectSection4 = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div
      className={`${projectSection.background} bg-[rgba(228,221,214,0.85)] min-h-screen w-full`}
    >
      <div className={` md:grid md:grid-cols-5 md:h-[95vh] w-full  `}>
        <div className="h-[60vh] md:h-full w-full flex flex-row items-start">
          <div className="relative w-[80%] h-[90%] md:h-[50%] md:-mt-24 ">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={title}
                fill
                className="absolute object-contain"
              />
            )}
          </div>
        </div>
        <div className="h-[50vh] md:h-full w-full flex flex-row md:items-end">
          <div className="relative w-[110%] md:w-[120%] h-[100%] md:h-[70%] -ml-8 ">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[1]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
        <div className="h-[25vh] md:h-full w-full flex items-center justify-center md:flex-row md:items-start">
          <div className="relative w-[85%] md:w-[90%] h-[70%] mt-4 md:-ml-20">
            {projectSection.text && (
              <div>
                <p>{projectSection.text[0]}</p>
              </div>
            )}
          </div>
        </div>
        <div className="h-[60vh] md:h-full w-full flex flex-row items-center ">
          <div className="relative w-[110%] h-[100%] md:h-[80%] mr-6">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[2]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
        <div className="h-[30vh] md:h-full w-full flex justify-center items-center md:items-end">
          <div className="relative w-[85%] h-[60%] mr-4 ">
            {projectSection.text && (
              <div>
                <p>{projectSection.text[1]}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export const ProjectSection5 = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={` bg-[rgba(228,221,214,0.85)] min-h-screen  w-full`}>
      <div className={` md:grid md:grid-cols-5 md:h-[95vh] w-full `}>
        <div className="h-[50vh] md:h-full w-full flex md:flex-row justify-end md:justify-start md:items-start">
          <div className="relative w-[80%] h-[90%] md:h-[50%] md:-mt-32 ">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={title}
                fill
                className="absolute object-contain"
              />
            )}
          </div>
        </div>
        <div className="h-[80vh] md:h-full w-full flex flex-row items-center">
          <div className="relative w-[110%] h-[100%] md:-ml-12">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[1]).url() as string}
                alt={title}
                fill
                className="absolute object-contain"
              />
            )}
          </div>
        </div>
        <div className="h-[60vh] md:h-full w-full flex flex-row items-center md:items-start">
          <div className="relative w-[90%] h-[70%] md:h-[50%] ">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[2]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
        <div className="h-[80vh] md:h-full w-full flex flex-col md:items-start items-center md:justify-end">
          <div className="relative w-[80%] h-[30%] md:h-[100%] mr-4 md:-mt-12 ">
            {projectSection.text && (
              <div>
                <p>{projectSection.text[0]}</p>
              </div>
            )}
          </div>
          <div className="relative w-[100%] md:w-[90%] h-[100%] ">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[3]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
        <div className="h-[80vh] md:h-full w-full flex items-center md:justify-end">
          <div className="relative w-[100%] h-[90%] md:h-[70%]">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[4]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export const ProjectSection6 = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div
      className={`${projectSection.background} bg-[rgb(194,183,169,0.85)] min-h-screen w-full`}
    >
      <div className={`  md:grid md:grid-cols-2`}>
        {projectSection.text && (
          <div className="flex flex-col justify-center py-16 pl-20 text-right mr-8 md:ml-[40%]">
            <h3>
              <span className="text-5xl italic font-light tracking-tighter">
                {projectSection.text[0]}
              </span>{" "}
              {projectSection.text[1]}
            </h3>
            <br />
            <h3>{projectSection.text[2]}</h3>
          </div>
        )}
        <div className="flex flex-col justify-center items-start h-[60vh] md:h-[100vh] w-[100vw] md:w-[100%]  ">
          <div className="relative h-[95%] w-[100%] md:w-[90%]">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

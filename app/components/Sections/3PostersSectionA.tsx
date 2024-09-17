import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "../../interface";

const PostersSectionA = ({
    projectSection,
    title,
  }: {
    projectSection: Section;
    title: string;
  }) => {
    return (
      <div className={`  min-h-screen  w-full`}>
        <div
          className={` md:grid md:grid-cols-5 min-h-full md:h-[95vh] w-full  `}
        >
          <div className="m-auto md:h-full md:w-[70%]"></div>
          <div className="h-[80vh] md:h-full w-full flex flex-row items-center md:items-end">
            <div className="relative w-[100%] h-[80%] md:-mr-24">
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
          <div className="h-[60vh] md:h-full w-full md:flex md:flex-row md:justify-end md:items-end md:-ml-12 md:mt-8">
            <div className="relative w-full md:w-[70%] h-[90%] md:h-[60%] ">
              {projectSection.images && projectSection.images[1] && (
                <Image
                  src={urlFor(projectSection.images[1]).url() as string}
                  alt={title}
                  fill
                  className="object-contain"
                />
              )}
            </div>
          </div>
          <div className="h-[70vh] md:h-full w-full md:flex md:flex-row md:items-end ">
            <div className="relative w-[100%] md:w-[130%] h-[100%] md:h-[80%] md:ml-4 md:-mr-10 md:-mb-20">
              {projectSection.images && projectSection.images[2] && (
                <Image
                  src={urlFor(projectSection.images[2]).url() as string}
                  alt={title}
                  fill
                  className="object-contain"
                />
              )}
            </div>
          </div>
          {projectSection.images && projectSection.images[3] && (
            <div className="h-[50vh] md:h-full w-full flex md:items-end md:justify-end md:mt-32">
              <div className="relative w-[100%] md:w-[70%] h-[80%] md:h-[50%] mt-8  md:mr-4 ">
                <Image
                  src={urlFor(projectSection.images[3]).url() as string}
                  alt={title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default PostersSectionA;
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "../../interface";

const PostersSectionC = ({
    projectSection,
    title,
  }: {
    projectSection: Section;
    title: string;
  }) => {
    return (
      <div className={` min-h-[60vh] md:-mt-12 w-full md:-mb-24`}>
        <div className={` md:grid md:grid-cols-5 md:min-h-[90vh] w-full  `}>
          <div className="h-[60vh] w-full  md:-mt-12">
            <div className="relative w-[100%] md:w-[110%] h-[100%] md:-mt-32 md:-ml-12">
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
          <div className="h-[50vh] md:h-full w-full md:flex flex-row md:items-start md:-mt-24 md:ml-16">
            <div className="relative w-[100%] md:w-[130%] h-[100%] md:h-[90%] md:-ml-8 md:-mr-24 mt-8 md:-mt-40">
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
          <div></div>
          <div className="h-[80vh] md:h-full w-full flex flex-row items-end md:items-start ">
            <div className="relative w-full md:w-[110%] h-[90%] md:h-[100%] md:-ml-24 md:-mt-24 md:mr-6">
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
          {projectSection.images && projectSection.images[3] && (
            <div className="h-[80vh] md:h-full w-full flex flex-row items-end md:items-start ">
              <div className="relative w-full md:w-[110%] h-[90%] md:h-[100%] md:-ml-4 md:-mt-24 md:mr-4">
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

  export default PostersSectionC;
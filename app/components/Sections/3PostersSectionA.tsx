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
      <div className={`  min-h-screen mt-4 w-full`}>
         {/* Mobile Layout */}
      <div className="md:hidden columns-1 sm:columns-2 gap-4 mx-4">
        {projectSection.images?.map((image, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <Image
              src={urlFor(image).url() as string}
              alt={`Gallery Image ${index}`}
              width={500}
              height={500}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
        <div
          className={`hidden md:grid md:grid-cols-5 min-h-full md:h-[95vh] w-full  `}
        >
          <div className="m-auto md:h-full md:w-[70%]"></div>
          <div className="md:h-full w-full flex flex-row md:items-end">
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
          <div className="md:h-full w-full md:flex md:flex-row md:justify-end md:items-end md:-ml-12 md:mt-8">
            <div className="relative md:w-[70%] md:h-[60%] ">
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
          <div className="md:h-full w-full md:flex md:flex-row md:items-end ">
            <div className="relative md:w-[130%] md:h-[80%] md:ml-4 md:-mr-10 md:-mb-20">
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
            <div className="md:h-full w-full flex md:items-end md:justify-end md:mt-32">
              <div className="relative md:w-[70%] md:h-[50%] mt-8  md:mr-4 ">
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
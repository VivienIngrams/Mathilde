import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "../../interface";

const PostersSectionB = ({
    projectSection,
    title,
  }: {
    projectSection: Section;
    title: string;
  }) => {
    console.log(projectSection);
    return (
      <div className={`  min-h-[70vh]md:-mt-12 w-full`}>
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
        <div className={`hidden md:grid md:grid-cols-5 md:h-[95vh] w-full `}>
          <div className="md:h-full w-full md:flex flex-row  md:justify-start md:items-start">
            <div className="relative md:w-[80%] md:h-[50%] md:-mt-32 ">
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
          <div className="h-[60vh] w-full  md:-mt-12">
            <div className="relative md:w-[110%] h-[100%] md:-ml-12">
              {projectSection.images && projectSection.images[1] && (
                <Image
                  src={urlFor(projectSection.images[1]).url() as string}
                  alt={title}
                  fill
                  className="absolute object-contain"
                />
              )}
            </div>
          </div>
          <div className="md:h-full w-full flex flex-row md:items-start md:mt-6">
            <div className="relative md:w-[90%] md:h-[50%] ">
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
          <div>
            <div className="relative md:w-[90%] h-[100%] ">
              {projectSection.images && projectSection.images[3] && (
                <Image
                  src={urlFor(projectSection.images[3]).url() as string}
                  alt={title}
                  fill
                  className="object-contain"
                />
              )}
            </div>
          </div>
          {projectSection.images && projectSection.images[4] && (
            <div className="md:h-full w-full flex items-center md:justify-end">
              <div className="relative w-[100%] md:h-[70%] md:mt-[75%]">
                <Image
                  src={urlFor(projectSection.images[4]).url() as string}
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

  export default PostersSectionB;
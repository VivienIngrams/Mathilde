import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "../../interface";

const RandomSection = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={` min-h-screen w-full pt-4 `}>
      <div className={`  md:grid md:grid-cols-3 h-full `}>
        <div className="h-[100%] flex flex-col items-center justify-center">
          {projectSection.images && projectSection.images[0] && (
            <div className="relative h-[55vh] w-[70%] m-4">
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={`${title} - additional`}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
        <div className="h-[100%] flex flex-col justify-center items-center">
          {projectSection.images && projectSection.images[1] && (
            <div className="relative h-[80vh] md:h-[90vh] w-[100%] md:w-[150%] ">
              <Image
                src={urlFor(projectSection.images[1]).url() as string}
                alt={`${title} - additional`}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
        <div className=" md:h-[100%] flex flex-col items-center justify-around">
          {projectSection.images && projectSection.images[2] && (
            <div className="relative h-[45vh] w-[70%] m-4 ">
              <Image
                src={urlFor(projectSection.images[2]).url() as string}
                alt={`${title} - additional`}
                fill
                className="object-contain"
              />
            </div>
          )}{" "}
          {projectSection.images && projectSection.images[3] && (
            <div className="relative h-[30vh] w-[70%] my-6">
              <Image
                src={urlFor(projectSection.images[3]).url() as string}
                alt={`${title} - additional`}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomSection;
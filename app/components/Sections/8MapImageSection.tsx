import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "../../interface";

const MapImageSection = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={` md:min-h-[60vh] w-full pt-8`}>
      <div className="flex flex-col md:flex-row md:justify-center md:items-end h-[200vh] md:h-[60vh]  w-[100%] md:px-[10vw] ">
        {projectSection.images &&
          projectSection.images.map((image, index) => (
            <div
              className="relative h-[95%] w-[100%] my-2 md:mx-2 "
              key={index}
            >
              <Image
                src={urlFor(image).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          ))}
      </div>
      {projectSection.text && projectSection.text[0] && (
        <div className="h-[30vh] flex flex-col items-center justify-center">
          <div className="px-4 text-center md:max-w-[60vw]">
            <h3 className="">{projectSection.text[0]}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapImageSection;
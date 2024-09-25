import Image from "next/image";
import { Section } from "@/app/interface";
import { urlFor } from "@/sanity/lib/image";

const MapImageSection = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className="md:min-h-[60vh] w-full md:pt-8">
       {/* Mobile */}
       <div className="-mt-12 columns-1 sm:columns-2 md:hidden">
          {projectSection.images?.map((image: any) => (
            <div key={image.asset._id} className="m-12 break-inside-avoid">
              <Image
                src={urlFor(image.asset).url()}
                alt="Gallery Image"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Desktop */}
      <div className="hidden md:flex flex-col md:flex-row md:justify-center md:items-end  h-[200vh] md:h-[60vh] w-full md:px-[10vw] ">
        {projectSection.images &&
          projectSection.images.map((image, index) => (
            <div className="relative h-[95%] w-full my-2 " key={index}>
              <Image
                src={urlFor(image).url() as string}
                alt={title}
                fill
                className="object-contain p-2"
              />
            </div>
          ))}
      </div>
      {projectSection.text ? (
          <div className="h-[30vh] flex flex-col items-center justify-center  py-8 ">
            <div className="px-4 md:text-center md:max-w-[60vw]">
              <p className="leading-7">
                {projectSection.text[0]}
                <span className="text-2xl lg:text-4xl leading-[1] font-serif tracking-tighter">
                  {projectSection.text[1]}
                </span>
                {projectSection.text[2]}
                <span className="text-2xl lg:text-4xl leading-[1] font-serif tracking-tighter">
                  {projectSection.text[3]}
                </span>
                {projectSection.text[4]}
              </p>
          </div>
        </div>
      ) : <div className="md:h-24"/>}
    </div>
  );
};

export default MapImageSection;

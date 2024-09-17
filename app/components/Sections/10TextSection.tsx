import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "../../interface";

const TextSection = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={` md:min-h-screen w-full text-justify `}>
      {projectSection.text && (
        <div className={`px-4 md:p-12  md:grid md:grid-cols-3 h-full gap-10`}>
          <div className="md:h-[80vh] pt-12 flex flex-col  justify-start">
            <h3> {projectSection.text[0]}</h3>
          </div>
          <div className="md:h-[60vh] pt-4 md:-ml-32 md:mr-32 flex flex-col justify-center">
            <h3> {projectSection.text[1]}</h3>
          </div>
          <div className="md:h-[80vh] flex flex-col pb-12 justify-end">
            <h3 className="py-4"> {projectSection.text[2]}</h3>
            <h3> {projectSection.text[3]}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextSection;
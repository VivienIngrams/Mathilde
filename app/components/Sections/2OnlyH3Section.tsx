import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "../../interface";

const OnlyH3Section = ({
    projectSection,
    title,
  }: {
    projectSection: Section;
    title: string;
  }) => {
    console.log(projectSection?.text)
    return (
      <div className={` w-full `}>
        <div className={`my-20  md:p-32`}>
          {projectSection.text && (
            <div className={`text-right md:max-w-[60vw] mx-auto `}>
              <p className="font-semibold">{projectSection.text[0]}</p>
              <p className="font-semibold">{projectSection.text[1]}</p>
              {projectSection.text[2] && <p className="font-semibold">{projectSection.text[2]}</p>}
              {projectSection.text[3] && <p className="font-semibold">{projectSection.text[3]}</p>}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default OnlyH3Section;
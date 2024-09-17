import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "../../interface";

const WideImageSection = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div
      className={`h-[45vh] md:min-h-screen min-w-screen md:-pb-[25vh] md:h-[120vh] relative`}
    >
      {projectSection.images && (
        <Image
          src={urlFor(projectSection.images[0]).url() as string}
          alt={title}
          fill
          className="object-cover "
        />
      )}
    </div>
  );
};

export default WideImageSection;
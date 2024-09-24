import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "../../interface";
import Link from "next/link";

const PostersSection = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={`  min-h-screen mt-4 w-full`}>
      {/* Mobile Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 ">
        {projectSection.images?.map((image, index) => (
          <Link key={index} href={urlFor(image).url()}>
            <div
              className={`mb-4 break-inside-avoid ${
                index === 0 || index === 16
                  ? "md:pt-40"
                  : index === 7
                    ? "md:pt-20" :
                    index === 10 ? "md:pt-52"
                    : ""
              }`}
            >
              <Image
                src={urlFor(image).url() as string}
                alt={`Gallery Image ${index}`}
                width={500}
                height={500}
                className="w-full h-auto object-cover md:p-4"
                loading="lazy"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostersSection;

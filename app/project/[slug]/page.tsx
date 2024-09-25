import { client } from "../../../sanity/lib/client";
import NavMenu from "@/app/components/NavMenu";
import Footer from "@/app/components/Footer";
import { notFound } from "next/navigation";
import TitleSection from "@/app/components/Sections/1TitleSection";
import PosterSection from "@/app/components/Sections/2PosterSection";
import HalfHalfSection from "@/app/components/Sections/6HalfHalfSection";
import RandomSection from "@/app/components/Sections/3RandomSection";
import MapImageSection from "@/app/components/Sections/4MapImageSection";
import WideImageSection from "@/app/components/Sections/5WideImageSection";
import { Section } from "@/app/interface";

async function getProjectData(slug: string) {
  const data = await client.fetch(
    `
      *[_type == 'project' && slug.current == '${slug}'] {
        title,
        "slug": slug.current,
     
        "sections": [
          {
            "images": images1,
            "layout": layout1,
           "text": text1
          },
          {
            "images": images2,
            "layout": layout2,
           "text": text2
          },
          {
            "images": images3,
            "layout": layout3,
           "text": text3
          },
          {
            "images": images4,
            "layout": layout4,
           "text": text4
          },
          {
            "images": images5,
            "layout": layout5,
           "text": text5
          },
          {
            "images": images6,
            "layout": layout6,
           "text": text6
          },
          {
            "images": images7,
            "layout": layout7,
           "text": text7
            },
           
          {
            "images": images8,
            "layout": layout8,
           "text": text8
          },
          ]
      }[0]
      `,
    { slug },
    {
      next: {
        revalidate: 10,
      },
    }
  );
  return data;
}

const sectionComponents: {
  [key: number]: React.ComponentType<{
    projectSection: Section;
    title: string;
    slug: string;
  }>;
} = {
  1: TitleSection,
  2: PosterSection,
  3: RandomSection,
  4: MapImageSection,
  5: WideImageSection,
  6: HalfHalfSection,
};

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = params;
  const project = await getProjectData(slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-full">
      <NavMenu />
      <div className=" bg-[rgba(227,224,220,0.75)] p-4">
        {project.sections.map((section: Section, index: number) => {
          const SectionComponent = sectionComponents[section.layout];
          // Check if the section has either text or images
          const hasContent =
            section.text || (section.images && section.images.length > 0);

          // Only render the section if it has content
          return SectionComponent && hasContent ? (
            <SectionComponent
              key={index}
              projectSection={section}
              title={project.title}
              slug={project.slug}
            />
          ) : null;
        })}
      </div>
      <Footer />
    </div>
  );
}

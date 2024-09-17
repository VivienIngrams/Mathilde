import { client } from "../../../sanity/lib/client";
import NavMenu from "@/app/components/NavMenu";
import Footer from "@/app/components/Footer";
import { notFound } from "next/navigation";
import TitleSection from "@/app/components/Sections/1TitleSection";
import OnlyH3Section from "@/app/components/Sections/2OnlyH3Section";
import PostersSectionA from "@/app/components/Sections/3PostersSectionA";
import PostersSectionB from "@/app/components/Sections/4PostersSectionB";
import PostersSectionC from "@/app/components/Sections/5PostersSectionC";
import HalfHalfSection from "@/app/components/Sections/6HalfHalfSection";
import RandomSection from "@/app/components/Sections/7RandomSection";
import MapImageSection from "@/app/components/Sections/8MapImageSection";
import WideImageSection from "@/app/components/Sections/9WideImageSection";
import TextSection from "@/app/components/Sections/10TextSection";
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
  2: OnlyH3Section,
  3: PostersSectionA,
  4: PostersSectionB,
  5: PostersSectionC,
  6: HalfHalfSection,
  7: RandomSection,
  8: MapImageSection,
  9: WideImageSection,
  10: TextSection,
 
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
      <div className=" bg-[rgba(227,224,220,0.85)] ">
        {project.sections.map((section: Section, index: number) => {
          const SectionComponent = sectionComponents[section.layout];
          return SectionComponent ? (
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

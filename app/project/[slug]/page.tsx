import { client } from "../../../sanity/lib/client";
import NavMenu from "@/app/components/NavMenu";
import Footer from "@/app/components/Footer";
import { notFound } from "next/navigation";
import {
  ProjectSection1,
  ProjectSection2,
  ProjectSection3,
  ProjectSection4,
  ProjectSection5,
  ProjectSection6,
  ProjectSection7,
  ProjectSection8,
  ProjectSection9,
  ProjectSection10,

} from "@/app/components/ProjectSection";
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
            "background": background1,
            "text": text1
          },
          {
            "images": images2,
            "layout": layout2,
            "background": background2,
            "text": text2
          },
          {
            "images": images3,
            "layout": layout3,
            "background": background3,
            "text": text3
          },
          {
            "images": images4,
            "layout": layout4,
            "background": background4,
            "text": text4
          },
          {
            "images": images5,
            "layout": layout5,
            "background": background5,
            "text": text5
          },
          {
            "images": images6,
            "layout": layout6,
            "background": background6,
            "text": text6
          },
          {
            "images": images7,
            "layout": layout7,
            "background": background7,
            "text": text7
            },
           
          {
            "images": images8,
            "layout": layout8,
            "background": background8,
            "text": text8
  },
  {
    "images": images9,
    "layout": layout9,
    "background": background9,
    "text": text9
    },
    {

      "images": images10,
      "layout": layout10,
      "background": background10,
      "text": text10
      }
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
  1: ProjectSection1,
  2: ProjectSection2,
  3: ProjectSection3,
  4: ProjectSection4,
  5: ProjectSection5,
  6: ProjectSection6,
  7: ProjectSection7,
  8: ProjectSection8,
  9: ProjectSection9,
  10: ProjectSection10,

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

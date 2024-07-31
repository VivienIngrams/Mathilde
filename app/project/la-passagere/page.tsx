import { client } from "../../../sanity/lib/client";
import NavMenu from "@/app/components/NavMenu";
import Footer from "@/app/components/Footer";
import {
  ProjectSection1,
  ProjectSection2,
  ProjectSection3,
  ProjectSection4,
  ProjectSection5,
  ProjectSection6,
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
            "layout": 1,
            "background": background1,
            "text": text1
          },
          {
            "images": images2,
            "layout": 2,
            "background": background2,
            "text": text2
          },
          {
            "images": images3,
            "layout": 3,
            "background": background3,
            "text": text3
          },
          {
            "images": images4,
            "layout": 4,
            "background": background4,
            "text": text4
          },
          {
            "images": images5,
            "layout": 5,
            "background": background5,
            "text": text5
          },
          {
            "images": images6,
            "layout": 6,
            "background": background6,
            "text": text6
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

const sectionComponents: { [key: number]: React.ComponentType<{ projectSection: Section, title: string, slug: string }> } = {
  1: ProjectSection1,
  2: ProjectSection2,
  3: ProjectSection3,
  4: ProjectSection4,
  5: ProjectSection5,
  6: ProjectSection6,
};

export default async function LaPassagerePage() {
  const project = await getProjectData("la-passagere");
  console.log(project.sections);
  return (
    <div className="h-full">
      <NavMenu />
      <div>
        {project.sections.map((section: Section, index: number) => {
          const SectionComponent = sectionComponents[section.layout];
          return (
            <SectionComponent
              key={index}
              projectSection={section}
              title={project.title}
              slug={project.slug}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

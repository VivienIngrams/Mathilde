import React from "react";
import { client } from "../../../sanity/lib/client";
import { Project, Section } from "../../interface";
import NavMenu from "@/app/components/NavMenu";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../sanity/lib/client";
// import ProjectSection from "@/app/components/ProjectSection";

async function getProjectData(slug: string) {
  const data = await client.fetch(
    `
      *[_type == 'project' && slug.current == '${slug}'] {
        title,
        "slug": slug.current,
        date,
        "sections": [
          {
            "images": images1,
            "layout": layout1,
            "font": font1,
            "alignment": alignment1,
            "background": background1,
            "text": text1
          },
          {
            "images": images2,
            "layout": layout2,
            "font": font2,
            "alignment": alignment2,
            "background": background2,
            "text": text2
            },
            {
                "images": images3,
                "layout": layout3,
                "font": font3,
                "alignment": alignment3,
                "background": background3,
                "text": text3
            },
            {
                "images": images4,
                "layout": layout4,
                "font": font4,
                "alignment": alignment4,
                "background": background4,
                "text": text4
            },
            {
                "images": images5,
                "layout": layout5,
                "font": font5,
                "alignment": alignment5,
                "background": background5,
                "text": text5
            },
            {
                "images": images6,
                "layout": layout6,
                "font": font6,
                "alignment": alignment6,
                "background": background6,
                "text": text6
                },
        ]
      }[0]
      `,
    { slug },
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return data;
}

export default async function ProjectPage() {
  const project = await getProjectData("au-cafe");
  console.log(project);
  return (
    <div className="h-full">
      <NavMenu />
      <div className="">
        <div
          className={`${project.sections[0].background} min-h-screen w-full`}
        >
          <div
            className={`${project.sections[0].font} ${project.sections[0].layout}`}
          >
            {project.sections[0].text && <p>{project.sections[0].text[0]}</p>}
            <Image
              src={urlFor(project.sections[0].images[0]).url() as string}
              alt={project.sections[0].subtitle}
              width={200}
              height={200}
            />

            {project.sections[0].text && (
              <div>
                <h1>{project.title}</h1>
                <p>{project.sections[0].text[1]}</p>
              </div>
            )}
          </div>
        </div>
        <div
          className={`${project.sections[1].background} min-h-screen w-full`}
        >
          <div
            className={`${project.sections[1].font} ${project.sections[1].layout}`}
          >
            {project.sections[1].text && (
              <p className={`${project.sections[1].alignment}`}>
                {project.sections[1].text[0]}
              </p>
            )}

            {project.sections[1].text && (
              <div>
                <p>{project.sections[1].text[1]}</p>
              </div>
            )}
          </div>
        </div>
        <div
          className={`${project.sections[2].background} min-h-screen w-full`}
        >
          <div
            className={`${project.sections[2].font} ${project.sections[2].layout}`}
          >
            <Image
              src={urlFor(project.sections[2].images[2]).url() as string}
              alt={project.sections[2].subtitle}
              width={222}
              height={222}
            />
            <Image
              src={urlFor(project.sections[2].images[1]).url() as string}
              alt={project.sections[2].subtitle}
              width={222}
              height={222}
            />
            <Image
              src={urlFor(project.sections[2].images[2]).url() as string}
              alt={project.sections[2].subtitle}
              width={200}
              height={200}
            />
          </div>
        </div>
        <div
          className={`${project.sections[3].background} min-h-screen w-full`}
        >
          <div
            className={`${project.sections[3].font} ${project.sections[3].layout}`}
          >
            <Image
              src={urlFor(project.sections[3].images[0]).url() as string}
              alt={project.sections[3].subtitle}
              width={333}
              height={333}
            />
            {project.sections[3].text && (
              <div className={`${project.sections[3].alignment}`}>
                <p>{project.sections[3].text[0]}</p>
                <p>{project.sections[3].text[1]}</p>
              </div>
            )}
            <Image
              src={urlFor(project.sections[3].images[1]).url() as string}
              alt={project.sections[3].subtitle}
              width={333}
              height={333}
            />
            <Image
              src={urlFor(project.sections[3].images[2]).url() as string}
              alt={project.sections[3].subtitle}
              width={200}
              height={200}
            />
          </div>
        </div>
        <div
          className={`${project.sections[4].background} min-h-screen w-full`}
        >
          <div
            className={`${project.sections[4].font} ${project.sections[4].layout}`}
          >
            <Image
              src={urlFor(project.sections[4].images[4]).url() as string}
              alt={project.sections[4].subtitle}
              width={422}
              height={222}
            />
            <Image
              src={urlFor(project.sections[4].images[1]).url() as string}
              alt={project.sections[4].subtitle}
              width={444}
              height={444}
            />
            {project.sections[4].text && (
              <div>
                <p>{project.sections[4].text[0]}</p>
              </div>
            )}
            <Image
              src={urlFor(project.sections[4].images[4]).url() as string}
              alt={project.sections[4].subtitle}
              width={200}
              height={200}
            />
          </div>
        </div>
        <div
          className={`${project.sections[5].background} min-h-screen w-full`}
        >
          <div
            className={`${project.sections[5].font} ${project.sections[5].layout}`}
          >
            {project.sections[5].text && (
              <div>
                <p>{project.sections[5].text[0]}</p>
                <p>{project.sections[5].text[1]}</p>
              </div>
            )}
            <Image
              src={urlFor(project.sections[5].images[0]).url() as string}
              alt={project.sections[5].subtitle}
              width={255}
              height={255}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const ProjectSection = ({ projectSection }: { projectSection: Section }) => {
  console.log(projectSection);
  return (
    <div className={`${projectSection.background} min-h-screen w-full`}>
      <div className={`${projectSection.font} ${projectSection.layout}`}>
        <Image
          src={urlFor(projectSection.images[0]).url() as string}
          alt={projectSection.subtitle}
          width={200}
          height={200}
        />
        {projectSection.text && <p>{projectSection.text[0]}</p>}
      </div>
    </div>
  );
};

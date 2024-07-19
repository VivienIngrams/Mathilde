import React from "react";
import { client } from "../../../sanity/lib/client";
import { Project, Section } from "../../../app/interface";
import NavMenu from "@/app/components/NavMenu";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../sanity/lib/client";
import ProjectSection from "@/app/components/ProjectSection";

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
            "subtitle": subtitle1,
            "layout": layout1,
            "font": font1,
            "background": background1,
            "text": text1
          },
          {
            "images": images2,
            "subtitle": subtitle2,
            "layout": layout2,
            "font": font2,
            "background": background2,
            "text": text2
            },
            {
                "images": images3,
                "subtitle": subtitle3,
                "layout": layout3,
                "font": font3,
                "background": background3,
                "text": text3
            },
            {
                "images": images4,
                "subtitle": subtitle4,
                "layout": layout4,
                "font": font4,
                "background": background4,
                "text": text4
            },
            {
                "images": images5,
                "subtitle": subtitle5,
                "layout": layout5,
                "font": font5,
                "background": background5,
                "text": text5
            }
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

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectData(params.slug);

  return (
    <div className="h-full">
      <NavMenu />
      <div className="">
        <h1>{project.title}</h1>
        {project.sections.map((section: Section, index: number) => (
          <ProjectSection projectSection={section} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

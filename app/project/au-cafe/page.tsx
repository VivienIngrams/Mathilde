import React, { ReactNode } from "react";
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
        revalidate: 30,
      },
    }
  );
  return data;
}

export default async function ProjectPage() {
  const project = await getProjectData("au-cafe");
  // console.log(project);
  return (
    <div className="h-full">
      <NavMenu />
      <div className="">
        {/* Section 1 */}
        <div className={` min-h-screen w-full bg-[rgba(228,221,214,0.85)]`}>
          <div
            className={`${project.sections[0].font} md:grid md:grid-cols-2 ${project.sections[0].layout} `}
          >
                 {project.sections[0].text && (
                  <div className="md:hidden text-right ">
                    <div className="px-4">
                      <h1 className="pb-2">{project.title}</h1>
                      <p className="">{project.sections[0].text[0]}</p>
                    </div>
                  </div>
                )}
            <div className="flex flex-col md:justify-end md:items-end h-[75vh] md:h-[80vh] w-[85vw] md:w-[50vw]  ">
              <div className="relative h-full w-full md:w-[60%]">
                <Image
                  src={urlFor(project.sections[0].images[0]).url() as string}
                  alt={project.sections[0].subtitle}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            {project.sections[0].text && (
              <div className="hidden md:flex flex-col justify-center pl-20">
                <div className="w-[50%]">
                  <h1 className="py-4">{project.title}</h1>
                  <p className="">{project.sections[0].text[0]}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Section 2 */}
        <div
          className={` ${project.sections[1].background} bg-[#c2b7a9]  w-full -mt-[35vh] pt-60`}
        >
          <div
            className={`${project.sections[1].font} ${project.sections[1].layout} p-8 md:p-32`}
          >
            {project.sections[1].text && (
              <div
                className={`${project.sections[1].alignment} md:text-right md:max-w-[50vw] mx-auto`}
              >
                <h3>{project.sections[1].text[0]}</h3>
                <h3>{project.sections[1].text[1]}</h3>
              </div>
            )}
          </div>
        </div>
        {/* // Section 3 */}
        <div className={` bg-[rgba(228,221,214,0.85)] min-h-screen  w-full`}>
          <div
            className={` md:grid md:grid-cols-5 min-h-full md:h-[95vh] w-full ${project.sections[2].layout} `}
          >
            <div></div>
            <div className="h-[80vh] md:h-full w-full flex flex-row items-center">
              <div className="relative w-[120%] h-[80%] -mx-24 ">
                <Image
                  src={urlFor(project.sections[2].images[0]).url() as string}
                  alt={project.sections[2].subtitle}
                  fill
                  className="absolute object-contain"
                />
              </div>
            </div>
            <div className="h-[60vh] md:h-full w-full flex flex-row justify-end md:items-start">
              <div className="relative w-[70%] h-[90%] md:h-[60%] mt-4 ">
                <Image
                  src={urlFor(project.sections[2].images[1]).url() as string}
                  alt={project.sections[2].subtitle}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="h-[70vh] md:h-full w-full flex flex-row justify-start md:items-end ">
              <div className="relative w-[90%] md:w-[130%] h-[100%] md:h-[80%] ml-4 -mr-10 -mb-16">
                <Image
                  src={urlFor(project.sections[2].images[2]).url() as string}
                  alt={project.sections[2].subtitle}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="h-[50vh] md:h-full w-full flex items-start justify-end">
              <div className="relative w-[100%] md:w-[70%] h-[80%] md:h-[50%] mr-4 ">
                <Image
                  src={urlFor(project.sections[2].images[3]).url() as string}
                  alt={project.sections[2].subtitle}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Section 4 */}
        <div
          className={`${project.sections[3].background} bg-[rgba(228,221,214,0.85)] min-h-screen w-full`}
        >
          <div
            className={`${project.sections[3].font} md:grid md:grid-cols-5 h-[95vh] w-full ${project.sections[3].layout} `}
          >
            <div className="h-screen w-full flex flex-row items-start">
              <div className="relative w-[80%] h-[50%] md:-mt-24 ">
                <Image
                  src={urlFor(project.sections[3].images[0]).url() as string}
                  alt={project.sections[3].subtitle}
                  fill
                  className="absolute object-contain"
                />
              </div>
            </div>
            <div className="h-full w-full flex flex-row items-end">
              <div className="relative w-[120%] h-[70%] -ml-8 ">
                <Image
                  src={urlFor(project.sections[3].images[1]).url() as string}
                  alt={project.sections[3].subtitle}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="h-full w-full flex flex-row items-start">
              <div className="relative w-[90%] h-[70%] mt-4 -ml-20">
                {project.sections[3].text && (
                  <div>
                    <p>{project.sections[3].text[0]}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="h-full w-full flex flex-row items-center ">
              <div className="relative w-[110%] h-[80%] mr-6">
                <Image
                  src={urlFor(project.sections[3].images[2]).url() as string}
                  alt={project.sections[2].subtitle}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="h-full w-full flex items-end">
              <div className="relative w-[85%] h-[60%] mr-4 ">
                {project.sections[3].text && (
                  <div>
                    <p>{project.sections[3].text[1]}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Section 5 */}
        <div className={` bg-[rgba(228,221,214,0.85)] h-screen  w-full`}>
          <div
            className={`${project.sections[4].font} md:grid md:grid-cols-5 h-[95vh] w-full ${project.sections[4].layout} `}
          >
            <div className="h-full w-full flex flex-row items-start">
              <div className="relative w-[70%] h-[50%] -mt-32 ">
                <Image
                  src={urlFor(project.sections[4].images[0]).url() as string}
                  alt={project.sections[4].subtitle}
                  fill
                  className="absolute object-contain"
                />
              </div>
            </div>
            <div className="h-full w-full flex flex-row items-center">
              <div className="relative w-[110%] h-[100%] -ml-12">
                <Image
                  src={urlFor(project.sections[4].images[1]).url() as string}
                  alt={project.sections[4].subtitle}
                  fill
                  className="absolute object-contain"
                />
              </div>
            </div>
            <div className="h-full w-full flex flex-row items-start">
              <div className="relative w-[90%] h-[50%] ">
                <Image
                  src={urlFor(project.sections[4].images[2]).url() as string}
                  alt={project.sections[4].subtitle}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="h-full w-full flex flex-col items-start justify-end">
              <div className="relative w-[80%] h-[100%] mr-4 -mt-12 ">
                {project.sections[4].text && (
                  <div>
                    <p>{project.sections[4].text[0]}</p>
                  </div>
                )}
              </div>
              <div className="relative w-[90%] h-[100%] ">
                <Image
                  src={urlFor(project.sections[4].images[3]).url() as string}
                  alt={project.sections[4].subtitle}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="h-full w-full flex items-center justify-end">
              <div className="relative w-[100%] h-[70%]">
                <Image
                  src={urlFor(project.sections[4].images[4]).url() as string}
                  alt={project.sections[4].subtitle}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Section 6 */}
        <div
          className={`${project.sections[5].background} bg-[rgb(194,183,169,0.85)]   min-h-screen w-full`}
        >
          <div
            className={`${project.sections[5].font} ${project.sections[5].layout} md:grid md:grid-cols-2`}
          >
            {project.sections[5].text && (
              <div className="flex flex-col justify-center pl-20 text-right mr-8 ml-[40%]">
                <h3>
                  <span className="text-5xl italic font-light">
                    {project.sections[5].text[0]}
                  </span>{" "}
                  {project.sections[5].text[1]}
                </h3>
                <br />
                <h3>{project.sections[5].text[2]}</h3>
              </div>
            )}
            <div className="flex flex-col justify-center items-start h-[100vh] w-[70vw]  ">
              <div className="relative h-[95%] w-[60%]">
                <Image
                  src={urlFor(project.sections[5].images[0]).url() as string}
                  alt={project.sections[5].subtitle}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// const ProjectSection = ({ projectSection, children }: { projectSection: Section, children: ReactNode }) => {
//   console.log(projectSection);
//   return (
//     <div className={`${projectSection.background} min-h-screen w-full`}>
//       <div className={`${projectSection.font} ${projectSection.layout}`}>
//         {children}
//               </div>
//     </div>
//   );
// };

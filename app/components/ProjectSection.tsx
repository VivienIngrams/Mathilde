import Image from "next/image";
import { urlFor } from "../../sanity/lib/client";
import { Section } from "../interface";

export const ProjectSection1 = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={`min-h-[70vh] md:min-h-screen w-full `}>
      <div className={` md:grid md:grid-cols-2 pt-8`}>
        {projectSection.text && (
          // Mobile
          <div className="md:hidden text-right ">
            <div className=" pb-12">
              <h1 className="py-2">{title}</h1>
              {projectSection.images && projectSection.images[0] && (
                <div className="relative  h-[55vh] w-[100%]">
                  <Image
                    src={urlFor(projectSection.images[0]).url() as string}
                    alt={`${title} - additional`}
                    fill
                    className="object-contain z-10"
                    style={{ objectPosition: "right" }}
                  />
                </div>
              )}
              <p className="mt-2 py-2">{projectSection.text[0]}</p>
              {projectSection.text[1] && (
                <p className="py-2">{projectSection.text[1]}</p>
              )}
              {projectSection.text[2] && (
                <p className="py-2">{projectSection.text[2]}</p>
              )}
              {projectSection.text[3] && (
                <p className="py-2">{projectSection.text[3]}</p>
              )}
              {projectSection.text[4] && (
                <p className="py-2">{projectSection.text[4]}</p>
              )}
            </div>
          </div>
        )}
        {/* Desktop */}
        <div className="hidden md:flex md:flex-col md:justify-end md:items-end h-[75vh] md:h-[80vh] w-[85vw] md:w-[70vw] lg:w-[50vw]  ">
          <div className="relative h-full w-full md:w-[85%]">
            {projectSection.images && projectSection.images[0] && (
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={title}
                fill
                className="object-contain  z-10"
                style={{ objectPosition: "right" }}
              />
            )}
          </div>
        </div>
        {projectSection.text && (
          <div className="hidden md:flex flex-col justify-center items-start pl-20">
            {projectSection.images && projectSection.images[1] && (
              <div className="relative h-[40vh] w-[50%] mb-4">
                <Image
                  src={urlFor(projectSection.images[1]).url() as string}
                  alt={`${title} - additional`}
                  fill
                  className="object-contain  z-10"
                />
              </div>
            )}
            <div className="w-[50%] pt-2">
              <h1 className="">{title}</h1>
              <p className="py-2">{projectSection.text[0]}</p>
              {projectSection.text[1] && (
                <p className="py-2">{projectSection.text[1]}</p>
              )}
              {projectSection.text[2] && (
                <p className="py-2">{projectSection.text[2]}</p>
              )}
              {projectSection.text[3] && (
                <p className="py-2">{projectSection.text[3]}</p>
              )}
              {projectSection.text[4] && (
                <p className="py-2">{projectSection.text[4]}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const ProjectSection2 = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={` w-full `}>
      <div className={`my-20  md:p-32`}>
        {projectSection.text && (
          <div className={`text-right md:max-w-[60vw] mx-auto`}>
            <h3>{projectSection.text[0]}</h3>
            <h3>{projectSection.text[1]}</h3>
            {projectSection.text[2] && <p>{projectSection.text[2]}</p>}
            {projectSection.text[3] && <p>{projectSection.text[3]}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export const ProjectSection3 = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={`  min-h-screen  w-full`}>
      <div
        className={` md:grid md:grid-cols-5 min-h-full md:h-[95vh] w-full  `}
      >
        <div className="m-auto md:h-full md:w-[70%]"></div>
        <div className="h-[80vh] md:h-full w-full flex flex-row items-center md:items-end">
          <div className="relative w-[100%] h-[80%] md:-mr-24">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={title}
                fill
                className="absolute object-contain"
              />
            )}
          </div>
        </div>
        <div className="h-[60vh] md:h-full w-full md:flex md:flex-row md:justify-end md:items-end md:-ml-12 md:mt-8">
          <div className="relative w-full md:w-[70%] h-[90%] md:h-[60%] ">
            {projectSection.images && projectSection.images[1] && (
              <Image
                src={urlFor(projectSection.images[1]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
        <div className="h-[70vh] md:h-full w-full md:flex md:flex-row md:items-end ">
          <div className="relative w-[100%] md:w-[130%] h-[100%] md:h-[80%] md:ml-4 md:-mr-10 md:-mb-20">
            {projectSection.images && projectSection.images[2] && (
              <Image
                src={urlFor(projectSection.images[2]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
        <div className="h-[50vh] md:h-full w-full flex md:items-end md:justify-end md:mt-32">
          <div className="relative w-[100%] md:w-[70%] h-[80%] md:h-[50%] mt-8  md:mr-4 ">
            {projectSection.images && projectSection.images[3] && (
              <Image
                src={urlFor(projectSection.images[3]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export const ProjectSection4 = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={`  min-h-[70vh] mt-6 md:-mt-12 w-full`}>
      <div className={` md:grid md:grid-cols-5 md:h-[95vh] w-full `}>
        <div className="h-[60vh] md:h-full w-full md:flex flex-row  md:justify-start md:items-start">
          <div className="relative w-full md:w-[80%] h-[90%] md:h-[50%] md:-mt-32 ">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={title}
                fill
                className="absolute object-contain"
              />
            )}
          </div>
        </div>
        <div className="h-[60vh] w-full  md:-mt-12">
          <div className="relative w-[100%] md:w-[110%] h-[100%] md:-ml-12">
            {projectSection.images && projectSection.images[1] && (
              <Image
                src={urlFor(projectSection.images[1]).url() as string}
                alt={title}
                fill
                className="absolute object-contain"
              />
            )}
          </div>
        </div>
        <div className="h-[60vh] md:h-full w-full flex flex-row items-center md:items-start md:mt-6">
          <div className="relative w-full md:w-[90%] h-[70%] md:h-[50%] ">
            {projectSection.images && projectSection.images[2] && (
              <Image
                src={urlFor(projectSection.images[2]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
        <div>
          <div className="relative w-[100%] md:w-[90%] h-[100%] ">
            {projectSection.images && projectSection.images[3] && (
              <Image
                src={urlFor(projectSection.images[3]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
        <div className="h-[80vh] md:h-full w-full flex items-center md:justify-end">
          <div className="relative w-[100%] h-[90%] md:h-[70%] md:mt-[75%]">
            {projectSection.images && projectSection.images[4] && (
              <Image
                src={urlFor(projectSection.images[4]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export const ProjectSection5 = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div
      className={` min-h-[60vh] md:-mt-12 w-full md:-mb-24`}
    >
      <div className={` md:grid md:grid-cols-5 md:min-h-[90vh] w-full  `}>
        <div className="h-[60vh] w-full  md:-mt-12">
          <div className="relative w-[100%] md:w-[110%] h-[100%] md:-mt-32 md:-ml-12">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={title}
                fill
                className="absolute object-contain"
              />
            )}
          </div>
        </div>
        <div className="h-[50vh] md:h-full w-full md:flex flex-row md:items-start md:-mt-24 md:ml-16">
          <div className="relative w-[100%] md:w-[130%] h-[100%] md:h-[90%] md:-ml-8 md:-mr-24 mt-8 md:-mt-40">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[1]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
        <div></div>
        <div className="h-[80vh] md:h-full w-full flex flex-row items-end md:items-start ">
          <div className="relative w-full md:w-[110%] h-[90%] md:h-[100%] md:-ml-24 md:-mt-24 md:mr-6">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[2]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export const ProjectSection6 = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={` w-full`}>
      <div className={`  md:grid md:grid-cols-2`}>
        {projectSection.text && (
          <div className="flex flex-col justify-center py-8 md:py-20  text-right  md:mr-8 md:ml-[45%]">
            <p className="">
              <span className="text-3xl lg:text-4xl leading-[1] font-serif tracking-tighter">
                {projectSection.text[0]}
              </span>
              {projectSection.text[1]}
            </p>
            <p className="py-2">{projectSection.text[2]}</p>
            {projectSection.text[3] && (
              <p className="py-2">{projectSection.text[3]}</p>
            )}
          </div>
        )}
        <div>
          {projectSection.images && (
            <div className="flex flex-col justify-center items-start h-[45vh] md:min-h-[100vh] w-[100vw] md:w-[100%]  ">
              <div className="relative h-[95%] w-[100%] md:w-[90%]">
                <Image
                  src={urlFor(projectSection.images[0]).url() as string}
                  alt={title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}
          {!projectSection.images &&
            projectSection.text &&
            projectSection.text[4] && (
              <div className="flex flex-col justify-center items-start md:min-h-[80vh] w-[100vw] md:w-[100%]  ">
                <div className="flex flex-col justify-center py-8 md:py-20   md:mr-[45%]">
                  {projectSection.text[4] && (
                    <p className="py-2"> {projectSection.text[4]}</p>
                  )}
                  {projectSection.text[5] && (
                    <p className="py-2"> {projectSection.text[5]}</p>
                  )}
                  {projectSection.text[6] && (
                    <p className="py-2"> {projectSection.text[6]}</p>
                  )}
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export const ProjectSection7 = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={` min-h-screen w-full `}>
      <div className={`  md:grid md:grid-cols-3 h-full `}>
        <div className="h-[100%] flex flex-col items-center justify-center">
          {projectSection.images && projectSection.images[0] && (
            <div className="relative h-[50vh] w-[70%] ">
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={`${title} - additional`}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
        <div className="h-[100%] flex flex-col justify-center items-center">
          {projectSection.images && projectSection.images[1] && (
            <div className="relative h-[80vh] md:h-[90vh] w-[100%] md:w-[150%] ">
              <Image
                src={urlFor(projectSection.images[1]).url() as string}
                alt={`${title} - additional`}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
        <div className="h-[90vh] md:h-[100%] flex flex-col items-center justify-around">
          {projectSection.images && projectSection.images[2] && (
            <div className="relative h-[45vh] w-[70%] ">
              <Image
                src={urlFor(projectSection.images[2]).url() as string}
                alt={`${title} - additional`}
                fill
                className="object-contain"
              />
            </div>
          )}{" "}
          {projectSection.images && projectSection.images[3] && (
            <div className="relative h-[30vh] w-[70%] ">
              <Image
                src={urlFor(projectSection.images[3]).url() as string}
                alt={`${title} - additional`}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProjectSection8 = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={` md:min-h-[60vh] w-full pt-8`}>
      <div className="flex flex-col md:flex-row md:justify-center md:items-end h-[200vh] md:h-[60vh]  w-[100%] md:px-[10vw] ">
        {projectSection.images &&
          projectSection.images.map((image, index) => (
            <div
              className="relative h-[95%] w-[100%] my-2 md:mx-2 "
              key={index}
            >
              <Image
                src={urlFor(image).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          ))}
      </div>
      {projectSection.text && projectSection.text[0] && (
        <div className="h-[30vh] flex flex-col items-center justify-center">
          <div className="px-4 text-center md:max-w-[60vw]">
            <h3 className="">{projectSection.text[0]}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export const ProjectSection9 = ({
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

export const ProjectSection10 = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={` md:min-h-screen w-full text-justify `}>
      {/* <h1>{title}</h1> */}
      {projectSection.text && (
        <div className={`px-4 md:p-12  md:grid md:grid-cols-3 h-full gap-10`}>
          <div className="md:h-[80vh] pt-12 flex flex-col  justify-start">
            <h3> {projectSection.text[0]}</h3>
          </div>
          <div className="md:h-[60vh] pt-4 md:-ml-32 md:mr-32 flex flex-col justify-center">
            <h3> {projectSection.text[1]}</h3>
          </div>
          <div className="md:h-[80vh] flex flex-col pb-12 justify-end">
            <h3 className="py-4"> {projectSection.text[2]}</h3>
            <h3> {projectSection.text[3]}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export const ProjectSection11 = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={`  md:grid md:grid-cols-2`}>
      {projectSection.text && (
        <div className="flex flex-col justify-center py-8 md:py-20  text-right  md:mr-8 md:ml-[45%]">
          <h1 className="">
            {projectSection.text[0]}
          </h1>
          <p className="">{projectSection.text[1]}</p>
          <p className="=">{projectSection.text[2]}</p>
          {projectSection.text[3] && (
            <p className="">{projectSection.text[3]}</p>
          )}
          {projectSection.text[4] && (
            <p className=""> {projectSection.text[4]}</p>
          )}
          {projectSection.text[5] && (
            <p className=""> {projectSection.text[5]}</p>
          )}
          {projectSection.text[6] && (
            <p className=""> {projectSection.text[6]}</p>
          )}
          {projectSection.text[7] && (
            <p className=""> {projectSection.text[7]}</p>
          )}
          {projectSection.text[8] && (
            <p className=""> {projectSection.text[8]}</p>
          )}
          {projectSection.text[9] && (
            <p className=""> {projectSection.text[9]}</p>
          )}
          {projectSection.text[10] && (
            <p className=""> {projectSection.text[10]}</p>
          )}
          {projectSection.text[11] && (
            <p className=""> {projectSection.text[11]}</p>
          )}
          {projectSection.text[12] && (
            <p className=""> {projectSection.text[12]}</p>
          )}
          {projectSection.text[13] && (
            <p className=""> {projectSection.text[13]}</p>
          )}
          
        </div>
      )}
      <div>
        {projectSection.images && (
          <div className="flex flex-col justify-center items-start h-[60vh] md:min-h-[100vh] w-[100vw] md:w-[100%]  ">
            <div className="relative h-[95%] w-[100%] md:w-[90%]">
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const ProjectSection12 = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={`  md:grid md:grid-cols-2`}>
      <div>
        {projectSection.images && (
          <div className="flex flex-col justify-center items-start h-[60vh] md:min-h-[100vh] w-[100vw] md:w-[100%]  ">
            <div className="relative h-[95%] w-[100%] md:w-[90%]">
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
        {projectSection.text && (
          <div className="flex flex-col justify-center py-8 md:py-20  text-right ml-8 mr-8 md:ml-[45%]">
            <h1 className="">
              {projectSection.text[0]}
            </h1>
            <p className="">{projectSection.text[1]}</p>
            <p className="py-2">{projectSection.text[2]}</p>
            {projectSection.text[3] && (
              <p className="">{projectSection.text[3]}</p>
            )}
            {projectSection.text[4] && (
              <p className=""> {projectSection.text[4]}</p>
            )}
            {projectSection.text[5] && (
              <p className=""> {projectSection.text[5]}</p>
            )}
            {projectSection.text[6] && (
              <p className=""> {projectSection.text[6]}</p>
            )}
            {projectSection.text[7] && (
              <p className=""> {projectSection.text[7]}</p>
            )}
            {projectSection.text[8] && (
              <p className=""> {projectSection.text[8]}</p>
            )}
            {projectSection.text[9] && (
              <p className=""> {projectSection.text[9]}</p>
            )}
            {projectSection.text[10] && (
              <p className=""> {projectSection.text[10]}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

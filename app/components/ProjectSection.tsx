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
    <div className={` min-h-screen w-full bg-[rgba(227,224,220,0.85)]`}>
      <div className={` md:grid md:grid-cols-2 pt-8`}>
        {projectSection.text && (
          <div className="md:hidden text-right ">
            <div className="px-4">
              <h1 className="py-2">{title}</h1>
              {projectSection.images && projectSection.images[1] && (
                <div className="relative  h-[40vh] w-[100%]">
                  <Image
                    src={urlFor(projectSection.images[1]).url() as string}
                    alt={`${title} - additional`}
                    fill
                    className="object-contain z-10"
                  />
                </div>
              )}
              <p className="py-2">{projectSection.text[0]}</p>
            </div>
          </div>
        )}
        <div className="flex flex-col md:justify-end md:items-end h-[75vh] md:h-[80vh] w-[85vw] md:w-[50vw]  ">
          <div className="relative h-full w-full md:w-[60%]">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={title}
                fill
                className="object-contain  z-10"
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
            <div className="w-[50%]">
              <h1 className="py-4">{title}</h1>
              <p className="py-2">{projectSection.text[0]}</p>
              {projectSection.text[1] && <p>{projectSection.text[1]}</p>}
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
    <div
      className={` ${projectSection.background} bg-[rgba(227,224,220,0.85)] w-full `}
    >
      <div className={`  p-8 md:p-32`}>
        {projectSection.text && (
          <div className={`md:text-right md:max-w-[50vw] mx-auto`}>
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
    <div className={` bg-[rgba(227,224,220,0.85)] min-h-screen  w-full`}>
      <div
        className={` md:grid md:grid-cols-5 min-h-full md:h-[95vh] w-full  `}
      >
        <div className="m-auto h-full w-[70%]">
          {/* {projectSection.text && (
            <div>
              <p>{projectSection.text[0]}</p>
            </div>
          )} */}
        </div>
        <div className="h-[80vh] md:h-full w-full flex flex-row items-center">
          <div className="relative w-[110%] h-[80%] -mr-24">
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
        <div className="h-[60vh] md:h-full w-full flex flex-row justify-end md:items-end">
          <div className="relative w-[70%] h-[90%] md:h-[60%] mt-4 ">
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
        <div className="h-[70vh] md:h-full w-full flex flex-row justify-start md:items-start ">
          <div className="relative w-[90%] md:w-[130%] h-[100%] md:h-[80%] ml-4 -mr-10 -mb-16">
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
        <div className="h-[50vh] md:h-full w-full flex items-center md:items-end justify-end">
          <div className="relative w-[100%] md:w-[70%] h-[80%] md:h-[50%] mr-4 ">
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
    <div className={` bg-[rgba(227,224,220,0.85)] min-h-screen -mt-12 w-full`}>
      <div className={` md:grid md:grid-cols-5 md:h-[95vh] w-full `}>
        <div className="h-[50vh] md:h-full w-full flex md:flex-row justify-end md:justify-start md:items-start">
          <div className="relative w-[80%] h-[90%] md:h-[50%] md:-mt-32 ">
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
        <div className="h-[80vh] md:h-full w-full flex flex-row items-center">
          <div className="relative w-[110%] h-[100%] md:-ml-12">
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
        <div className="h-[60vh] md:h-full w-full flex flex-row items-center md:items-start">
          <div className="relative w-[90%] h-[70%] md:h-[50%] ">
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
          {/* <div className="h-[80vh] md:h-full w-full flex flex-col md:items-start items-center md:justify-end"> */}
          {/* {projectSection.text && (
        <div className="relative w-[80%] h-[30%] md:h-[100%] mr-4 md:pt-16 md:-mt-12 ">
            <div>
              <p>{projectSection.text[0]}</p>
            </div>
        </div>
          )} */}
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
      className={`${projectSection.background} bg-[rgba(227,224,220,0.85)] min-h-screen -mt-12 w-full`}
    >
      <div className={` md:grid md:grid-cols-5 md:h-[95vh] w-full  `}>
        <div className="h-[60vh] md:h-full w-full flex flex-row items-start">
          <div className="relative w-[80%] h-[90%] md:h-[50%] md:-mt-24 ">
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
        <div className="h-[50vh] md:h-full w-full flex flex-row md:items-start">
          <div className="relative w-[110%] md:w-[130%] h-[100%] md:h-[90%] -ml-8 -mr-24 -mt-40">
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
        <div>
          {/* <div className="h-[25vh] md:h-full w-full flex items-center justify-center md:flex-row md:items-start"> */}
          {/* <div className="relative w-[85%] md:w-[90%] h-[70%] mt-4 md:-ml-20"> */}
          {/* {projectSection.text && (
            <div>
              <p>{projectSection.text[0]}</p>
            </div>
          )} */}
          {/* </div> */}
        </div>
        <div className="h-[60vh] md:h-full w-full flex flex-row md:items-start ">
          <div className="relative w-[110%] h-[100%] -ml-24 -mt-24 mr-6">
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
        <div>
          {/* <div className="h-[30vh] md:h-full w-full flex justify-center items-center md:items-end"> */}

          {/* <div className="relative w-[85%] h-[60%] mr-4 ">
          {projectSection.text && (
            <div>
              <p>{projectSection.text[1]}</p>
            </div>
          )}
        </div> */}
        </div>
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
    <div
      className={`${projectSection.background} bg-[rgba(227,224,220,0.85)] min-h-screen w-full`}
    >
      <div className={`  md:grid md:grid-cols-2`}>
        {projectSection.text && (
          <div className="flex flex-col justify-center py-16 pl-20 text-right mr-8 md:ml-[40%]">
            <p>
              <span className="text-5xl font-serif  font-light tracking-tighter leading-[0.8]">
                {projectSection.text[0]}
              </span>{" "}
              {projectSection.text[1]}
            </p>
            <br />
            <p>{projectSection.text[2]}</p>
          </div>
        )}
        <div className="flex flex-col justify-center items-start h-[60vh] md:h-[100vh] w-[100vw] md:w-[100%]  ">
          <div className="relative h-[95%] w-[100%] md:w-[90%]">
            {projectSection.images && (
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
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

export const ProjectSection7 = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={` min-h-screen w-full bg-[rgba(227,224,220,0.85)]`}>
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
    <div className={` md:min-h-screen w-full bg-[rgba(227,224,220,0.85)]`}>
      <div className="flex justify-center items-end h-[40vh] md:h-[60vh]  w-[100%] md:px-[10vw] ">
        {projectSection.images &&
          projectSection.images.map((image, index) => (
            <div className="relative h-[95%] w-[100%] md:mx-2 " key={index}>
              <Image
                src={urlFor(image).url() as string}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          ))}
      </div>
      {projectSection.text && (
        <div className="h-[30vh] flex flex-col items-center justify-center">
          <div className="px-4 text-center md:max-w-[50vw]">
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
      className={`h-[50vh] md:min-h-screen min-w-screen md:-pb-[25vh] md:h-[120vh] relative`}
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
    <div
      className={` md:min-h-screen w-full text-justify bg-[rgba(227,224,220,0.85)]`}
    >
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
    <div
      className={`h-[50vh] md:min-h-screen min-w-screen md:-pb-[25vh] md:h-[120vh] relative bg-[rgba(227,224,220,0.85)]`}
    >
      {projectSection.images && (
        <Image
          src={urlFor(projectSection.images[0]).url() as string}
          alt={title}
          fill
          className="object-cover p-16"
        />
      )}
    </div>
  );
};

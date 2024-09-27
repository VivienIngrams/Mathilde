'use client'

import React, { useState } from "react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { Mirante } from "@/app/interface";
import { urlFor } from "@/sanity/lib/image";
import ImageOverlay from "../ImageOverlay";


const Mirante2 = ({ projectSection }: { projectSection: Mirante }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
  
    const openOverlay = (url: string) => {
      setIsOpen(true);
      setImageUrl(url);
    };
  
    const closeOverlay = () => {
      setIsOpen(false);
      setImageUrl("");
    };
  
    return (
      <div>
        {/* Mobile */}
        <div className="md:hidden min-h-[80vh] pt-12 flex flex-col">
          <div className="flex flex-col justify-center w-full">
            <h1 className="pb-2">{projectSection.title}</h1>
          </div>
          <div className="columns-1 w-full">
            {projectSection.image && (
              <div>
                <div
                  className="relative h-[95%] w-full cursor-pointer"
                  onClick={() => openOverlay(urlFor(projectSection.image.asset).url())}
                >
                  <Image
                    src={urlFor(projectSection.image.asset).url()}
                    alt={projectSection.title}
                    width={700}
                    height={300}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    style={{ objectPosition: "left" }}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center pt-6 pb-20">
            <PortableText value={projectSection.content} />
          </div>
        </div>
  
        {/* Desktop */}
        <div className="hidden md:block">
          {projectSection.image && (
            <div className="pt-12 md:min-h-[85vh] w-full relative">
              <div
                className="cursor-pointer"
                onClick={() => openOverlay(urlFor(projectSection.image).url())}
              >
                <Image
                  src={urlFor(projectSection.image).url() as string}
                  alt={projectSection.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          )}
          <div className="md:pb-24 md:grid md:grid-cols-3">
            <div className="md:flex md:flex-col md:justify-center md:items-end md:min-h-[30vh] w-full">
              <h1 className="md:pr-8">{projectSection.title}</h1>
            </div>
            <div className="md:pt-4 md:flex md:flex-col md:justify-center md:items-center md:h-[30vh] w-full md:col-span-2">
              <div className="md:columns-2 md:gap-8 md:-p-4">
                <PortableText value={projectSection.content} />
              </div>
            </div>
          </div>
        </div>
  
        {isOpen && (
          <ImageOverlay
            imageUrl={imageUrl}
            title={projectSection.title}
            closeOverlay={closeOverlay}
          />
        )}
      </div>
    );
  };
  
  export default Mirante2
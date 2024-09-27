'use client'

import Image from "next/image";

const ImageOverlay = ({
    imageUrl,
    title,
    closeOverlay,
  }: {
    imageUrl: string;
    title: string;
    closeOverlay: () => void;
  }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
        <div className="relative w-full h-full flex justify-center items-center">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl z-50"
            onClick={closeOverlay}
          >
            &#10005;
          </button>
          
          {/* Image container */}
          <div className="w-[90vw] h-[90vh] flex justify-center items-center">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-contain"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  };
  

  export default ImageOverlay
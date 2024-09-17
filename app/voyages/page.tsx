import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";

async function getImages() {
  const data = await client.fetch(
    `
    *[_type == 'gallery'] {
      images[] {
        asset->{
          _id,
          url
        }
      }
    }
    `,
    {},
    {
      next: {
        revalidate: 10,
      },
    }
  );
  return data;
}

export default async function Gallery() {
  const data = await getImages();
  const images = data[0].images;
  console.log(images);

  return (
    <div className="h-full">
      <NavMenu />
      <div className="bg-[rgba(227,224,220,0.85)]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image: any) => (
            <div key={image.asset._id} className="w-full h-auto">
              <Image
                src={urlFor(image.asset).url()} // Generating the image URL from Sanity
                alt="Gallery Image"
                width={500}
                height={500} // These are just placeholders; height will adjust automatically
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

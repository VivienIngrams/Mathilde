import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";

async function getImages() {
  const data = await client.fetch(
    `
    *[_type == 'gallery' && title == 'Quotidien'] {
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

export default async function Education() {
  const data = await getImages();
  const images = data[0]?.images || [];

  return (
    <div className="h-full">
      <NavMenu />
      <div className="bg-[rgba(227,224,220,0.85)] min-h-screen p-4">
        <div className="">

        </div>
      </div>
      <Footer />
    </div>
  );
}

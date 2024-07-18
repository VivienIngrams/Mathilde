import Image from "next/image";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import {client} from "../sanity/lib/client";

async function getData() {
  const data = await client.fetch(
    `
    *[_type == 'project'] | order(date desc) {
    title,
    "slug": slug.current,
      date,
      image,
  }
  `,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return data;
}

export default async function Home() {
  const data = await getData();
  console.log(data);  
  return (
    <div className="h-full">
      <NavMenu />
    <div>Hey hey</div>
    <Footer/>
    </div>
  );
}


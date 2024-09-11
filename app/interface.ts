import { PortableTextBlock } from "next-sanity";

export interface Project {
  title: string;
  slug: string;
  date: string;
  section: Section;
}

export interface Section {
  images?: any[];
  layout: number;
  text?: string[];
}

export interface ProjectPage {
  title: string;
  slug: string;
    sections: Section[];
}

export interface Mirante {
  title: string;
 slug: string;
 image: any;
 content: PortableTextBlock[];
}
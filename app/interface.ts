export interface Project {
  title: string;
  slug: string;
  section: Section;
}

export interface Section {
    images: any[];
    subtitle: string;
    layout: string;
    font: string;
    background: string;
    text?: string[];
 }

export interface ProjectPage {
  title: string;
  slug: string;
  date: string;
 sections: Section[];
}


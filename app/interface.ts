export interface Project {
  title: string;
  slug: string;
  date: string;
  section: Section;
}

export interface Section {
  images?: any[];
  layout: number;
  background: string;
  text?: string[];
}

export interface ProjectPage {
  title: string;
  slug: string;
    sections: Section[];
}

import { init } from "next/dist/compiled/webpack/webpack";

const project = {
  name: "project",
  type: "document",
  title: "Projets",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titre",
    },
    {
      name: "slug",
      type: "slug",
      title:
        'Slug (clique sur le bouton "Générer" pour le remplir automatiquement)',
      options: {
        source: "title",
        maxLength: 60,
      },
    },
    {
      name: "date",
      type: "date",
      title: "Date du fin de projet",
    },
    {
      name: "mainBackground",
      type: "string",
      title: "Section Home page - fond de couleur?",
      options: {
        list: [
          { title: "light", value: "bg-orange-50" }, //define values here !!
          { title: "dark", value: "bg-yellow-600 " },
        ],
        layout: "radio",
        initialValue: "bg-orange-50",
      },
    },
    {
      name: "mainLayout",
      type: "string",
      title: "Section Home page - mise en page",
      options: {
        list: [
          { title: "wide", value: "w-screen" }, //define values here !!
          { title: "margin 1", value: "" },
          { title: "margin 2", value: "grid-col-2" },
          { title: "margin 3", value: "grid-col-3" },
          { title: "random", value: "grid-col-5" },
          { title: "horizontal", value: "w-screen" },
        ],
        layout: "radio",
        initialValue: "margin 1",
      },
    },
    {
      name: "mainImages",
      type: "array",
      title: "Image(s) pour Home Page",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "mainText",
      type: "array",
      title: "Texte(s) Home Page",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "mainFont",
      type: "string",
      title: "Texte(s) Home Page - Police",
      options: {
        list: [
          { title: "H1", value: "text-4xl " }, //define values here !!
          { title: "H2", value: "text-3xl " },
          { title: "H3", value: "text-2xl " },
          { title: "H4", value: "text-xl " },
          { title: "p", value: "text-base font-normal" },
        ],
        layout: "radio",
        initialValue: "text-base",
      },
    },
    {
      name: "mainAlignment",
      type: "string",
      title: "Texte(s) Home Page - Alignement",
      options: {
        list: [
          { title: "gauche", value: "align-left" }, //check values CSS !!!
          { title: "centre", value: "align-center" },
          { title: "droite", value: "align-right" },
        ],
        layout: "radio",
        initialValue: "align-left",
      },
    },
    {
      name: "background1",
      type: "string",
      title: "Section 1 - fond de couleur?",
      options: {
        list: [
          { title: "light", value: "bg-orange-50" }, //define values here !!
          { title: "dark", value: "bg-yellow-600 " },
        ],
        layout: "radio",
        initialValue: "bg-orange-50",
      },
    },
    {
      name: "layout1",
      type: "string",
      title: "Section 1 - mise en page",
      options: {
        list: [
          { title: "wide", value: "w-screen" }, //define values here !!
          { title: "margin 1", value: "" },
          { title: "margin 2", value: "grid-col-2" },
          { title: "margin 3", value: "grid-col-3" },
          { title: "random", value: "grid-col-5" },
          { title: "horizontal", value: "w-screen" },
        ],
        layout: "radio",
        initialValue: "margin 1",
      },
    },
    {
      name: "images1",
      type: "array",
      title: "Image(s) 1",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "text1",
      type: "array",
      title: "Texte(s) 1",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "font1",
      type: "string",
      title: "Texte(s) 1 - Police",
      options: {
        list: [
          { title: "H1", value: "text-4xl " }, //define values here !!
          { title: "H2", value: "text-3xl " },
          { title: "H3", value: "text-2xl " },
          { title: "H4", value: "text-xl " },
          { title: "p", value: "text-base font-normal" },
        ],
        layout: "radio",
        initialValue: "text-base",
      },
    },
    {
      name: "alignment1",
      type: "string",
      title: "Texte(s) 1 - Alignement",
      options: {
        list: [
          { title: "gauche", value: "align-left" }, //check values CSS !!!
          { title: "centre", value: "align-center" },
          { title: "droite", value: "align-right" },
        ],
        layout: "radio",
        initialValue: "align-left",
      },
    },
    {
      name: "background2",
      type: "string",
      title: "Section 2 - fond de couleur?",
      options: {
        list: [
          { title: "light", value: "bg-orange-50" }, //define values here !!
          { title: "dark", value: "bg-yellow-600 " },
        ],
        layout: "radio",
        initialValue: "bg-orange-50",
      },
    },
    {
      name: "layout2",
      type: "string",
      title: "Section 2 - mise en page",
      options: {
        list: [
          { title: "wide", value: "w-screen" }, //define values here !!
          { title: "margin 1", value: "" },
          { title: "margin 2", value: "grid-col-2" },
          { title: "margin 3", value: "grid-col-3" },
          { title: "random", value: "grid-col-5" },
          { title: "horizontal", value: "w-screen" },
        ],
        layout: "radio",
        initialValue: "margin 1",
      },
    },
    {
      name: "images2",
      type: "array",
      title: "Image(s) 2",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "text2",
      type: "array",
      title: "Texte(s) 2",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "font2",
      type: "string",
      title: "Texte(s) 2 - Police",
      options: {
        list: [
          { title: "H1", value: "text-4xl " }, //define values here !!
          { title: "H2", value: "text-3xl " },
          { title: "H3", value: "text-2xl " },
          { title: "H4", value: "text-xl " },
          { title: "p", value: "text-base font-normal" },
        ],
        layout: "radio",
        initialValue: "text-base",
      },
    },
    {
      name: "alignment2",
      type: "string",
      title: "Texte(s) 2 - Alignement",
      options: {
        list: [
          { title: "gauche", value: "align-left" }, //check values CSS !!!
          { title: "centre", value: "align-center" },
          { title: "droite", value: "align-right" },
        ],
        layout: "radio",
        initialValue: "align-left",
      },
    },

  
  ],
};

export default project;

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
      name: "subtitle1",
      type: "string",
      title: "Sous-titre 1",
    },
    {
      name: "font1",
      type: "string",
      title: "Sous-titre 1 - Police",
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
      name: "layout1",
      type: "string",
      title: "Sous-titre 1 - Alignement",
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
      name: "subtitle2",
      type: "string",
      title: "Sous-titre 2",
    },
    {
      name: "font2",
      type: "string",
      title: "Sous-titre 2 - Police",
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
      name: "layout2",
      type: "string",
      title: "Sous-titre 2 - Alignement",
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
  ],
};

export default project;

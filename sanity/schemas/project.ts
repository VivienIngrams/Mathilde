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
          { title: "dark", value: "bg-[#B8B09F]" },
        ],
        layout: "radio",
        initialValue: "bg-orange-50",
      },
    },
    {
      name: "mainLayout",
      type: "number",
      title: "Section Home page - nombre de colonnes",
      options: {
        list: [1, 2, 3, 4, 5],
        layout: "radio",
      },
      initialValue: 1,
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
          { title: "gauche", value: "text-left" }, //check values CSS !!!
          { title: "centre", value: "text-center" },
          { title: "droite", value: "text-right" },
          { title: "justifié", value: "text-justify" },
        ],
        layout: "radio",
        initialValue: "text-left",
      },
    },
    {
      name: "background1",
      type: "string",
      title: "Section 1 - fond de couleur?",
      options: {
        list: [
          { title: "light", value: "bg-orange-50" }, //define values here !!
          { title: "dark", value: "bg-[#B8B09F] " },
        ],
        layout: "radio",
        initialValue: "bg-orange-50",
      },
    },
    {
      name: "layout1",
      type: "number",
      title: "Section 1 - nombre de colonnes",
      options: {
        list: [1, 2, 3, 4, 5],
        layout: "radio",
      },
      initialValue: 1,
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
          { title: "gauche", value: "text-left" }, //check values CSS !!!
          { title: "centre", value: "text-center" },
          { title: "droite", value: "text-right" },
          { title: "justifié", value: "text-justify" },
        ],
        layout: "radio",
        initialValue: "text-left",
      },
    },
    {
      name: "background2",
      type: "string",
      title: "Section 2 - fond de couleur?",
      options: {
        list: [
          { title: "light", value: "bg-orange-50" }, //define values here !!
          { title: "dark", value: "bg-[#B8B09F] " },
        ],
        layout: "radio",
        initialValue: "bg-orange-50",
      },
    },
    {
      name: "layout2",
      type: "number",
      title: "Section 2 - nombre de colonnes",
      options: {
        list: [1, 2, 3, 4, 5],
        layout: "radio",
      },
      initialValue: 1,
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
          { title: "gauche", value: "text-left" }, //check values CSS !!!
          { title: "centre", value: "text-center" },
          { title: "droite", value: "text-right" },
          { title: "justifié", value: "text-justify" },
        ],
        layout: "radio",
        initialValue: "text-left",
      },
    },
    {
      name: "background3",
      type: "string",
      title: "Section 3 - fond de couleur?",
      options: {
        list: [
          { title: "light", value: "bg-orange-50" }, //define values here !!
          { title: "dark", value: "bg-[#B8B09F] " },
        ],
        layout: "radio",
        initialValue: "bg-orange-50",
      },
    },
    {
      name: "layout3",
      type: "number",
      title: "Section 3 - nombre de colonnes",
      options: {
        list: [1, 2, 3, 4, 5],
        layout: "radio",
      },
      initialValue: 1,
    },
    {
      name: "images3",
      type: "array",

      title: "Image(s) 3",
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
      name: "text3",
      type: "array",
      title: "Texte(s) 3",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "font3",
      type: "string",
      title: "Texte(s) 3 - Police",
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
      name: "alignment3",
      type: "string",
      title: "Texte(s) 3 - Alignement",
      options: {
        list: [
          { title: "gauche", value: "text-left" }, //check values CSS !!!
          { title: "centre", value: "text-center" },
          { title: "droite", value: "text-right" },
          { title: "justifié", value: "text-justify" },
        ],
        layout: "radio",
        initialValue: "text-left",
      },
    },
    {
      name: "background4",
      type: "string",
      title: "Section 4 - fond de couleur?",
      options: {
        list: [
          { title: "light", value: "bg-orange-50" }, //define values here !!
          { title: "dark", value: "bg-[#B8B09F] " },
        ],
        layout: "radio",
        initialValue: "bg-orange-50",
      },
    },
    {
      name: "layout4",
      type: "number",
      title: "Section 4 - nombre de colonnes",
      options: {
        list: [1, 2, 3, 4, 5],
        layout: "radio",
      },
      initialValue: 1,
    },
    {
      name: "images4",
      type: "array",
      title: "Image(s) 4",
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
      name: "text4",
      type: "array",
      title: "Texte(s) 4",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "font4",
      type: "string",
      title: "Texte(s) 4 - Police",
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
      name: "alignment4",
      type: "string",
      title: "Texte(s) 4 - Alignement",
      options: {
        list: [
          { title: "gauche", value: "text-left" }, //check values CSS !!!
          { title: "centre", value: "text-center" },
          { title: "droite", value: "text-right" },
          { title: "justifié", value: "text-justify" },
        ],
        layout: "radio",
        initialValue: "text-left",
      },
    },
    {
      name: "background5",
      type: "string",
      title: "Section 5 - fond de couleur?",
      options: {
        list: [
          { title: "light", value: "bg-orange-50" }, //define values here !!
          { title: "dark", value: "bg-[#B8B09F] " },
        ],
        layout: "radio",
        initialValue: "bg-orange-50",
      },
    },
    {
      name: "layout5",
      type: "number",
      title: "Section 5 - nombre de colonnes",
      options: {
        list: [1, 2, 3, 4, 5],
        layout: "radio",
      },
      initialValue: 1,
    },
    {
      name: "images5",
      type: "array",
      title: "Image(s) 5",
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
      name: "text5",
      type: "array",
      title: "Texte(s) 5",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "font5",
      type: "string",
      title: "Texte(s) 5 - Police",
      options: {
        list: [
          { title: "H1", value: "text-5xl " }, //define values here !!
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
      name: "alignment5",
      type: "string",
      title: "Texte(s) 5 - Alignement",
      options: {
        list: [
          { title: "gauche", value: "text-left" }, //check values CSS !!!
          { title: "centre", value: "text-center" },
          { title: "droite", value: "text-right" },
          { title: "justifié", value: "text-justify" },
        ],
        layout: "radio",
        initialValue: "text-left",
      },
    },
    {
      name: "background6",
      type: "string",
      title: "Section 6 - fond de couleur?",
      options: {
        list: [
          { title: "light", value: "bg-orange-60" }, //define values here !!
          { title: "dark", value: "bg-[#B8B09F] " },
        ],
        layout: "radio",
        initialValue: "bg-orange-60",
      },
    },
    {
      name: "layout6",
      type: "number",
      title: "Section 6 - nombre de colonnes",
      options: {
        list: [1, 2, 3, 4, 5],
        layout: "radio",
      },
      initialValue: 1,
    },
    {
      name: "images6",
      type: "array",
      title: "Image(s) 6",
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
      name: "text6",
      type: "array",
      title: "Texte(s) 6",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "font6",
      type: "string",
      title: "Texte(s) 6 - Police",
      options: {
        list: [
          { title: "H1", value: "text-6xl " }, //define values here !!
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
      name: "alignment6",
      type: "string",
      title: "Texte(s) 6 - Alignement",
      options: {
        list: [
          { title: "gauche", value: "text-left" }, //check values CSS !!!
          { title: "centre", value: "text-center" },
          { title: "droite", value: "text-right" },
          { title: "justifié", value: "text-justify" },
        ],
        layout: "radio",
        initialValue: "text-left",
      },
    },
  ],
};

export default project;

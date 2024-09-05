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
      name: "mainLayout",
      type: "number",
      title: "Section Home page - mise en page",
      options: {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
      name: "layout1",
      type: "number",
      title: "Section 1 - mise en page",
      options: {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
      name: "layout2",
      type: "number",
      title: "Section 2 - mise en page",
      options: {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
      name: "layout3",
      type: "number",
      title: "Section 3 - mise en page",
      options: {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
      name: "layout4",
      type: "number",
      title: "Section 4 - mise en page",
      options: {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
      name: "layout5",
      type: "number",
      title: "Section 5 - mise en page",
      options: {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
      name: "layout6",
      type: "number",
      title: "Section 6 - mise en page",
      options: {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
      name: "layout7",
      type: "number",
      title: "Section 7 - mise en page",
      options: {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        layout: "radio",
      },
      initialValue: 1,
    },
    {
      name: "images7",
      type: "array",
      title: "Image(s) 7",
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
      name: "text7",
      type: "array",
      title: "Texte(s) 7",
      of: [
        {
          type: "string",
        },
      ],
    },
    
    {
      name: "layout8",
      type: "number",
      title: "Section 8 - mise en page",
      options: {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        layout: "radio",
      },
      initialValue: 1,
    },
    {
      name: "images8",
      type: "array",
      title: "Image(s) 8",
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
      name: "text8",
      type: "array",
      title: "Texte(s) 8",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
};

export default project;

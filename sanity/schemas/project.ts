const project = {
  name: 'project',
  type: 'document',
  title: 'Projets',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug (clique sur le bouton "Générer" pour le remplir automatiquement)',
      options: {
        source: 'title',
        maxLength: 60,
      },
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date du fin de projet',
    },
    {name: 'background1', type: 'boolean', title: 'Section 1 - fond de couleur foncé?'},
    {
      name: 'subtitle1',
      type: 'string',
      title: 'Sous-titre 1',
    },
    {
      name: 'font',
      type: 'string',
      title: 'Sous-titre 1 - Police',
      options: {
        list: [
          {title: 'H1', value: ''},
          {title: 'H2', value: ''},
          {title: 'H3', value: ''},
          {title: 'H4', value: ''},
          {title: 'p', value: ''},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'layout',
      type: 'string',
      title: 'Sous-titre 1 - Alignement',
      options: {
        list: [
          {title: 'gauche', value: ''},
          {title: 'centre', value: ''},
          {title: 'droite', value: ''},
          
        ],
        layout: 'radio',
      },
    },
    {
      name: 'images1',
      type: 'array',
      title: 'Image(s) 1',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'text1',
      type: 'array',
      title: 'Texte(s) 1',
      of: [
        {
          type: 'string',
        },
      ],
    },
    // {
    //     name: 'content',
    //     type: 'array',
    //     title: 'Contenu',

    //     of: [
    //         {
    //             type: 'block',
    //         },
    //         {
    //             type: 'image',
    //         },
    //     ],
    // }
  ],
}

export default project;
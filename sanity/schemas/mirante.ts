const mirante = {
  name: "mirante",
  type: "document",
  title: "Mirante",
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
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};

export default mirante;
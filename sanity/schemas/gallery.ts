import { defineType } from "sanity";

const gallery = defineType ({
        name: 'gallery',
        type: 'document',
        title: 'Gallery',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Title'
          },
          {
            name: "text",
            type: "array",
            title: "Texte(s)",
            of: [
              {
                type: "string",
              },
            ],
          },
          {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [{ type: 'image' }]
          }
        ]
      }
    )
  

  export default gallery;
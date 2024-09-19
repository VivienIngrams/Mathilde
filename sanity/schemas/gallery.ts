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
            name: "content",
            type: "array",
            title: "Content",
            of: [
              {
                type: "block",
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
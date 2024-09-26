export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true, // Allows for image cropping
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          // Existing block content configuration
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Heading 4', value: 'h4' },
            { title: 'Heading 5', value: 'h5' },
            { title: 'Heading 6', value: 'h6' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },   // Unordered list
            { title: 'Numbered', value: 'number' }, // Ordered list
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },  // Bold text
              { title: 'Italic', value: 'em' },    // Italic text
            ],
            annotations: [
              {
                name: 'color',
                type: 'object',
                title: 'Text Color',
                fields: [
                  {
                    name: 'color',
                    type: 'string',
                    title: 'Color',
                    options: {
                      list: [
                        { title: 'Red', value: 'red' },
                        { title: 'Green', value: 'green' },
                        { title: 'Blue', value: 'blue' },
                        { title: 'Black', value: 'black' },
                      ],
                    },
                  },
                ],
              },
            ],
          },
        },
        { type: 'image' },        // Embed images
        { type: 'table' },        // Add the custom table schema here
        { type: 'blockColor' },   // Custom block color, if needed
      ],
    },
  ],
};

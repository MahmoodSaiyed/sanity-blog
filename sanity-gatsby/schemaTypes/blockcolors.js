// /schemas/blockColor.js
export default {
    name: 'blockColor',
    title: 'Colored Block',
    type: 'object',
    fields: [
      {
        name: 'color',
        title: 'Text Color',
        type: 'string',
        options: {
          list: [
            { title: 'Red', value: '#FF5733' },
            { title: 'Green', value: '#57ba50' },
            { title: 'Blue', value: '#3357FF' },
            {title: 'Black', value:'#0f0f0f'}
            // Add more colors as needed
          ],
        },
      },
      {
        name: 'size',
        title: 'Text Size',
        type: 'string',
        options: {
          list: [
            { title: 'Small', value: '0.8em' },
            { title: 'Medium', value: '1em' },
            { title: 'Large', value: '1.5em' },
            { title: 'Extra Large', value: '2em' },
            // You can also use pixel values if needed
          ],
        },
      },
      {
        name: 'text',
        title: 'Text',
        type: 'text',
      },
    ],
  };
  
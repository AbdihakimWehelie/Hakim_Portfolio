export default {

  name: "projects",
  tile: "Project",
  type: "document",
  fields: [{
      name: "title",
      type: "string"
    },

    {
      name: "date",
      type: "datetime"
    },


    {
      name: "description",
      type: "text"
    },

    {
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [{
            value: "personal",
            title: "Personal"
          },
          {
            value: "client",
            title: "Client"
          },
          {
            value: "school",
            title: "School"
          },
        ],
      },

    },
    {
      name: "link",
      type: "url"
    },
	{
      name: "DemoLink",
      type: "url"
    },
	{
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      type: "array",
      of: [{
        type: "string"
      }, ],
      options: {
        layout: "tags"
      },
    }

  ]

}

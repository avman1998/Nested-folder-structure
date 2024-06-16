const Structure = {
  name: "project",
  type: "folder",
  children: [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "components",
          type: "folder",
          children: [
            {
              name: "Button.js",
              type: "file",
            },
            {
              name: "Input.js",
              type: "file",
            },
          ],
        },
        {
          name: "pages",
          type: "folder",
          children: [
            {
              name: "Home.js",
              type: "file",
            },
            {
              name: "About.js",
              type: "file",
            },
          ],
        },
        {
          name: "index.html",
          type: "file",
        },
      ],
    },
    {
      name: "package.json",
      type: "file",
    },
    {
      name: "README.md",
      type: "file",
    },
  ],
};
export default Structure;

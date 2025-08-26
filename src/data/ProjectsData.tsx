const images = import.meta.glob(
  "../assets/projects/*.(webp|jpg|jpeg|png|avif)",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

const projectsMeta = [
  {
    file: "teste",
    name: "Projeto",
    link: "https://viniciusmlima.site/",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, reiciendis velit veniam molestias voluptas porro assumenda expedita, aperiam, earum nostrum consectetur itaque quia aliquid. Soluta, quam tempora. Veritatis, corrupti commodi?",
  },
  {
    file: "teste",
    name: "Projeto",
    link: "https://viniciusmlima.site/",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, reiciendis velit veniam molestias voluptas porro assumenda expedita, aperiam, earum nostrum consectetur itaque quia aliquid. Soluta, quam tempora. Veritatis, corrupti commodi?",
  },
  {
    file: "teste",
    name: "Projeto",
    link: "https://viniciusmlima.site/",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, reiciendis velit veniam molestias voluptas porro assumenda expedita, aperiam, earum nostrum consectetur itaque quia aliquid. Soluta, quam tempora. Veritatis, corrupti commodi?",
  },
  {
    file: "teste",
    name: "Projeto",
    link: "https://viniciusmlima.site/",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, reiciendis velit veniam molestias voluptas porro assumenda expedita, aperiam, earum nostrum consectetur itaque quia aliquid. Soluta, quam tempora. Veritatis, corrupti commodi?",
  },
  {
    file: "teste",
    name: "Projeto",
    link: "https://viniciusmlima.site/",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, reiciendis velit veniam molestias voluptas porro assumenda expedita, aperiam, earum nostrum consectetur itaque quia aliquid. Soluta, quam tempora. Veritatis, corrupti commodi?",
  },
  
];

export const ProjectsData = projectsMeta.map((project) => {
  const imagePath = Object.keys(images).find((path) =>
    path.includes(project.file)
  
  );

  return {
    ...project,
    imageUrl: imagePath ? images[imagePath] : null,
  };
});

interface ContentType {
  name: string;
  url: string;
}

const allTypesContent: ContentType[] = [
  {
    name: "Artigos",
    url: "/artigos",
  },
  {
    name: "Snippets",
    url: "/snippets",
  },
  {
    name: "Tags",
    url: "/tags",
  },
  {
    name: "Categorias",
    url: "/categorias",
  },
  {
    name: "Coleções",
    url: "/colecoes",
  },
  
];

export default allTypesContent;

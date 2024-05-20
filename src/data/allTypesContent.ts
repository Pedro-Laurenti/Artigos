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
    name: "Posts",
    url: "/posts",
  },
  {
    name: "Séries",
    url: "/series",
  },
  
];

export default allTypesContent;

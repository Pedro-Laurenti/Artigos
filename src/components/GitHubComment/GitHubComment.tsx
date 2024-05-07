import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export default function GitHubComment() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Definir o tema como "noborder_dark" se o tema atual for "dark"
  const adjustedTheme = theme === 'dark' ? 'dark_protanopia' : theme;

  return (
    <Giscus
      id="comments"
      repo="pedro-laurenti/comments-tlk"
      repoId={`${process.env.NEXT_PUBLIC_GITHUB_COMMENT_REPO_ID}`}
      category="Comments"
      categoryId={process.env.GITHUB_COMMENT_CATEGORY_ID}
      mapping="pathname"
      strict='0'
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={adjustedTheme}
      lang="pt"
      loading="lazy"
      term="Bem vindo(a) à Artigos TLK"
    />
  );
}
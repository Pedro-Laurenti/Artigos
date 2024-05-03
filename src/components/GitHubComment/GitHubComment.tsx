import Giscus from '@giscus/react';
export default function GitHubComment() {

  
    return (
      <Giscus
        id="comments"
        repo="Pedro-Laurenti/Artigos"
        repoId={`${process.env.NEXT_PUBLIC_GITHUB_COMMENT_REPO_ID}`}
        category="Comentários "
        categoryId={process.env.NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY_ID}
        mapping="url"
        term="Bem vindo(a) à Artigos TLK"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="pt-BR"
        loading="lazy"
      />
     
    );
  }
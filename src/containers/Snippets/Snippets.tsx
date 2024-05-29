"use client";
import { useEffect, useState } from "react";
import { SnippetCard } from "@/components";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

interface SnippetsProps {
  isArchive: boolean;
  snippets: any[];
  noOfSnippet: number;
}

const Snippets: React.FC<SnippetsProps> = ({
  isArchive,
  snippets,
  noOfSnippet,
}) => {
  const articlesPerPage = noOfSnippet || 9;

  const [currentItems, setCurrentItems] = useState(snippets || []);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + articlesPerPage;
    setCurrentItems(snippets.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(snippets.length / articlesPerPage));
  }, [itemOffset, articlesPerPage, snippets]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * articlesPerPage) % snippets.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-wrap">
        {currentItems.length > 0
          ? currentItems.map((each: any, i: number) => (
              <SnippetCard
                snippet={each}
                key={i + each.slug.current}
                path={`/posts/${each.slug.current}`}
              />
            ))
          : null}
      </div>

      <br />

      {!isArchive && snippets.length > articlesPerPage && (
        <div className="flex flex-col justify-center">
          <ReactPaginate
            breakLabel="..."
            nextLabel={<AiFillCaretRight />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel={<AiFillCaretLeft />}
            containerClassName="pagination"
            activeClassName="active"
          />
        </div>
      )}

      {isArchive && (
        <div className="w-full flex items-center">
          <Link
            href={"/posts"}
            className="w-auto h-auto text-sm py-3 px-10 text-center dark:bg-slate-800 bg-appBlue-100 rounded-full mx-auto text-white font-bold hover:!text-white dark:hover:!text-slate-400 transition-all transform hover:scale-105"
          >
            Todos os Posts
          </Link>
        </div>
      )}
    </>
  );
};

export default Snippets;
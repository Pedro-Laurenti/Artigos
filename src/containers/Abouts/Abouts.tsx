"use client";
import { useEffect, useState } from "react";
import { AboutCard } from "@/components";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

interface AboutsProps {
  isArchive: boolean;
  abouts: any;
  noOfAbout: number;
}

const Abouts: React.FC<AboutsProps> = ({
  isArchive,
  abouts,
  noOfAbout,
}) => {
  const articlesPerPage = noOfAbout || 9;

  // const [articles, setArticles] = useState([]);

  const [currentItems, setCurrentItems] = useState(abouts || []);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + articlesPerPage;
    setCurrentItems(abouts?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(abouts?.length / articlesPerPage));
  }, [itemOffset, articlesPerPage, abouts]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * articlesPerPage) % abouts?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-wrap">
        {currentItems?.length
          ? (currentItems as any)
              .slice(0, articlesPerPage )
              .map((each: any, i: number) => (
                <AboutCard
                  about={each}
                  key={i + each._id}
                  path={`/sobre/${each.slug.current}`}
                />
              ))
          : null}
      </div>

      <br />

      {!isArchive && abouts?.length > articlesPerPage  && (
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
            href={"/abouts"}
            className="w-auto h-auto text-sm py-3 px-10 text-center dark:bg-slate-800 bg-appBlue-100 rounded-full mx-auto text-white font-bold hover:!text-white dark:hover:!text-slate-400 transition-all transform hover:scale-105"
          >
            Todos os Abouts
          </Link>
        </div>
      )}
    </>
  );
};

export default Abouts;


  {/* {SORTED_SNIPPETS_BY_DATE.length
        ? SORTED_SNIPPETS_BY_DATE.map((each, i) => (
            <AboutCard key={i} about={each} />
          ))
        : null}

      {isArchive &&
      SORTED_SNIPPETS_BY_DATE.length > articlesPerPage  ? (
        <div className="w-full flex items-center">
          <Link
            href="/pages/blog"
            className="w-auto h-auto text-sm py-3 px-10 text-center dark:bg-slate-800 bg-appRed-100 rounded-full mx-auto text-white font-bold hover:!text-white dark:hover:!text-slate-400 transition-all transform hover:scale-105"
          >
            View All Abouts
          </Link>
        </div>
      ) : null} */}
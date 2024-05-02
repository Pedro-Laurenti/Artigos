"use client";
import { useEffect, useState } from "react";
import { AboutCard } from "@/components";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

interface AboutProps {
  isArchive: boolean;
  about: any;
  noOfAbout: number;
}

const About : React.FC<AboutProps> = ({
  isArchive,
  about,
  noOfAbout,
}) => {
  const articlesPerPage = noOfAbout || 9;

  // const [articles, setArticles] = useState([]);

  const [currentItems, setCurrentItems] = useState(about || []);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + articlesPerPage;
    setCurrentItems(about?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(about?.length / articlesPerPage));
  }, [itemOffset, articlesPerPage, about]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * articlesPerPage) % about?.length;
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

      {!isArchive && about?.length > articlesPerPage  && (
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
            href={"/about"}
            className="w-auto h-auto text-sm py-3 px-10 text-center dark:bg-slate-800 bg-appBlue-100 dark:bg-appBlue-50 rounded-full mx-auto text-white font-bold hover:!text-white dark:hover:!text-slate-400 transition-all transform hover:scale-105"
          >
            Todas as páginas
          </Link>
        </div>
      )}
    </>
  );
};

export default About;
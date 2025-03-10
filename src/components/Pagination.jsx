import React from "react";
import { useContext } from "react";
import { MovieAppContext } from "../contexts/MovieAppContext";

const Pagination = () => {
  const { page, setPage } = useContext(MovieAppContext);

  return (
    <div className="fixed w-[95%] text-white text-3xl z-10 bottom-5 flex items-center justify-between rounded-full">
      <button
        className={`page-btn ${page === 1 ? "opacity-0" : "opacity-100"}`}
        onClick={
          page === 1
            ? setPage(1)
            : () => {
                setPage(page - 1);
              }
        }
      >
        {"<"}
      </button>
      <span className="pt-2 px-4 text-center text-red-600 bg-black rounded-full font-display">
        {page}
      </span>
      <button
        className="page-btn"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;

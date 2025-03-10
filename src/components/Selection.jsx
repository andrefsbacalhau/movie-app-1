import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { useContext } from "react";
import { MovieAppContext } from "../contexts/MovieAppContext";

const Selection = ({ type, option }) => {
  const [loading, setLoading] = useState(false);

  const { page, list, getResults } = useContext(MovieAppContext);

  useEffect(() => {
    getResults();
  }, [option, page]);

  return (
    <div className="flex justify-center items-center pt-23 lg:pt-20">
      <div className="flex flex-wrap">
        <div className="flex flex-wrap items-center justify-center text-white">
          {list?.map((movie, index) => (
            <Card movie={movie} key={index} />
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default Selection;

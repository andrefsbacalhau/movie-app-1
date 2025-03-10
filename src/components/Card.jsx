import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import noPoster from "../assets/no_poster.jpg";

const Card = ({ movie }) => {
  const [itemPage, setItemPage] = useState(false);

  const {
    title,
    overview,
    poster_path,
    original_language,
    release_date,
    vote_average,
    vote_count,
  } = movie;

  return (
    <div className="w-[300px] h-[500px] relative m-3 rounded-xl brightness-90 hover:brightness-110 transition-all duration-300 overflow-hidden shadow-2xl">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        className="w-full h-full absolute object-cover rounded-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer -z-10"
        onClick={() => setItemPage(!itemPage)}
      />

      {/* -------Card BG / Movie img-------- */}

      {itemPage && (
        <div
          className="flex z-100 w-full h-full absolute flex-col gap-2 p-5 rounded-xl cursor-pointer opacity-0 hover:opacity-90 hover:bg-black/95 transition-all duration-500"
          onClick={() => setItemPage(!itemPage)}
        >
          {/* ----Title---- */}
          <h1 className="text-lg font-semibold text-yellow-500 text-center">
            {title}
          </h1>
          {/* ----Description---- */}
          <p className="font-bold text-sm">
            Overview: <span className="block font-thin">{overview}</span>
          </p>

          {/* ----Language---- */}
          <p className="font-bold text-sm">
            Original language:{" "}
            <span className="block font-thin uppercase">
              {original_language}
            </span>
          </p>

          {/* ----Rating---- */}
          <p className="font-bold flex items-center gap-1 text-sm">
            Rating: {vote_average}/10 <FaStar className="text-yellow-500" />
          </p>

          {/* ----Votes---- */}
          <span className="-mt-2 text-sm">({vote_count} votes)</span>

          {/* ----Release Date---- */}
          <span className="text-sm">Released: {release_date}</span>
          <div className="w-full flex justify-center mt-2 rounded-2xl border border-transparent bg-black p-2 hover:border hover:border-red-600 transition-all duration-600">
            <Link to="" className="text-center ">
              Watch movie!
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

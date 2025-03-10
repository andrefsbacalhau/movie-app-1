import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowUp, IoIosCloseCircleOutline } from "react-icons/io";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MovieAppContext } from "../contexts/MovieAppContext";
import debounce from "lodash.debounce";

const Navbar = () => {
  // ----Menu States----
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moviesMenu, setMoviesMenu] = useState(false);
  const [mobileMoviesMenu, setMobileMoviesMenu] = useState(false);
  const [mobileTvShowsMenu, setMobileTvShowsMenu] = useState(false);
  const [tvShowsMenu, setTvShowsMenu] = useState(false);

  // ----Params States----
  const {
    type,
    option,
    handleTypeMovie,
    handleTypeTvShow,
    handleOption,
    searchTerm,
    setSearchTerm,
    handleSearchTerm,
    getResults,
  } = useContext(MovieAppContext);

  // ----Debounced on Input
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchTerm("");
      getResults();
    } else {
      handleSearchTerm();
    }
  }, [searchTerm]);

  const updateSearchTerm = (e) => setSearchTerm(e.target.value);

  const debouncedOnchange = debounce(updateSearchTerm, 1100);

  return (
    <nav className="fixed z-50 inline-flex flex-col lg:flex-row justify-center w-full text-white">
      {/* -----------------------------------------------------------------------------TABLET & DESKTOP MENU------------------------------------------------------------------------------------------- */}

      {/* ------------------------------------------------MENU BAR---------------------------------------------------------------------------- */}
      <div className="hidden w-full h-full lg:flex items-center justify-between py-5 px-10 backdrop-blur-xl bg-black/70">
        {/* LOGO */}
        <Link to="/" className="logo-title">
          ANDREFSB <span className="logo-span">MovieS</span>
        </Link>

        {/* NAVITEMS */}
        <div className="flex flex-col gap-10 lg:flex-row items-center lg:gap-5">
          <div className="flex justify-evenly space-x-15 pr-10">
            {/* MOVIES and SUB MENU(MOVIES) */}
            <div>
              <h1
                className={`nav-item ${
                  moviesMenu ? "text-red-600" : "text-white"
                }`}
                onClick={() => {
                  setMoviesMenu(!moviesMenu),
                    setTvShowsMenu(false),
                    handleTypeMovie();
                }}
              >
                Movies
              </h1>
              {/* SUB MENU FROM MOVIES */}

              <div
                className={`sub-menu ${
                  moviesMenu
                    ? "-bottom-67 right-115"
                    : "-bottom-67 -right-100 opacity-0 "
                } `}
              >
                <Link
                  to="/movies"
                  className="menu-link"
                  onClick={() => {
                    setMoviesMenu(false), handleOption("now_playing");
                  }}
                >
                  Now Playing
                </Link>
                <Link
                  to="/popular_movies"
                  className="menu-link"
                  onClick={() => {
                    setMoviesMenu(false), handleOption("popular");
                  }}
                >
                  Popular
                </Link>
                <Link
                  to="/top_rated_movies"
                  className="menu-link"
                  onClick={() => {
                    setMoviesMenu(false), handleOption("top_rated");
                  }}
                >
                  Top Rated
                </Link>
                <Link
                  to="/upcoming_movies"
                  className="menu-link"
                  onClick={() => {
                    setMoviesMenu(false), handleOption("upcoming");
                  }}
                >
                  Upcoming
                </Link>
              </div>
            </div>
            {/* END OF MOVIES MENU */}

            {/* TV SHOWS and SUB MENU(TV SHOWS) */}
            <div>
              <h1
                className={`nav-item ${
                  tvShowsMenu ? "text-red-600" : "text-white"
                }`}
                onClick={() => {
                  setTvShowsMenu(!tvShowsMenu),
                    setMoviesMenu(false),
                    handleTypeTvShow();
                }}
              >
                TV Shows
              </h1>

              {/* SUB MENU FROM TV SHOWS */}
              <div
                className={`sub-menu ${
                  tvShowsMenu
                    ? "-bottom-67 right-70"
                    : "-bottom-67 -right-100 opacity-0"
                } `}
              >
                <Link
                  to="/airing_today_tvs"
                  className="menu-link"
                  onClick={() => {
                    setTvShowsMenu(false), handleOption("airing_today");
                  }}
                >
                  Airing Today
                </Link>
                <Link
                  to="/on_the_air_tvs"
                  className="menu-link"
                  onClick={() => {
                    setTvShowsMenu(false), handleOption("on_the_air");
                  }}
                >
                  On The Air
                </Link>
                <Link
                  to="/popular_tvs"
                  className="menu-link"
                  onClick={() => {
                    setTvShowsMenu(false), handleOption("popular");
                  }}
                >
                  Popular
                </Link>
                <Link
                  to="/top_rated_tvs"
                  className="menu-link"
                  onClick={() => {
                    setTvShowsMenu(false), handleOption("top_rated");
                  }}
                >
                  Top Rated
                </Link>
              </div>
            </div>
            {/* END OF TVSHOWS MENU */}
          </div>

          {/* SEARCHBOX */}
          <input
            type="text"
            aria-label={searchTerm}
            className="search-input"
            placeholder="Search by name"
            onChange={debouncedOnchange}
          />
        </div>
        {/* END OF NAVITEMS  SECTION*/}
      </div>

      {/*-----------------------------------------------------------------------------MOBILE MENU--------------------------------------------------------------------------------------------------- */}

      <div className="lg:hidden w-full flex items-center justify-between p-6 backdrop-blur-xl bg-black/70 ">
        {/* NAVITEMS */}
        <Link to="/" className="logo-title">
          ANDREFSB <span className="logo-span">MovieS</span>
        </Link>
        <div className="flex items-center gap-5 ">
          {mobileMenuOpen ? (
            <RiCloseFill
              className="mobile-navitems"
              size={40}
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen),
                  setMobileMoviesMenu(false),
                  setMobileTvShowsMenu(false);
              }}
            />
          ) : (
            <RiMenu3Fill
              className="mobile-navitems"
              size={32}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          )}
        </div>
      </div>
      {/* END OF MOBILE MENU */}

      {/* MOBILE MENU OPEN WHEN TRUE */}

      <div
        className={`lg:hidden w-full -z-2 absolute flex flex-col items-center py-10 space-y-15 backdrop-blur-xl bg-black/70 rounded-bl-xl rounded-br-xl transition-all duration-600 ${
          mobileMenuOpen ? "-bottom-93 " : "bottom-95 "
        }`}
      >
        <h1
          className={`nav-item flex ${
            mobileMoviesMenu ? "text-red-600" : "text-white"
          }`}
          onClick={() => {
            setMobileMoviesMenu(!mobileMoviesMenu),
              setMobileTvShowsMenu(false),
              handleTypeMovie();
          }}
        >
          Movies{" "}
          {mobileMoviesMenu && (
            <IoIosCloseCircleOutline className="text-white pl-2" size={32} />
          )}
        </h1>

        <div
          className={`sub-menu-mobile ${
            mobileMoviesMenu
              ? "-bottom-20 right-10 opacity-100 z-100"
              : "-bottom-120 right-10 opacity-0"
          } `}
        >
          <Link
            to="/movies"
            className="menu-link"
            onClick={() => {
              setMobileMoviesMenu(false),
                setMobileMenuOpen(false),
                handleOption("now_playing");
            }}
          >
            Now Playing
          </Link>
          <Link
            to="/popular_movies"
            className="menu-link"
            onClick={() => {
              setMobileMoviesMenu(false),
                setMobileMenuOpen(false),
                handleOption("popular");
            }}
          >
            Popular
          </Link>
          <Link
            to="/top_rated_movies"
            className="menu-link"
            onClick={() => {
              setMobileMoviesMenu(false),
                setMobileMenuOpen(false),
                handleOption("top_rated");
            }}
          >
            Top Rated
          </Link>
          <Link
            to="/upcoming_movies"
            className="menu-link"
            onClick={() => {
              setMobileMoviesMenu(false),
                setMobileMenuOpen(false),
                handleOption("upcoming");
            }}
          >
            Upcoming
          </Link>
        </div>

        <h1
          className={`nav-item flex ${
            mobileTvShowsMenu ? "text-red-600" : "text-white"
          }`}
          onClick={() => {
            setMobileTvShowsMenu(!mobileTvShowsMenu),
              setMobileMoviesMenu(false),
              handleTypeTvShow();
          }}
        >
          TV Shows{" "}
          {mobileTvShowsMenu && (
            <IoIosCloseCircleOutline className="text-white pl-2" size={32} />
          )}
        </h1>

        <div
          className={`sub-menu-mobile ${
            mobileTvShowsMenu
              ? "-bottom-40 right-10 z-100"
              : "-bottom-120 right-10 opacity-0"
          } `}
        >
          <Link
            to="/airing_today_tvs"
            className="menu-link"
            onClick={() => {
              setMobileTvShowsMenu(false),
                setMobileMenuOpen(false),
                handleOption("airing_today");
            }}
          >
            Airing Today
          </Link>
          <Link
            to="/on_the_air_tvs"
            className="menu-link"
            onClick={() => {
              setMobileTvShowsMenu(false),
                setMobileMenuOpen(false),
                handleOption("on_the_air");
            }}
          >
            On The Air
          </Link>
          <Link
            to="/popular_tvs"
            className="menu-link"
            onClick={() => {
              setMobileTvShowsMenu(false),
                setMobileMenuOpen(false),
                handleOption("popular");
            }}
          >
            Popular
          </Link>
          <Link
            to="/top_rated_tvs"
            className="menu-link"
            onClick={() => {
              setMobileTvShowsMenu(false),
                setMobileMenuOpen(false),
                handleOption("top_rated");
            }}
          >
            Top Rated
          </Link>
        </div>

        {/* SEARCHBOX */}
        <div className="flex flex-col items-center gap-7">
          <input
            type="text"
            className="search-input"
            placeholder="Search by name"
            size={30}
            onChange={debouncedOnchange}
          />
          <IoIosArrowUp
            className="mobile-navitems hover:text-red-600 transition-all duration 600 cursor-pointer"
            size={32}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
        {/* END OF NAVITEMS SECTION */}
      </div>
    </nav>
  );
};

export default Navbar;

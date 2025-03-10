import { createContext, useState } from "react";

export const MovieAppContext = createContext();

export const MovieAppProvider = ({ children }) => {
  const [type, setType] = useState("movie");
  const [option, setOption] = useState("now_playing");
  const [page, setPage] = useState(1);
  const [listStore, setListStore] = useState([]);
  const [list, setList] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const handleTypeMovie = () => {
    setType("movie");
  };

  const handleTypeTvShow = () => {
    setType("tv");
  };

  const handleOption = (optionSelected) => {
    setOption(optionSelected);
    setSearchTerm("");
    setPage(1);
  };

  //   -----Getting from API------
  const getResults = async () => {
    const url = `https://api.themoviedb.org/3/${type}/${option}?language=en-US&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGZhMDRhYmY3MTIzYzUyZjg4Yzk0MTMxOGNmNDdhNiIsIm5iZiI6MTczMzg0ODQ4OS45MzYsInN1YiI6IjY3NTg2ZGE5MzFmOWQxYzhmMjM3MmJhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZAKpnpyURV6tzc4denpypx9SiXPTbNjyGyn5NJLcJwE`,
      },
    };

    await fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          console.log(result.error);
          return false;
        }

        setListStore([...listStore, result.results]);
        setList(result?.results);
        console.log("Fetched from API");
        window.scrollTo({ top: 0, behaviour: "smooth" });
      });
  };

  //   -----Getting from API through SearchTerm-----
  const handleSearchTerm = async () => {
    const url = `https://api.themoviedb.org/3/search/${type}?query=${searchTerm}&include_adult=false&language=en-US&page=${page}}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGZhMDRhYmY3MTIzYzUyZjg4Yzk0MTMxOGNmNDdhNiIsIm5iZiI6MTczMzg0ODQ4OS45MzYsInN1YiI6IjY3NTg2ZGE5MzFmOWQxYzhmMjM3MmJhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZAKpnpyURV6tzc4denpypx9SiXPTbNjyGyn5NJLcJwE`,
      },
    };

    await fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          console.log(result.error);
          return false;
        }
        setList(result.results);
        window.scrollTo({ top: 0, behaviour: "smooth" });
      });
  };

  return (
    <MovieAppContext.Provider
      value={{
        type,
        option,
        handleTypeMovie,
        handleTypeTvShow,
        handleOption,
        page,
        setPage,
        searchTerm,
        setSearchTerm,
        handleSearchTerm,
        getResults,
        list,
      }}
    >
      {children}
    </MovieAppContext.Provider>
  );
};

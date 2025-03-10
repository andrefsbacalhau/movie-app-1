import React from "react";
import Navbar from "./components/Navbar";
import smokeBg from "./assets/smoke_bg.mp4";
import theatreBg from "./assets/theatre.mp4";
import { Route, Routes } from "react-router-dom";
import Selection from "./components/Selection";
import { useContext } from "react";
import { MovieAppContext } from "./contexts/MovieAppContext";

const App = () => {
  const { type, option } = useContext(MovieAppContext);

  return (
    // -----App BG-----
    <div className="w-full h-screen">
      {/* <img src={bgImg} alt="" className="w-full h-full -z-10 fixed" /> */}
      <video
        src={smokeBg}
        className="w-full h-full object-cover -z-10 fixed brightness-50"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* -----App Navbar----- */}
      <Navbar />

      <Routes>
        {/* -----Movie Routes----- */}
        <Route path="/" element={<Selection type={type} option={option} />} />
        <Route
          path="/movies"
          element={<Selection type={type} option={option} />}
        />

        <Route
          path="/top_rated_movies"
          element={<Selection type={type} option={option} />}
        />
        <Route
          path="/popular_movies"
          element={<Selection type={type} option={option} />}
        />
        <Route
          path="/upcoming_movies"
          element={<Selection type={type} option={option} />}
        />

        {/* -----TV Show Routes----- */}
        <Route
          path="/airing_today_tvs"
          element={<Selection type={"tv"} option={"airing_today"} />}
        />
        <Route
          path="/on_the_air_tvs"
          element={<Selection type={"tv"} option={"on_the_air"} />}
        />
        <Route
          path="/popular_tvs"
          element={<Selection type={"tv"} option={"popular"} />}
        />
        <Route
          path="/top_rated_tvs"
          element={<Selection type={"tv"} option={"top_rated"} />}
        />
      </Routes>
    </div>
  );
};

export default App;

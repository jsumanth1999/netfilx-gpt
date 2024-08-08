import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import client from "../utils/openai";
import { options } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSearchSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const gptSearchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async (e) => {
    e.preventDefault();
    const gptQuery =
      "Act as a movie recommondation system and suggest movies from the query" +
      gptSearchText.current.value +
      ".Only give 5 names of movies, comma separated like example result given ahead. Example Results: Sholey, dhuniya lejayenge, don";
    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black m-4 grid grid-cols-12">
        <input
          ref={gptSearchText}
          className="col-span-9 px-5 py-1 md:p-4 mx-3 my-6 md:m-4"
          type="text"
          placeholder={lang[language].searchPlaceholder}
        />
        <button
          className="col-span-3 my-6 md:m-4 py-2 md:py-2 mx-1 md:mx-4 bg-red-700 text-white"
          onClick={handleGptSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

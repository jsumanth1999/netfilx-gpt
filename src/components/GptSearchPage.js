import { BG_IMAGE } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen md:h-auto object-cover" src={BG_IMAGE} alt="bg-logo" />
      </div>
      <div className="pt-[30%] md:p-0">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </>
  );
};

export default GptSearchPage;

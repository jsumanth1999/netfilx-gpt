import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {

    const language = useSelector(store => store.config.lang);

    return(
        <div className="pt-[10%] flex justify-center">
           <form className="w-1/2 bg-black grid grid-cols-12">
                    <input className="col-span-9 p-4 m-4" type="text" placeholder={lang[language].searchPlaceholder} />
                    <button className="col-span-3 m-4 bg-red-700 text-white">{lang[language].search}</button>
           </form>
        </div>
    ) 
};


export default GptSearchBar;

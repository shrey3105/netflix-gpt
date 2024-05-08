import { useSelector } from "react-redux";
import { LANGUAGE_TRANSLATED_TEXT } from "../utils/languages/languageConstants";

const GPTSearchBar = () => {
  const lang = useSelector((store) => store.gpt.language);

  return (
    <div className="pt-[10%] z-10">
      <form className="w-1/2 mx-auto flex p-6">
        <input
          className="py-2 px-4 flex-1 rounded-lg border-none outline-none"
          type="text"
          placeholder={LANGUAGE_TRANSLATED_TEXT[lang].inputPlaceholder}
        ></input>
        <button className="text-white font-semibold px-4 py-2 ml-4 bg-red-600 rounded-lg">
          {LANGUAGE_TRANSLATED_TEXT[lang].btnText}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

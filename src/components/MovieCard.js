import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, name }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-2">
      <img alt={name} src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const getMoive = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMoive();
  });

  return (
    <div>
      <div>
        <img src={movie.background_image} alt={movie.title}></img>
      </div>
      <div>
        <div>
          <img src={movie.medium_cover_image} alt={movie.title}></img>
        </div>
        <div>
          <h1>{movie.title}</h1>
          <div>
            <p>Rating: {movie.rating}</p>
            <p>Runtime: {movie.runtime}</p>
            <p>Release Year: {movie.year}</p>
            <p>Download: {movie.download_count}</p>
          </div>
        </div>
      </div>
      <div>
        <p>{movie.description_full}</p>
      </div>
    </div>
  );
}

export default Detail;

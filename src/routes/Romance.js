import { useEffect, useState } from "react";
import Movie from "../Movie";
import Header from "../components/header";
import styled from "styled-components";

const GenreDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 20px;
  padding-top: 70px;
  background-color: black;
  padding-left: 20px;
`;

function Romance() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  });
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&genre=romance"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "100vh",
          }}
        ></div>
      ) : (
        <div>
          <Header />
          <GenreDiv>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </GenreDiv>
        </div>
      )}
    </div>
  );
}
export default Romance;

import { useState, useEffect } from "react";
import Movie from "../Movie";
import styled from "styled-components";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  const HomeGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    row-gap: 100px;
    padding-top: 100px;
    width: 100%;
    height: 500vh;
    background-color: rgba(255, 230, 255, 0.5);
  `;

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <HomeGrid>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              genres={movie.genres}
            />
          ))}
        </HomeGrid>
      )}
    </div>
  );
}
export default Home;

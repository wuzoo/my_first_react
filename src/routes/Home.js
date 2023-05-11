import { useState, useEffect } from "react";
import HomeMovie from "../HomeMovie";
import styled, { keyframes } from "styled-components";
import Header from "../components/header";
import font from "../css/font.module.css";

const slide = keyframes`
  0%{
    transform: rotateY(0);
  }
  100%{
    transform: rotateY(1turn);
  }
`;
const Loadingani = keyframes`
  0%{
    text-shadow: 0px 0px 10px gray;
  }
  50%{
    transform: scale(0.7);
    text-shadow: 0px 30px 100px rgba(255, 255, 255, 1);
  }
  90%{
    transform: scale(0.7);
  }
  100%{
    transform: scale(1);
  }
`;
const HomeDiv = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;
const HomeList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 30%;
  left: 0;
  width: 100vw;
  perspective: 1500px;
  box-sizing: border-box;
`;
const Slide = styled.div`
  position: absolute;
  height: 500px;
  transform: translateX(-40%);
  width: 260px;
  animation: ${slide} 35s linear infinite;
  left: 40%;
  top: 10%;
  transform-style: preserve-3d;
  box-sizing: border-box;
`;
const LoadingDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const P = styled.p`
  color: white;
  font-size: 200px;
  animation: ${Loadingani} 3s ease-out;
`;
const Copy = styled.p`
  position: fixed;
  bottom: 20px;
  color: white;
  left: 47%;
`;

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=like_count"
      )
    ).json();
    setMovies(json.data.movies);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingDiv>
          <P className={font.logo}>JETFLEX</P>
        </LoadingDiv>
      ) : (
        <HomeDiv>
          <Header />
          <HomeList>
            <Slide>
              {movies.map((movie, index) => (
                <HomeMovie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  genres={movie.genres}
                  idx={index}
                />
              ))}
            </Slide>
          </HomeList>
          <Copy>&copy;&nbsp;JETFLEX</Copy>
        </HomeDiv>
      )}
    </>
  );
}
export default Home;

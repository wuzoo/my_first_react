import PropTypes from "prop-types";
import styled from "styled-components";
import font from "./css/font.module.css";

const A = styled.a`
  text-decoration: none;
  color: white;
`;
const MovieDiv = styled.div`
  position: relative;
  width: 260px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
  &:hover P {
    transform: translateY(0px);
  }
  &:hover {
    transform: scale(1.03);
  }
  box-shadow: 0px 0px 10px 2px rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
`;

const H2box = styled.h2`
  margin: 0px;
  color: white;
  width: 100%;
  height: auto;
  position: absolute;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
  text-align: center;
  padding: 20px 0px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  transform: translateY(-100%);
  ${MovieDiv}:hover & {
    transform: translate(0%);
  }
  transition: all 0.5s ease;
`;

const P = styled.p`
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  margin: 0px;
  padding: 15px 0px;
  color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  transform: translateY(60px);
  transition: all 0.5s ease;
`;

function Movie({ id, coverImg, title, summary, genres, rating }) {
  return (
    <a href={`/movie/${id}`}>
      <MovieDiv>
        <Img src={coverImg} alt=""></Img>
        <H2box className={font.title}>{title}</H2box>
        <P className={font.title}>{rating} / 10.0</P>
      </MovieDiv>
    </a>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;

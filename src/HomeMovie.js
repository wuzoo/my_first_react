import PropTypes from "prop-types";
import styled from "styled-components";
import font from "./css/font.module.css";

const A = styled.a`
  text-decoration: none;
  color: white;
`;

const MovieDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0px 50px;
  backface-visibility: hidden;
  &:nth-child(1) {
    transform: rotateY(0deg) translateZ(-1500px);
  }
  &:nth-child(2) {
    transform: rotateY(18deg) translateZ(-1500px);
  }
  &:nth-child(3) {
    transform: rotateY(36deg) translateZ(-1500px);
  }
  &:nth-child(4) {
    transform: rotateY(54deg) translateZ(-1500px);
  }
  &:nth-child(5) {
    transform: rotateY(72deg) translateZ(-1500px);
  }
  &:nth-child(6) {
    transform: rotateY(90deg) translateZ(-1500px);
  }
  &:nth-child(7) {
    transform: rotateY(108deg) translateZ(-1500px);
  }
  &:nth-child(8) {
    transform: rotateY(126deg) translateZ(-1500px);
  }
  &:nth-child(9) {
    transform: rotateY(144deg) translateZ(-1500px);
  }
  &:nth-child(10) {
    transform: rotateY(162deg) translateZ(-1500px);
  }
  &:nth-child(11) {
    transform: rotateY(180deg) translateZ(-1500px);
  }
  &:nth-child(12) {
    transform: rotateY(198deg) translateZ(-1500px);
  }
  &:nth-child(13) {
    transform: rotateY(216deg) translateZ(-1500px);
  }
  &:nth-child(14) {
    transform: rotateY(234deg) translateZ(-1500px);
  }
  &:nth-child(15) {
    transform: rotateY(252deg) translateZ(-1500px);
  }
  &:nth-child(16) {
    transform: rotateY(270deg) translateZ(-1500px);
  }
  &:nth-child(17) {
    transform: rotateY(288deg) translateZ(-1500px);
  }
  &:nth-child(18) {
    transform: rotateY(306deg) translateZ(-1500px);
  }
  &:nth-child(19) {
    transform: rotateY(324deg) translateZ(-1500px);
  }
  &:nth-child(20) {
    transform: rotateY(342deg) translateZ(-1500px);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 600px;
`;

const H2box = styled.h2`
  margin: 0px;
  color: white;
  width: 100%;
  background-color: black;
  bottom: -50px;
  font-size: 20px;
  text-align: center;
  padding: 20px 0px;
`;

function HomeMovie({ id, coverImg, title, summary, genres, rating, idx }) {
  return (
    <MovieDiv idx={idx}>
      <Img src={coverImg} alt={title}></Img>
      <H2box className={font.title}>
        <A href={`/movie/${id}`}>{title}</A>
      </H2box>
    </MovieDiv>
  );
}
HomeMovie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};

export default HomeMovie;

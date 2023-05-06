import PropTypes from "prop-types";
import styled from "styled-components";

const MoiveDiv = styled.div`
  display: flex;
  width: 60%;
  border-radius: 40px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(100px);
  box-shadow: 0px 0px 50px 20px rgba(0, 0, 0, 0.2);
  position: relative;
`;
const Img = styled.img`
  width: 40%;
  height: 300px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  display: flex;
  justify-content: center;
  box-sizing: content-box;
`;
const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: conter;
  margin-left: 20px;
  margin-top: 20px;
`;
const A = styled.a`
  text-decoration: none;
  color: black;
`;

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <MoiveDiv>
      <Img src={coverImg} alt={title}></Img>
      <Content>
        <h2>
          <A href={`/movie/${id}`}>{title}</A>
        </h2>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </Content>
    </MoiveDiv>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

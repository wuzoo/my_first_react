import styled from "styled-components";
import font from "../css/font.module.css";

const HeaderFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0px;
  z-index: 1;
  display: ${(props) => !props.loading};
`;
const HeaderList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: calc(38%);
  position: absolute;
  left: 35%;
`;
const ListP = styled.p`
  border-right: 1px solid black;
  padding: 10px 10px;
  margin: 0px 25px;
  font-size: 18px;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px 3px rgba(255, 255, 255, 0.3);
  }
  transition: all 0.1s ease-out;
  border-radius: 10px;
`;
const PageLogo = styled.div`
  margin-left: 50px;
  font-size: 30px;
`;
const A = styled.a`
  text-decoration: none;
  color: white;
`;

function Header({ loading }) {
  return (
    <HeaderFlex loading={loading}>
      <PageLogo className={font.logo}>
        <A href={"/"}>JETFLEX</A>
      </PageLogo>
      <HeaderList>
        <ListP className={font.list}>
          <A href={"/movie/romance"}>Romance</A>
        </ListP>
        <ListP className={font.list}>
          <A href={"/movie/thriller"}>Thriller</A>
        </ListP>
        <ListP className={font.list}>
          <A href={"/movie/action"}>Action</A>
        </ListP>
      </HeaderList>
    </HeaderFlex>
  );
}
export default Header;

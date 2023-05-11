import styled from "styled-components";

const LoadingScreen = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Loading() {
  return (
    <LoadingScreen>
      <strong>JETFLEX</strong>
    </LoadingScreen>
  );
}
export default Loading;

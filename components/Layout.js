import Header from "./Header";
import styled from "styled-components";

const BodyDiv = styled.div`
  border: 10px solid yellow;
  background-color: pink;
`;

export default ({ title, children }) => (
  <BodyDiv>
    <h1>{title}</h1>
    <Header />
    <div>{children}</div>
    <footer>
      <a>FOOTER</a>
    </footer>
  </BodyDiv>
);

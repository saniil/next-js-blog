import Link from "next/link";
import Header from "./Header";
import styled from "styled-components";

const StyledHeader = styled(Header)`
  border: 10px solid yellow;
  background-color: pink;
`;

export default ({ title, children }) => (
  <div>
    {" "}
    <StyledHeader />
    <h1>{title}</h1>
    <div>{children}</div>
    <footer>
      <a>FOOTER</a>
    </footer>
  </div>
);

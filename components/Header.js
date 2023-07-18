import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
  background-color: tomato;
  padding: 20px;
  border: 10px solid blue;
`;

export default () => (
  <HeaderDiv>
    <Link href={"/"}>Anasayfa</Link>
    <Link href={"/about"}>About</Link>
  </HeaderDiv>
);

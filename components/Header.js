import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
  background-color: tomato;
  padding: 20px;
`;

export default () => (
  <HeaderDiv>
    LİNKLER:
    <Link href={"/"}>Anasayfa</Link>
    <Link href={"/about"}>About</Link>
  </HeaderDiv>
);

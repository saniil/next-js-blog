import styled from "styled-components";
import Button from "./Button";

const HeaderDiv = styled.div`
  background-color: #000;
  padding: 30px;
  display: flex;
  gap: 20px;
`;

export default () => (
  <HeaderDiv>
    <Button href={"/"}>Ana Sayfa</Button>
    <Button href={"/about"}>Hakkımızda</Button>
    <Button href={"/blog"}>Blog</Button>
  </HeaderDiv>
);

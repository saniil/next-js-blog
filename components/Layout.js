import Header from "./Header";
import styled from "styled-components";

const BodyDiv = styled.div`
  margin: 0px;
  padding: 0px;
`;
const Footer = styled.footer`
  background-color: black;
  position: fixed;
  bottom: 0;
  width: 100vw;
`;

const FooterInner = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;
const Content = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;
const ContentInner = styled.div`
  padding: 20px;
`;
const H1 = styled.h1`
  padding: 20px;
`;

export default ({ title, children }) => (
  <BodyDiv>
    <Header />
    <Content>
      <H1>{title}</H1>
      <ContentInner>{children}</ContentInner>
    </Content>
    <Footer>
      <FooterInner>
        <p>BULUTİSTAN CLOUD:0850 222 8588</p>
        <p>
          HİZMETLER:Dijital Kampüs, Küçük Çamlıca Mah., Kısıklı Cad., No:56 (7
          No'lu Bina) 34696 Üsküdar / İSTANBUL
        </p>
      </FooterInner>
    </Footer>
  </BodyDiv>
);

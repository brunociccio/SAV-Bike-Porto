import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 1em;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: bold;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #fff;
  margin: 10px auto;
`;

const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const MemberContainer = styled.div`
  display: flex;
  margin: 10px 0;
`;

const MemberImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const MemberText = styled.p`
  font-size: 14px;
  font-weight: 200;
`;

const FinalImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 0.5em;
`;

const FinalImage2 = styled.img`
  width: 100px;
  height: 100px;
  margin: 0.5em;
`;

const FinalImage3 = styled.img`
  width: 100px;
  height: 100px;
  margin: 0.5em;
`;

const Title2 = styled.h2`
  font-size: 70px;
  font-weight: 300;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Title>Integrantes do SAV - Sistema Automatizado de Vistorias</Title>
      <Divider />
      <Subtitle>Bruno Ciccio</Subtitle>
      <MemberContainer>
        <MemberImage src="images/linkedin.png" alt="LinkedIn Image" />
        <MemberText>https://github.com/brunociccio</MemberText>
      </MemberContainer>
      <MemberContainer>
        <MemberImage src="images/github.png" alt="GitHub Image" />
        <MemberText>https://www.linkedin.com/in/bruno-ciccio/</MemberText>
      </MemberContainer>
      <Subtitle>Marina Cucco</Subtitle>
      <MemberContainer>
        <MemberImage src="images/linkedin.png" alt="LinkedIn Image" />
        <MemberText>https://github.com/brunociccio</MemberText>
      </MemberContainer>
      <MemberContainer>
        <MemberImage src="images/github.png" alt="GitHub Image" />
        <MemberText>https://www.linkedin.com/in/bruno-ciccio/</MemberText>
      </MemberContainer>
      <Subtitle>José Duarte</Subtitle>
      <MemberContainer>
        <MemberImage src="images/linkedin.png" alt="LinkedIn Image" />
        <MemberText>https://github.com/brunociccio</MemberText>
      </MemberContainer>
      <MemberContainer>
        <MemberImage src="images/github.png" alt="GitHub Image" />
        <MemberText>https://www.linkedin.com/in/bruno-ciccio/</MemberText>
      </MemberContainer>
      <Subtitle>Isabelle Corsi</Subtitle>
      <MemberContainer>
        <MemberImage src="images/linkedin.png" alt="LinkedIn Image" />
        <MemberText>https://github.com/brunociccio</MemberText>
      </MemberContainer>
      <MemberContainer>
        <MemberImage src="images/github.png" alt="GitHub Image" />
        <MemberText>https://www.linkedin.com/in/bruno-ciccio/</MemberText>
      </MemberContainer>
      <Subtitle>Thalita de Alencar</Subtitle>
      <MemberContainer>
        <MemberImage src="images/linkedin.png" alt="LinkedIn Image" />
        <MemberText>https://github.com/brunociccio</MemberText>
      </MemberContainer>
      <MemberContainer>
        <MemberImage src="images/github.png" alt="GitHub Image" />
        <MemberText>https://www.linkedin.com/in/bruno-ciccio/</MemberText>
      </MemberContainer>
      <Divider />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FinalImage src="images/portofooter.png" alt="Final Image" />
        <FinalImage2 src="images/fiap.png" alt="Final Image" />
        <FinalImage3 src="images/oxigenio.jpg" alt="Final Image" />
      </div>
    </FooterContainer>
  );
};

export default Footer;

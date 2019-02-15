import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../components/PageContainer';
import { CtaLink } from '../components/CtaLink';

const SectionTitle = styled.h1`
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-size: 3.2rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-weight: normal;
  line-height: 1.2;
  text-align: center;
`;

const Description = styled.div`
  font-size: 1.2rem;

  & > p + p {
    margin-top: 0.5em;
  }
`;

const Home = () => {
  return (
    <PageContainer>
      <SectionTitle>
        Hur väl känner du till Sjöfartstidningens rubriker?
      </SectionTitle>
      <CtaLink to="/questions">
        Testa här{' '}
        <span role="img" aria-label="">
          👉
        </span>
      </CtaLink>
      <Description>
        <p>Du kommer få se fem olika rubriker där ett ord är borttaget.</p>
        <p>
          Din uppgift är att räkna ut vilket ord som saknas med hjälp av tre
          svarsalternativ.
        </p>
        <p>Svarar du alla rätt vinner du en bok!</p>
      </Description>
    </PageContainer>
  );
};

export default Home;

import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { PageContainer } from '../components/PageContainer';

const SectionTitle = styled.h1`
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-size: 3.2rem;
  font-family: 'PublicoHeadline-Roman', serif;
  font-weight: normal;
  line-height: 1.2;
  text-align: center;
`;

const CtaLink = styled(Link)`
  position: relative;
  display: inline-block;
  margin-bottom: 3rem;
  border-radius: 4px;
  padding: 1rem 3rem;
  text-decoration: none;
  color: #ffffff;
  background-color: #000000;

  &::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border: 1px solid #ffffff;
    border-radius: 2px;
  }
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

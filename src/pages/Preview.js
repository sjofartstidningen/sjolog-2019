import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../components/PageContainer';

const Title = styled.h1`
  max-width: 55rem;
  margin-top: 10rem;
  margin-bottom: 5rem;
  font-family: 'Playfair Display', sans-serif;
  font-weight: 700;
  font-size: 4rem;
  line-height: 1.1;
  text-align: center;
`;

const Info = styled.p`
  margin-bottom: 3rem;
  font-size: 3rem;
  font-family: 'Playfair Display', sans-serif;
  font-weight: 400;
`;

const InfoLink = styled.span`
  color: #0599e4;
  font-style: italic;
`;

const PhoneWrapper = styled.div`
  --width: 15vw;

  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: var(--width);
  height: calc(var(--width) * 1.7);
  border: 1.5vw solid #999999;
  border-bottom-width: 3vw;
  border-radius: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: calc(100% + 0.75vw);
    left: calc(50% - 0.75vw);
    width: 1.5vw;
    height: 1.5vw;
    border-radius: 100%;
    background-color: #ffffff;
  }
`;

const PhoneText = styled.p`
  font-family: 'Playfair Display', sans-serif;
  font-weight: 400;
  font-size: 1.3vw;
`;

const AverageScore = styled.p`
  font-family: 'Playfair Display', sans-serif;
  font-weight: 700;
  font-size: 5vw;
  color: #0599e4;
`;

const Preview = () => {
  const averageScore = 3;

  return (
    <PageContainer>
      <Title>Testa hur väl du känner till Sjöfartstidningens rubriker</Title>

      <Info>
        Gå in på <InfoLink>sjolog.sjofartstidningen.se</InfoLink>
      </Info>

      <PhoneWrapper>
        <PhoneText>Genomsnittspoäng</PhoneText>
        <AverageScore>{averageScore.toFixed(1)}</AverageScore>
      </PhoneWrapper>
    </PageContainer>
  );
};

export default Preview;

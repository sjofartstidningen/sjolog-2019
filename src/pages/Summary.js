import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../components/PageContainer.js';
import { CtaLink } from '../components/CtaLink';
import { Results } from '../components/Result';

const determineResult = ({ questions, answers }) => {
  return questions.map((question, index) => {
    const answer = answers[index];
    const res = {
      correct: answer === question.correctAnswer,
      answer,
      ...question,
    };

    return res;
  });
};

const greetings = [
  'Du kanske ska läsa lite flitigare...',
  'Det viktigaste är inte att vinna!',
  'Bra kämpat ändå!',
  'Mer än hälften rätt!',
  'Nästan alla rätt, bra jobbat!',
  'Är du anställd på tidningen eller?!',
];

const Emoji = styled.span`
  font-size: 10rem;
`;

const Greeting = styled.h2`
  margin-bottom: 2rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.2;
  text-align: center;
`;

const ScoreContainer = styled.div`
  margin-bottom: 2rem;
  & p:first-child {
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-size: 2rem;
    text-align: center;
  }
`;

const Score = styled.p`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 5rem;
  text-align: center;
  color: #0599e4;
`;

const Summary = props => {
  const { questions, answers } = props.location.state;
  if (!answers || !questions) props.location.navigate('/');

  const result = determineResult({ questions, answers });
  const score = result.filter(r => r.correct).length;
  const greeting = greetings[score];

  return (
    <PageContainer>
      <Emoji>
        <span role="img" aria-label="">
          👏
        </span>
      </Emoji>

      <Greeting>{greeting}</Greeting>

      <ScoreContainer>
        <p>Din poäng</p>
        <Score>
          {score}/{result.length}
        </Score>
      </ScoreContainer>

      <div>
        <CtaLink to="/questions">Testa igen</CtaLink>
      </div>

      <Results result={result} />
    </PageContainer>
  );
};

export default Summary;

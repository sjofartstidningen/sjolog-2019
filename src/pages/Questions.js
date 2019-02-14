import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { navigate } from '@reach/router';
import { useSteps } from '../hooks/use-steps';
import { shuffle } from '../utils';
import { questions } from '../questions.json';
import { PageContainer } from '../components/PageContainer';

const IndicatorsContainer = styled.ul`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin-top: calc(3rem - 1.6rem);
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #a3a3a3;
  padding-bottom: 1.5rem;
`;

const Indicator = styled.li`
  position: relative;
  display: inline-block;
  color: #000000;
  transition: color 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.5em;
    height: 1.5em;
    border: 1px solid #ffffff;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    transition: border 0.2s ease-in-out;
  }

  ${p =>
    p.state === 'future' &&
    css`
      color: #a3a3a3;
    `}

  ${p =>
    p.state === 'current' &&
    css`
      color: #0599e4;

      &::before {
        border-color: currentColor;
      }
    `}
`;

const QuestionContainer = styled.div``;

const Questions = () => {
  const {
    index,
    current,
    currentAnswer,
    answers,
    next,
    previous,
    setAnswer,
    hasNext,
    hasPrevious,
    hasAnsweredCurrent,
  } = useSteps(questions);

  const alternatives = useMemo(() => shuffle(current.alternatives), [current]);

  const [beginning, end] = current.phrase.split('{gap}');

  return (
    <PageContainer>
      <IndicatorsContainer>
        {questions.map((q, idx) => (
          <Indicator
            key={q.id}
            state={idx === index ? 'current' : idx < index ? 'past' : 'future'}
          >
            {idx + 1}
          </Indicator>
        ))}
      </IndicatorsContainer>

      <div key={current.id}>
        <div>
          <h2>
            {beginning}
            <span className="gap">{currentAnswer || '__'}</span>
            {end}
          </h2>
        </div>
        <div>
          <p>Vilket ord saknas?</p>
          <ul>
            {alternatives.map(alt => (
              <li key={alt}>
                <button onClick={() => setAnswer(alt)}>{alt}</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button onClick={previous} disabled={!hasPrevious}>
            Tillbaka
          </button>
          <button
            onClick={() => {
              if (hasNext) next();
              else navigate('/summary', { state: { answers, questions } });
            }}
            disabled={!hasAnsweredCurrent}
          >
            {hasNext ? 'Nästa' : 'Klart'}
          </button>
        </div>
      </div>
    </PageContainer>
  );
};

export default Questions;

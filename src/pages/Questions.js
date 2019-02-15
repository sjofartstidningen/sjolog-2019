import React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';
import { useSteps } from '../hooks/use-steps';
import { questions } from '../questions.json';
import { PageContainer } from '../components/PageContainer';
import { StepIndicators } from '../components/StepIndicators';
import { QuestionPhrase } from '../components/QuestionPhrase';
import { Alternatives } from '../components/Alternatives';

const QuestionContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  flex: 1;
  width: 100%;
  overflow: scroll;
`;

const NavigationContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const NavButton = styled.button`
  position: relative;
  width: 6rem;
  height: 6rem;
  margin: 1rem;
  border-radius: 100%;
  color: #ffffff;
  background-color: #0599e4;
  font-size: 2rem;
  line-height: 1;
  transition: opacity 0.2s ease-in-out;

  &[disabled] {
    opacity: 0.5;
  }

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Questions = () => {
  const {
    index,
    current,
    currentAnswer,
    answers,
    next,
    previous,
    goToIndex,
    setAnswer,
    hasNext,
    hasPrevious,
    hasAnsweredCurrent,
  } = useSteps(questions);

  return (
    <PageContainer>
      <StepIndicators
        totalSteps={questions.length}
        currentIndex={index}
        goToIndex={goToIndex}
      />

      <QuestionContainer key={current.id}>
        <QuestionPhrase
          phrase={current.phrase}
          alternatives={current.alternatives}
          currentAnswer={currentAnswer}
        />

        <Alternatives
          alternatives={current.alternatives}
          setAnswer={setAnswer}
          currentAnswer={currentAnswer}
        />

        <NavigationContainer>
          <NavButton onClick={previous} disabled={!hasPrevious}>
            <span role="img" aria-label="Tillbaka">
              👈
            </span>
          </NavButton>
          <NavButton
            onClick={() => {
              if (hasNext) next();
              else navigate('/summary', { state: { answers, questions } });
            }}
            disabled={!hasAnsweredCurrent}
          >
            <span role="img" aria-label="Nästa">
              👉
            </span>
          </NavButton>
        </NavigationContainer>
      </QuestionContainer>
    </PageContainer>
  );
};

export default Questions;

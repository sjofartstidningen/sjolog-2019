import { useState } from 'react';
import { update, clamp, length } from 'ramda';

const tap = value => {
  console.log(value);
  return value;
};

const useSteps = (steps, keySuffix = '') => {
  const totalSteps = length(steps);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(() => {
    return Array.from({ length: totalSteps }, () => null);
  });

  const current = steps[index];
  const currentAnswer = answers[index];
  const hasNext = index < totalSteps - 1;
  const hasPrevious = index > 0;
  const hasAnsweredCurrent = currentAnswer != null;

  const next = () => {
    setIndex(clamp(0, totalSteps - 1, index + 1));
  };

  const previous = () => {
    setIndex(clamp(0, totalSteps - 1, index - 1));
  };

  const setAnswer = answer => {
    console.log(answer);
    setAnswers(answers => tap(update(index, answer, answers)));
  };

  console.log({
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
  });

  return {
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
  };
};

export { useSteps };

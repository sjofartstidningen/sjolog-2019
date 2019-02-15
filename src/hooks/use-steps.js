import { useState } from 'react';
import { update, clamp, length } from 'ramda';

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

  const goToIndex = idx => {
    setIndex(clamp(0, totalSteps - 1, idx));
  };

  const next = () => goToIndex(index + 1);
  const previous = () => goToIndex(index - 1);

  const setAnswer = answer => {
    setAnswers(answers => update(index, answer, answers));
  };

  return {
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
  };
};

export { useSteps };

import React from 'react';
import styled from 'styled-components';
import { useCheckbox } from '@fransvilhelm/hooks';

const Container = styled.div`
  width: 100%;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 1rem;
`;

const List = styled.ol`
  counter-reset: result-list;
  padding-left: 1em;
`;

const ListItem = styled.li`
  position: relative;
  counter-increment: result-list;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 2.4rem;
  margin-bottom: 1rem;

  &::before {
    content: counter(result-list);
    position: absolute;
    left: -1.5em;
    top: 0.6em;
    font-size: 1.4rem;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
  }
`;

const ListLink = styled.a`
  color: #999999;
  text-decoration: none;
`;

const CorrectAnswer = styled.span`
  color: #0599e4;
`;

const IncorrectAnswer = styled.del`
  color: #ed1c24;
`;

const Answer = ({ correct, phrase, answer, correctAnswer, url }) => {
  const [beginning, end] = phrase.split('{gap}');

  let gap;
  if (correct) {
    gap = <CorrectAnswer>{answer}</CorrectAnswer>;
  } else {
    gap = (
      <CorrectAnswer>
        <IncorrectAnswer>{answer}</IncorrectAnswer> {correctAnswer}
      </CorrectAnswer>
    );
  }

  return (
    <ListItem>
      <ListLink href={url}>
        <span>{beginning}</span>
        {gap}
        <span>{end}</span>
      </ListLink>
    </ListItem>
  );
};

const Results = ({ result }) => {
  const showResults = useCheckbox(false);

  return (
    <Container>
      <CheckboxContainer>
        <input type="checkbox" id="show-results" {...showResults} />
        <label htmlFor="show-results">Visa rätta svar</label>
      </CheckboxContainer>

      <List hidden={!showResults.checked}>
        {result.map(res => (
          <Answer key={res.id} {...res} />
        ))}
      </List>
    </Container>
  );
};

export { Results };

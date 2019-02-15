import React from 'react';
import styled, { css } from 'styled-components';

const Phrase = styled.h2`
  width: 100%;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 1.2;
  text-align: center;
`;

const PhraseSection = styled.span`
  display: block;
`;

const PhraseAnswer = styled(PhraseSection)`
  position: relative;
  min-height: calc(1em + 2rem);
  border-radius: 4px;
  padding: 1rem;
  color: #0599e4;
  background-color: #e3e3e3;
  word-wrap: break-word;

  ${p =>
    p.empty &&
    css`
      &::after {
        content: '🤔';
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `};
`;

const QuestionPhrase = ({ phrase, alternatives, currentAnswer }) => {
  const [beginning, end] = phrase.split('{gap}');
  return (
    <Phrase>
      <PhraseSection>{beginning}</PhraseSection>
      <PhraseAnswer empty={currentAnswer == null}>
        {[...alternatives, null].map((alt, idx) => (
          <span key={idx} hidden={alt !== currentAnswer}>
            {alt}
          </span>
        ))}
      </PhraseAnswer>
      <PhraseSection>{end}</PhraseSection>
    </Phrase>
  );
};

export { QuestionPhrase };

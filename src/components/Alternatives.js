import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  margin-top: auto;
`;

const Description = styled.p`
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
`;

const InputContainer = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const Radio = styled.input`
  /* visually hidden */
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
`;

const Label = styled.label`
  display: block;
  border: 2px solid black;
  border-radius: 4px;
  padding: 1rem;
  font-size: 1.8rem;
  text-align: center;

  ${p =>
    p.isSelected &&
    css`
      border-color: #0599e4;
      color: #0599e4;
    `};
`;

const Alternatives = ({ alternatives, setAnswer, currentAnswer }) => {
  return (
    <Container>
      <Description>Vilket ord saknas?</Description>
      <div>
        {alternatives.map(alt => (
          <InputContainer key={alt}>
            <Radio
              type="radio"
              name="alternative"
              id={`alternative-${alt}`}
              value={alt}
              checked={alt === currentAnswer}
              onChange={() => setAnswer(alt)}
            />
            <Label
              htmlFor={`alternative-${alt}`}
              isSelected={alt === currentAnswer}
            >
              {alt}
            </Label>
          </InputContainer>
        ))}
      </div>
    </Container>
  );
};

export { Alternatives };

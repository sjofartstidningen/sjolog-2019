import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as Logo } from '../logo.svg';

const pulse = keyframes`
  from {
    opacity: 0.2;
  }

  50% {
    opacity: 1.8;
  }

  to {
    opacity: 0.2;
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 16rem;
  animation-name: ${pulse};
  animation-timing-function: ease-in-out;
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const LogotypeWrapper = styled.div`
  width: 8rem;
`;

const TextWrapper = styled.div`
  font-size: 1.2rem;
`;

const Loader = () => {
  return (
    <Container>
      <LogotypeWrapper>
        <Logo />
      </LogotypeWrapper>
      <TextWrapper>Laddar...</TextWrapper>
    </Container>
  );
};

export { Loader };

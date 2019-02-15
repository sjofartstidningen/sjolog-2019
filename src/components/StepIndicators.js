import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { range } from 'ramda';

const IndicatorsContainer = styled.ul`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin-top: calc(3rem - 1.6rem);
  margin-bottom: 3rem;

  ${({ currentPosition }) =>
    currentPosition &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: ${currentPosition.cy}px;
        left: ${currentPosition.cx}px;
        width: 1.5em;
        height: 1.5em;
        border: 1px solid #0599e4;
        border-radius: 100%;
        transform: translate3d(-50%, -50%, 0);
        transition: left 0.2s ease-in-out;
        will-change: left;
      }
    `};
`;

const Indicator = styled.li`
  position: relative;
  display: inline-block;
  color: #000000;
  transition: color 0.2s ease-in-out;

  ${p =>
    p.state === 'future' &&
    css`
      color: #a3a3a3;
    `}

  ${p =>
    p.state === 'current' &&
    css`
      color: #0599e4;
    `}
`;

const StepIndicators = ({ totalSteps, currentIndex, goToIndex }) => {
  const steps = range(0, totalSteps);
  const [positions, setPositions] = useState([]);

  const rects = useRef([]);
  const wrapperEl = useRef(null);

  const handleRefs = element => rects.current.push(element);
  useEffect(() => {
    const wrapperRect = wrapperEl.current.getBoundingClientRect();
    const getCenter = rect => ({
      cx: rect.x + rect.width / 2 - wrapperRect.x,
      cy: rect.y + rect.height / 2 - wrapperRect.y,
    });

    const positions = rects.current
      .map(e => e.getBoundingClientRect())
      .map(getCenter)
      .sort((a, b) => a.cx - b.cx);
    setPositions(positions);
  }, []);

  return (
    <IndicatorsContainer
      ref={wrapperEl}
      currentPosition={positions[currentIndex]}
    >
      {steps.map((step, index) => (
        <Indicator
          key={step}
          ref={handleRefs}
          onClick={() => index < currentIndex && goToIndex(index)}
          state={
            index === currentIndex
              ? 'current'
              : index < currentIndex
              ? 'past'
              : 'future'
          }
        >
          {step + 1}
        </Indicator>
      ))}
    </IndicatorsContainer>
  );
};

export { StepIndicators };

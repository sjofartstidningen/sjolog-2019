import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { ReactComponent as Logotype } from '../logo.svg';

const HeaderContainer = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 5rem;
  background-color: #f2f2f2;
`;

const LogotypeContainer = styled.div`
  min-width: 2.4rem;
  margin-right: 0.8rem;
`;

const Title = styled.h1`
  font-family: 'PublicoHeadline-Bold', serif;
  font-size: 2rem;
  font-align: center;
`;

const TitleLink = styled(Link)`
  color: currentColor;
  text-decoration: none;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogotypeContainer>
        <Logotype />
      </LogotypeContainer>
      <Title>
        <TitleLink to="/">Sjöfartstidningen @ Sjölog 2019</TitleLink>
      </Title>
    </HeaderContainer>
  );
};

export { Header };

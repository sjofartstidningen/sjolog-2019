import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import { Header } from './components/Header';
import { ErrorBoundry } from './components/ErrorBoundry';

const Home = lazy(() => import('./pages/Home'));
const Questions = lazy(() => import('./pages/Questions'));
const Summary = lazy(() => import('./pages/Summary'));

const Main = styled.main`
  position: relative;
  min-height: calc(100vh - 5rem /* height of header */);
`;

const App = () => {
  return (
    <div>
      <Header />

      <ErrorBoundry>
        <Main>
          <Suspense fallback="Loading">
            <Router>
              <Home path="/" />
              <Questions path="questions" />
              <Summary path="summary" />
            </Router>
          </Suspense>
        </Main>
      </ErrorBoundry>
    </div>
  );
};

export default App;

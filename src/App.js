import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import { Header } from './components/Header';
import { ErrorBoundry } from './components/ErrorBoundry';
import { Loader } from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const Preview = lazy(() => import('./pages/Preview'));
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
          <Suspense fallback={<Loader />} maxDuration={300}>
            <Router>
              <Home path="/" />
              <Preview path="preview" />
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

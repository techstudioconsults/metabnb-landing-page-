import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import { HomePage } from './pages';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import GeneralLoading from './components/general-loading/GeneralLoading';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<GeneralLoading text={`LOADING...`} />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              component={() => (
                <GeneralLoading text="PAGE NOT FOUND" />
              )}
            />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import { HomePage } from './pages';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import GeneralLoading from './components/general-loading/GeneralLoading';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<GeneralLoading text={`LOADING...`} />}>
          <DefaultLayout>
            <Switch>
              <Route path="/" component={HomePage} />
              <Route
                
                component={() => <GeneralLoading text="PAGE NOT FOUND" />}
              />
            </Switch>
          </DefaultLayout>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;

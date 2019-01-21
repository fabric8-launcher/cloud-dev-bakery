import * as React from 'react';
import './App.scss';
import 'regenerator-runtime/runtime';
import StoreContainer from '@/app/redux/containers/StoreContainer';
import AppRouterContainer from '@/app/redux/containers/AppRouterContainer';

const App: React.FunctionComponent = () => (
  <StoreContainer>
    <AppRouterContainer />
  </StoreContainer>
);

export default App;

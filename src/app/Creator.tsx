import * as React from 'react';
import './App.scss';
import 'regenerator-runtime/runtime';
import StoreContainer from '@/app/redux/containers/StoreContainer';
import CreatorWizardContainer from './redux/containers/pages/WizardPageContainer';

const App: React.FunctionComponent = () => (
  <StoreContainer>
    <CreatorWizardContainer />
  </StoreContainer>
);

export default App;

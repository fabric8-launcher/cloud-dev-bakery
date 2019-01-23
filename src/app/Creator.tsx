import * as React from 'react';
import './App.scss';
import 'regenerator-runtime/runtime';
import StoreContainer from '@/app/redux/containers/StoreContainer';
import CreatorWizardContainer from './redux/containers/creator-wizard/CreatorWizardContainer';

const Creator: React.FunctionComponent = () => (
  <StoreContainer>
    <CreatorWizardContainer />
  </StoreContainer>
);

export default Creator;

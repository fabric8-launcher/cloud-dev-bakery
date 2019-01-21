import * as React from 'react';
import MainLayoutContainer from '@/app/redux/containers/MainLayoutContainer';
import CreatorWizardContainer from '@/app/redux/containers/creator-wizard/CreatorWizardContainer';

const WizardPage: React.FunctionComponent = () => {
  return (
    <MainLayoutContainer>
      <div className="container">
        <h1>You are creating a new application</h1>
        <CreatorWizardContainer/>
      </div>
    </MainLayoutContainer>
  );
};

export default WizardPage;

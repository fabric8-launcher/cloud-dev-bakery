import * as React from 'react';
import { connect } from 'react-redux';
import { authenticationAction } from '../../actions/authenticationActions';
import MainLayoutContainer from '@/app/redux/containers/MainLayoutContainer';
import { Button, EmptyState, EmptyStateAction, EmptyStateBody, Title } from '@patternfly/react-core';

interface LoginPageProps {
  login: () => {};
}

const LoginPage: React.FunctionComponent<LoginPageProps> = (props: LoginPageProps) => (
  <MainLayoutContainer>
    <EmptyState>
      <Title size="lg">>Welcome on the Launcher Creator</Title>
      <EmptyStateBody>
        To continue, please log into or register an account for free
        with the Red Hat Developer Program.
      </EmptyStateBody>
      <EmptyStateAction>
        <Button variant="primary" onClick={props.login}>
          Sign in
        </Button>
      </EmptyStateAction>
    </EmptyState>
  </MainLayoutContainer>
);

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(authenticationAction.login()),
});

const LoginPageContainer = connect(
  null,
  mapDispatchToProps,
// @ts-ignore
)(LoginPage);

export default LoginPageContainer;

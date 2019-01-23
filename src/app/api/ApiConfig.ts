import { checkNotNull } from '@/shared/utils/Preconditions';
import { KeycloakConfig } from './authentication/KeycloakAuthenticationApi';


function requireEnv(env: string | undefined, name: string): string {
  const config = (window as any).GLOBAL_CONFIG;
  if (config && config[name]) {
    return config[name];
  }
  return checkNotNull(env, `process.env.${name}`);
}

export const authenticationMode = requireEnv(process.env.REACT_APP_AUTHENTICATION, 'REACT_APP_AUTHENTICATION');
export const isKeycloakMode = authenticationMode === 'keycloak';

export const isMockApi = requireEnv(process.env.REACT_APP_API, 'REACT_APP_API') === 'mock';

export const keycloakConfig: KeycloakConfig | undefined = isKeycloakMode ? {
  clientId: requireEnv(process.env.REACT_APP_KEYCLOAK_CLIENT_ID, 'REACT_APP_KEYCLOAK_CLIENT_ID'),
  realm: requireEnv(process.env.REACT_APP_KEYCLOAK_REALM, 'REACT_APP_KEYCLOAK_REALM'),
  url: requireEnv(process.env.REACT_APP_KEYCLOAK_URL, 'REACT_APP_KEYCLOAK_URL'),
}: undefined;

export const creatorApiUrl =
  checkNotNull(isMockApi ? 'http://mockUrl' : process.env.REACT_APP_CREATOR_API_URL, 'process.env.REACT_APP_CREATOR_API_URL');

export const launcherApiUrl =
  checkNotNull(isMockApi ? 'http://mockUrl' : process.env.REACT_APP_LAUNCHER_API_URL, 'process.env.REACT_APP_LAUNCHER_API_URL');

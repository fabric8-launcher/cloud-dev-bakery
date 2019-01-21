import { isMockApi } from '@/app/api/ApiConfig';
import mockApiDriver from './__mocks__/mockApiDriver';
import { AxiosRequestConfig } from 'axios';
import { createRequestInstance, watchRequests } from 'redux-saga-requests';
import { put, select } from 'redux-saga/effects';
import { authenticationAction } from '../actions/authenticationActions';
import { getToken } from '../reducers/authenticationReducer';
import { createDriver } from 'redux-saga-requests-axios';
import { creatorApiAxios, launcherApiAxios } from '../../api';

const axiosDriver = {
  default: createDriver(creatorApiAxios),
  launcher: createDriver(launcherApiAxios),
};

const driver = isMockApi ? mockApiDriver : axiosDriver;

function* onRequest(request: AxiosRequestConfig) {
  yield put(authenticationAction.refreshToken());
  const token = yield select(getToken);
  request.headers = {
    ...request.headers,
    Authorization: `Bearer ${token}`,
  };
  return request;
}

export default function* fetchSaga() {
  yield createRequestInstance({driver, onRequest});
  yield watchRequests();
}

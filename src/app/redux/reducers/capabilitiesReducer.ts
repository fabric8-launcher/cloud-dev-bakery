import { requestsReducer } from 'redux-saga-requests';
import { AppState } from '../states/index';
import { createSelector } from 'reselect';
import Capability from '../../models/Capability';
import { FetchedData } from '../../models/FetchedData';
import { FetchActions } from '../actions/fetchActions';

// Reducer

export const capabilitiesReducer = requestsReducer({actionType: FetchActions.FETCH_CAPABILITIES, multiple: true});

// Selectors

const getCapabilitiesState = (state: AppState) => state.capabilities;

const getSelectedRuntimeId = (state: AppState, {selectedRuntime}) => selectedRuntime;

export const getCapabilitiesData = createSelector([getCapabilitiesState], (f) => ({
  data: f.data,
  loading: f.pending > 0,
  error: f.error,
} as FetchedData<Capability[]>));

export const getCapabilitiesDataForSelectedRuntime = createSelector([getCapabilitiesData, getSelectedRuntimeId], (c, r) => ({
  data: c.data,
  loading: c.loading,
  error: c.error,
} as FetchedData<Capability[]>));

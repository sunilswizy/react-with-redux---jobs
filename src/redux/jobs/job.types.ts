
export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_ERROR = 'FETCH_JOBS_ERROR';

export const FETCH_JOB_REQUEST = 'FETCH_JOB_REQUEST';
export const FETCH_JOB_SUCCESS = 'FETCH_JOB_SUCCESS';
export const FETCH_JOB_ERROR = 'FETCH_JOB_ERROR';

export const ADD_JOB = 'ADD_JOB'

export interface AddJobAction {
  type: typeof ADD_JOB,
  payload: any
}

export interface FetchJobsRequestAction {
    type: typeof FETCH_JOBS_REQUEST;
  }
  
export interface FetchJobsSuccessAction {
    type: typeof FETCH_JOBS_SUCCESS;
    payload: any; // Replace with the actual payload type
}
  
export interface FetchJobsErrorAction {
  type: typeof FETCH_JOBS_ERROR;
  error: string;
}

export interface fetchJobRequestAction {
  type: typeof FETCH_JOB_REQUEST;
}

export interface fetchJobSuccessAction {
  type: typeof FETCH_JOB_SUCCESS;
  payload: any
}

export interface fetchJobErrorAction {
  type: typeof FETCH_JOB_ERROR;
  error: string
}

export type FetchJobsActions =
  | FetchJobsRequestAction
  | FetchJobsSuccessAction
  | FetchJobsErrorAction;


export type FetchJobAction = fetchJobRequestAction | fetchJobSuccessAction | fetchJobErrorAction;
import { Dispatch } from "redux";
import {
    FETCH_JOBS_ERROR, 
    FETCH_JOBS_REQUEST, 
    FETCH_JOBS_SUCCESS, 
    FetchJobsRequestAction,
    FetchJobsSuccessAction,
    FetchJobsErrorAction,
    FetchJobsActions,
    FETCH_JOB_REQUEST,
    FETCH_JOB_SUCCESS,
    FETCH_JOB_ERROR,
    fetchJobErrorAction,
    fetchJobRequestAction,
    fetchJobSuccessAction,
    FetchJobAction,
    AddJobAction,
    ADD_JOB
} from "./job.types";


export const fetchJobsRequest = (): FetchJobsRequestAction => ({
    type: FETCH_JOBS_REQUEST
});

export const fetchJobsSuccess = (data: any): FetchJobsSuccessAction => ({
    type: FETCH_JOBS_SUCCESS,
    payload: data
});

export const fetchJobsFailure = (error: any): FetchJobsErrorAction => ({
    type: FETCH_JOBS_ERROR,
    error
});

export const fetchJobs = (slice: boolean) => {
    return async (dispatch: Dispatch<FetchJobsActions>) => {
        dispatch(fetchJobsRequest());
        try {
            const response = await fetch(`/api/jobs${slice ? '' : '?_limit=3'}`);
            const data = await response.json();
            dispatch(fetchJobsSuccess(data));
        } catch (error) {
            dispatch(fetchJobsFailure(error));
        }
    };
};

export const fetchJobRequest = (): fetchJobRequestAction => ({
    type: FETCH_JOB_REQUEST
});

export const fetchJobSuccess = (data: any): fetchJobSuccessAction => ({
    type: FETCH_JOB_SUCCESS,
    payload: data
});

export const fetchJobFailure = (error: any): fetchJobErrorAction => ({
    type: FETCH_JOB_ERROR,
    error
});


export const fetchJob = async (id: string) => {
    return async (dispatch: Dispatch<FetchJobAction>) => {
        dispatch(fetchJobRequest())
        try {
            const response = await fetch(`/api/jobs/${id}`);
            const data = await response.json();
            dispatch(fetchJobSuccess(data));
        }
        catch(e) {
            fetchJobFailure(e);
        }
    }
}

export const addJob = (data: any): AddJobAction => ({
    type: ADD_JOB,
    payload: data
});
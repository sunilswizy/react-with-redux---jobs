import { FETCH_JOBS_SUCCESS, FETCH_JOBS_REQUEST, FETCH_JOBS_ERROR, FetchJobsActions, FetchJobAction, FETCH_JOB_REQUEST, FETCH_JOB_SUCCESS, FETCH_JOB_ERROR, ADD_JOB, AddJobAction } from './job.types';

const initialState: any = {
    jobs: [],
    error: '',
    loading: false,
    job: {},
    loadingContent: false
};

const jobReducer = (state = initialState, action: FetchJobsActions | FetchJobAction | AddJobAction) => {
    switch(action.type) {
        case FETCH_JOBS_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_JOBS_SUCCESS: 
            return {
                ...state,
                loading: false,
                jobs: action.payload
            }
        case FETCH_JOBS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case FETCH_JOB_REQUEST: 
            return {
                ...state,
                loadingContent: true
            }
        case FETCH_JOB_SUCCESS:
            return {
                ...state,
                job: action.payload,
                loadingContent: false
            }
        case FETCH_JOB_ERROR: 
            return {
                ...state,
                loadingContent: false,
                error: action.error
            }
        case ADD_JOB:
            state.jobs.push(action.payload)
            return {
                ...state
            }

        default: 
            return state
    }   
};

export default jobReducer;

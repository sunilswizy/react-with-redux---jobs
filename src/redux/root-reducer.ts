import { combineReducers } from "redux";
import jobReducer from "./jobs/job.reducer";

const rootReducer = combineReducers({
    job: jobReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
import { combineReducers } from 'redux';
import RepoReducer from './repositiresReducer';

const rootReducer = combineReducers({
	npmPackages: RepoReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

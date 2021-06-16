import { ActionType } from './../actionTypes/index';

interface SearchRepositoriesAction {
	type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesSuccessAction {
	type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
	payload: string[];
}
interface SearchRepositoriesFailedAction {
	type: ActionType.SEARCH_REPOSITORIES_FAILED;
	payload: string;
}

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesFailedAction;

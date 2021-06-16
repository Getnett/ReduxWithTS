import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from './../actionTypes/index';
import { Action } from './../actions/index';

export const searchNpmPackages = (packageName: string) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.SEARCH_REPOSITORIES,
		});

		try {
			const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
				params: {
					text: packageName,
				},
			});
			console.log('API_DATA', data);
			const npmPackages = data.objects.map((npmPkg: any) => npmPkg.package.name);
			dispatch({ type: ActionType.SEARCH_REPOSITORIES_SUCCESS, payload: npmPackages });
		} catch (error) {
			dispatch({ type: ActionType.SEARCH_REPOSITORIES_FAILED, payload: error.message });
		}
	};
};

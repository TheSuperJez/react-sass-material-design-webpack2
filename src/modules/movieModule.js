import {ajaxCallError, beginAjaxCall} from './ajaxModule';

import initialState from './initialState';
import movieApi from '../api/movie';

const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
const SEARCH_MOVIE_FAIL = 'SEARCH_MOVIE_FAIL';
const RESET_MOVIES = 'RESET_MOVIES';
const RESET_ERRORS = 'RESET_ERRORS';

export default function reducer(state = initialState.get('movieModule'), action) {
	switch (action.type) {
	case SEARCH_MOVIE_SUCCESS: {
		console.log(action);
		return state.set('movieList', action.movieList);
	} 
	case RESET_MOVIES: {
		return state.set('movieList', []);
	}
	case RESET_ERRORS: {
		return state.set('movieErrors', {});
	}
	case SEARCH_MOVIE_FAIL: {
		return state.set('movieErrors', {type: 'search',
										error: action.error});
	}
	default: return state; 
	}
}


export const searchMovie = (query) => {
	return (dispatch) => { 
		dispatch(beginAjaxCall());
		return movieApi.search(query).then(response => {
			dispatch({type: SEARCH_MOVIE_SUCCESS, movieList: response.data});
		}).catch(error => { 
			dispatch({type: SEARCH_MOVIE_FAIL, error});
			dispatch(ajaxCallError(error));
			throw (error); 
		});
	};
};

export const resetMovies = () => {
	return (dispatch) => {
		dispatch({type: RESET_MOVIES});
	};
};

export const resetErrors = () => {
	return (dispatch) => {
		dispatch({type: RESET_ERRORS});
	};
};
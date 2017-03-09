import ajaxModule from './ajaxModule';
import candidateModule from './candidateModule';
import {combineReducers} from 'redux';
import movieModule from './movieModule';
import questionModule from './questionModule';
const rootReducer = combineReducers({
	ajaxModule, 
	questionModule,
	candidateModule,
	movieModule
});

export default rootReducer;

import '../sass/main.scss';

import { Router, hashHistory } from 'react-router';

import {Provider} from 'react-redux';
import React from 'react';
import _ from 'underscore';
import configureStore from './store';
import { render } from 'react-dom';
import routes from './routes';

window._ = _;

const store = configureStore();

render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);

import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route }  from 'react-router';
import { routerMiddleware } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory';
import  logoReducer from './logo/reducer';

import HomeComponent from './logo/containers/HomeComponent';
import SetTaglineComponent from './logo/containers/SetTaglineComponent';
import SetIndustryName from './logo/containers/SetIndustryName';
import LogoInspirationContainer from './logo/containers/LogoInspirationContainer';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);

let store = createStore(
    logoReducer,
    applyMiddleware(
        thunkMiddleware,
        middleware
    )
);

window.store = store;


render(
    <Provider store={store}>
        <Router history={history}>
            <div>
            <Route exact path="/" component={HomeComponent} />
                <Route path="/tagline" component={SetTaglineComponent} />
                <Route path="/industry" component={SetIndustryName} />
                <Route path="/inspiration" component={LogoInspirationContainer} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

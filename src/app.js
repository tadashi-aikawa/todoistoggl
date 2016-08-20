import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import {Provider} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {createStore, applyMiddleware, compose} from "redux";
import promise from "redux-promise";

import {syncHistoryWithStore, routerReducer} from "react-router-redux"
import {Router, browserHistory} from "react-router";

import Routings from "./Routings";

import {combineReducers} from "redux";
import * as reducers from "./reducers";

// ほぼ全ての画面で使用するCSSはここでimport

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const appReducer = combineReducers({
    ...reducers,
    routing: routerReducer
});


const funcs = [applyMiddleware(promise)];
if (process.env.NODE_ENV === 'development') {
    //Needed for React Developer Tools
    window.React = React;
    funcs.push(typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f)
}

const store = createStore(appReducer, compose(...funcs));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={history} routes={Routings}/>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById("root")
)
;

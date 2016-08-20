import * as React from 'react';

import AppContainer from './containers/AppContainer';
import TopContainer from './containers/TopContainer';
import {IndexRoute, Route} from 'react-router';

export default (
    <Route path="/" component={AppContainer}>
        <Route path="*/index.html" component={TopContainer}/>
    </Route>
);

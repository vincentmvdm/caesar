import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import reduxLogger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'sanitize.css/sanitize.css';
import CaesarTheme from './components/CaesarTheme';
import SignIn from './containers/SignIn';
import Groups from './containers/Groups';
import GroupNew from './containers/GroupNew';
import GroupJoin from './containers/GroupJoin';
import Group from './containers/Group';
import './global-styles';

const createStoreWithMiddleware = compose(
    applyMiddleware(promise)// ,
    // applyMiddleware(reduxLogger)
)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <CaesarTheme>
                <Switch>
                    <Route path="/groups/new" component={GroupNew} />
                    <Route path="/groups/join" component={GroupJoin} />
                    <Route path="/groups/:id" component={Group} />
                    <Route path="/groups" component={Groups} />
                    <Route path="/" component={SignIn} />
                </Switch>
            </CaesarTheme>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

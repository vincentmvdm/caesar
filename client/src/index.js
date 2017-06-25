import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css/sanitize.css';
import CaesarTheme from './components/CaesarTheme';
import SignInPage from './containers/SignInPage';
import Groups from './containers/Groups';
import GroupNew from './containers/GroupNew';
import GroupJoin from './containers/GroupJoin';
import Group from './containers/Group';
import './global-styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <CaesarTheme>
            <Switch>
                <Route path="/groups/new" component={GroupNew} />
                <Route path="/groups/join" component={GroupJoin} />
                <Route path="/groups/:id" component={Group} />
                <Route path="/groups" component={Groups} />
                <Route path="/" component={SignInPage} />
            </Switch>
        </CaesarTheme>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();

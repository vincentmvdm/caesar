import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css/sanitize.css';
import CaesarTheme from './components/CaesarTheme';
import SignInPage from './containers/SignInPage';
import Groups from './containers/Groups';
import './global-styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <CaesarTheme>
            <Switch>
                <Route path="/groups" component={Groups} />
                <Route path="/" component={SignInPage} />
            </Switch>
        </CaesarTheme>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();

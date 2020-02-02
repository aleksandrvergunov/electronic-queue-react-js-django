import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import Auth from "./components/auth";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={() => window.localStorage.getItem('token') == null ? <Auth/> : <App/>}/>
            <Route exact path='/auth' component={Auth}/>
        </Switch>
    </Router>,
    document.getElementById('root'));

serviceWorker.unregister();
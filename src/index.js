import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Main from './Dashboard/Main';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={Main}/>
    <Route path="/app" component={App}/>
</Router>, document.getElementById('root'));
registerServiceWorker();
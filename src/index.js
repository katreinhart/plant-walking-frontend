import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/general.css';
import './css/home.css';
import './css/garden.css';
import './css/pastplant.css';
import './css/forms.css';
import './css/history.css';
import './css/welcome.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

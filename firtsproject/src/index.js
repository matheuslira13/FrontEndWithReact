import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import registerServiceWorker from './reportWebVitals';

ReactDom.render(<App/>, document.getElementById('root'));
registerServiceWorker()
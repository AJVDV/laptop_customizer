import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FEATURE from './Features/FEATURES';

ReactDOM.render(<App features={FEATURE} />, document.getElementById('root'));

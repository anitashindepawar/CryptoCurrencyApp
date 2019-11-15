import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {store} from "./testData/mockStore"

it('renders without crashing', () => {
  const Grid = document.createElement('Grid');
  ReactDOM.render( <Provider store= {store}>
    <App/>
</Provider>, Grid);
  ReactDOM.unmountComponentAtNode(Grid);
});

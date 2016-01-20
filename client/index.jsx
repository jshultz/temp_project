import React                from 'react';
import { render }           from 'react-dom';
import { Router, browserHistory }           from 'react-router';
import { Provider }         from 'react-redux';
import routes               from 'routes';
import immutifyState        from 'lib/immutifyState';

import configureStore from '../shared/store/configureStore'

const initialState = immutifyState(window.__INITIAL_STATE__);

const store = configureStore({ initialState, browserHistory })

render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('react-view')
);

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import React                from 'react';
import { render }           from 'react-dom';
import { Router, browserHistory }           from 'react-router';
import { Provider }         from 'react-redux';
import routes               from 'routes';
import immutifyState        from 'lib/immutifyState';

import configureStore from '../shared/store/configureStore'

const initialState = immutifyState(window.__INITIAL_STATE__);

const store = configureStore({ initialState, browserHistory })

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
                 changePositionKey='ctrl-q'>
        <LogMonitor theme='tomorrow' />
    </DockMonitor>
);

render(
  <Provider store={store}>
    <div>
        <Router children={routes} history={browserHistory} />
        <DevTools/>
    </div>
  </Provider>,
  document.getElementById('react-view')
);

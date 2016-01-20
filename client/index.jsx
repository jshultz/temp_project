import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import React                from 'react';
import { render }           from 'react-dom';
import { Router, Route, IndexRoute, browserHistory }           from 'react-router';
import { Provider }         from 'react-redux';
import immutifyState        from 'lib/immutifyState';

import configureStore from '../shared/store/configureStore'

import App                     from '../shared/containers/App/App';
import Home                    from '../shared/components/Home';

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
        <Router history={browserHistory} >
            <Route name="app" component={App} path="/">
                <IndexRoute component={Home}/>
            </Route>
        </Router>
        <DevTools/>
    </div>
  </Provider>,
  document.getElementById('react-view')
);

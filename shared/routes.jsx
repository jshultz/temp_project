import React                   from 'react';
import { Route, IndexRoute }   from 'react-router';
import App                     from 'containers/App/App';
import Home                    from 'components/Home';

export default (
  <Route name="app" component={App} path="/">
      <IndexRoute component={Home}/>
  </Route>
);

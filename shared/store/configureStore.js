import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import DevTools from '../containers/DevTools';
import promiseMiddleware    from 'lib/promiseMiddleware';
import immutifyState        from 'lib/immutifyState';

//const reducer = combineReducers(rootReducer);
//const store   = applyMiddleware(promiseMiddleware)(createStore)(reducer, initialState);

function withDevTools (middleware) {
    const devTools = window.devToolsExtension
        ? window.devToolsExtension()
        : require('../containers/DevTools').default.instrument()
    return compose(middleware, devTools)
}

const finalCreateStore = compose(
    // Middleware you want to use in development:
    applyMiddleware(promiseMiddleware),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
)(createStore);

export default function configureStore({ initialState = {}, history }) {
    const store = finalCreateStore(rootReducer, initialState);

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
        );
    }

    return store;
}
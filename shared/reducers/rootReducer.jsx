import { combineReducers } from 'redux';
import TodoReducer from './TodoReducer';
const { syncHistory, routeReducer } = require('redux-simple-router');

export default combineReducers({
    todos: TodoReducer,
    routing: routeReducer
});

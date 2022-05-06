import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import addReducer from './books/books';
import checkReducer from './categories/categories';

const rootReducer = combineReducers({
  Books: addReducer,
  categories: checkReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

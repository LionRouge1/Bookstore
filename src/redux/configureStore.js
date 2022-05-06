import { createStore, combineReducers } from 'redux';
import addReducer from './books/books';
import checkReducer from './categories/categories';

const rootReducer = combineReducers({
  books: addReducer,
  categories: checkReducer,
});

const store = createStore(rootReducer);

export default store;

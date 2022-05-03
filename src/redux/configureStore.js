import Redux from 'redux';
import addReducer from './books/books';
import checkReducer from './categories/categories';

const rootReducer = Redux.combineReducers({
  books: addReducer,
  categories: checkReducer,
})

const store = Redux.createStore(rootReducer);
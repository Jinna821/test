import { createStore } from 'redux';
import rootReducer from './reducers'; // We will create reducers next

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // For using Redux DevTools
);

export default store;
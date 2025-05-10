import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/Index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/Index';
import axios from 'axios';

axios.defaults.withCredentials = false;
axios.defaults.baseURL = 'http://192.168.1.34:5161';

// Création du middleware
const sagaMiddleware = createSagaMiddleware();

// Création du store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

// Exécution du rootSaga
sagaMiddleware.run(rootSaga);

// Export du store
export default store;



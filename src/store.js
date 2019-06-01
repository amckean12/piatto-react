import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root-reducer.js';

//Persistance
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['userReducer']
}

const reducers = persistReducer(persistConfig, rootReducer)


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

const store = createStore(
  reducers,
  undefined,
  composeEnhancer(applyMiddleware(thunk))
)

const persistor = persistStore(store);

export { store, persistor }

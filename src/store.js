//Needed for creation of Redux store
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root-reducer.js';

//Needed for persistance
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

//Persistance configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ['userReducer']
}

//persistReducer takes in a configuration argument and a reducer
const reducers = persistReducer(persistConfig, rootReducer)

//Needed for chrome devtools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Store Creation
const store = createStore(
  reducers,
  undefined,
  composeEnhancer(applyMiddleware(thunk))
)

//Store Persistor
const persistor = persistStore(store);

export { store, persistor }

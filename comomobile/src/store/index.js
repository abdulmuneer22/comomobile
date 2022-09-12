/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const middlewares = [thunk];

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = applyMiddleware(...middlewares)(createStore)(
  persistedReducer,
  __DEV__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export default function configureStore() {
  return { store, persistor };
}

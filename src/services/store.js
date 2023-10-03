import { compose, createStore, applyMiddleware } from "redux";


// для хранилища более актуальна функция создания configureStore()
const store = createStore(rootReducer, enhancer);
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers();

export const store = createStore(reducer);

//

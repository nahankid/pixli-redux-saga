import { createStore, applyMiddleware, compose } from "redux";
import reduxSagaMiddleware from "redux-saga";

import reducers from "./reducer";
import saga from "./saga";

const middleware = [reduxSagaMiddleware()];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);

const store = createStore(reducers, enhancer);

middleware[0].run(saga);

export default store;

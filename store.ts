import { Action, applyMiddleware, createStore, Store } from "npm:redux";
import createSagaMiddleware, { SagaMiddleware } from "npm:redux-saga";

export const ACTION = { type: "RUN" };
const defaultInitialState = {
  counter: 0,
};
function defaultReducer(state = defaultInitialState, action: Action) {
  console.log("received action", action);
  if (action.type === ACTION.type) {
    state = { counter: state.counter + 1 };
  }
  return state;
}

export function init(reducer = defaultReducer) {
  const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
  const store: Store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
  );

  return {
    addSaga: (saga: SagaMiddleware) => sagaMiddleware.run(saga),
    store,
  };
}

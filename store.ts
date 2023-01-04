import { createStore, applyMiddleware } from 'npm:redux'
import createSagaMiddleware from 'npm:redux-saga'
import { takeEvery } from 'npm:redux-saga/effects'

const ACTION = { type: 'RUN' }
const initialState = {
    counter: 0
}
function reducer(state = initialState, action) {
    console.log('received action', action);
    if (action.type === ACTION.type) {
        state = { counter: state.counter + 1 }
    }
    return state
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
function* handler() {
    console.log('run saga')
}
function* mainSaga() {
    yield takeEvery(ACTION.type, handler);
}
sagaMiddleware.run(mainSaga);

store.dispatch(ACTION)



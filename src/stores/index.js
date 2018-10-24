import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer'

export default function (initialState) {
        const sagaMiddleware = createSagaMiddleware();
        const store = createStore(rootReducer,
              initialState,
              window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
              applyMiddleware(sagaMiddleware)

        );
        return {
                ...store,
                runSaga: sagaMiddleware.run
        }
};

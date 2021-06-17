import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash.throttle';
import { loadState, saveState } from '../helpers/helpers';
import rootReducer from './rootReducer';

const persistedState = loadState(); //Load state from Local Storage

const middlewares = [
    applyMiddleware()
];

const composedEnhancers = composeWithDevTools(
    ...middlewares
);

const store = createStore(
    rootReducer,
    persistedState,
    composedEnhancers
);

store.subscribe(throttle(() => { //Save state to Local Storage
    saveState({
        data: store.getState().data
    });
}, 1000));

// REDUX TYPES
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
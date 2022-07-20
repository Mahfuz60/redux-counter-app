import { createStore } from 'redux';
import { counterReducer } from './component/redux/counterReducer';

export const store = createStore(counterReducer);

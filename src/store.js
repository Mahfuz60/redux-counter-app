import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { todosReducer } from './Todo-App/redux/todosReducer/TodosReducer';
// import { counterReducer } from './component/redux/counterReducer';

//counter app
// export const store = createStore(counterReducer);

//Todos App

export const store = createStore(todosReducer, applyMiddleware(thunk));

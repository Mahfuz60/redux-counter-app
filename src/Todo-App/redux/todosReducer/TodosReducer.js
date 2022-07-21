import { GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from '../constans/Constant';

//state
const initailTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const todosReducer = (state = initailTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error:null,
      };
    case GET_TODOS_SUCCESS:
      return {
        isLoading: false,
        todos: action.payload,
        error:null,
      };
    case GET_TODOS_FAILURE:
      return {
        isLoading: false,
        todos:[],
        error: action.payload,
      };

    default:
      return state;
  }
};

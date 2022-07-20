import { DECREMENT, INCREMENT, RESET } from './constant';

//state
const initailCounterState = {
  count: 0,
};

export const counterReducer = (state = initailCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

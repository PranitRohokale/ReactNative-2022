import {INCREASE_COUNT, DECREASE_COUNT} from '../action/action.types';

const initialState = {
  countValue: 0,
};

export default (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        countValue: 1 + state.countValue,
      };
    case DECREASE_COUNT:
      return {
        countValue: -1 + state.countValue,
      };

    default:
      return state;
  }
};

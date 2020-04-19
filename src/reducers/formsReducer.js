import { SUBMIT_FORM } from '../actions/types';

export default (state = { data: {} }, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
        ...state,
        data: { ...action.payload.data },
      };
    default:
      return state;
  }
};

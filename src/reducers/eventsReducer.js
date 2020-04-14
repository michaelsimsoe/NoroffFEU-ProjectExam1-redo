import { GET_HISTORICAL_EVENTS, GET_LAUNCH_EVENTS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_HISTORICAL_EVENTS:
      return { ...state, historical: [...action.payload.historicalEvents] };
    case GET_LAUNCH_EVENTS:
      return { ...state, launch: [...action.payload.launchEvents] };
    default:
      return state;
  }
};

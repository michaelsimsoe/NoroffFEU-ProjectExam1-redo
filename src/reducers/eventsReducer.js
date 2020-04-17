import {
  GET_HISTORICAL_EVENTS,
  GET_LAUNCH_EVENTS,
  GET_EVENT_ERROR,
  GET_SINGLE_HISTORICAL,
  GET_SINGLE_LAUNCH,
} from '../actions/types';

export default (
  state = { eventsLoaded: false, eventsError: false },
  action
) => {
  switch (action.type) {
    case GET_HISTORICAL_EVENTS:
      return {
        ...state,
        historical: [...action.payload.historicalEvents],
        eventsLoaded: true,
      };
    case GET_LAUNCH_EVENTS:
      return {
        ...state,
        launch: [...action.payload.launchEvents],
        eventsLoaded: true,
      };
    case GET_SINGLE_HISTORICAL:
      return {
        ...state,
        singleEvent: action.payload.singleEvent,
        eventsLoaded: true,
      };
    case GET_SINGLE_LAUNCH:
      return {
        ...state,
        singleEvent: action.payload.singleEvent,
        eventsLoaded: true,
      };
    case GET_EVENT_ERROR:
      return { ...state, eventsLoaded: false, eventsError: true };
    default:
      return state;
  }
};

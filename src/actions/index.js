import { GET_HISTORICAL_EVENTS, GET_LAUNCH_EVENTS } from './types';

export const gethHistoricalEvents = () => {
  return (dispatch) => {
    fetch('https://api.spacexdata.com/v3/history')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw Error(res.statusText);
      })
      .then(data =>
        dispatch({
          type: GET_HISTORICAL_EVENTS,
          payload: {
            historicalEvents: [...data]
          }
        })
      )
      .catch(error => {
        console.log(error);
      })   
  }
}


export const getLauncEvents = () => {
  return (dispatch) => {
    fetch('https://api.spacexdata.com/v3/launches')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw Error(res.statusText);
      })
      .then(data =>
        dispatch({
          type: GET_LAUNCH_EVENTS,
          payload: {
            launchEvents: [...data]
          }
        })
      )
      .catch(error => {
        console.log(error);
      })   
  }
}
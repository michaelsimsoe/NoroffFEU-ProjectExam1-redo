import {
  GET_HISTORICAL_EVENTS,
  GET_LAUNCH_EVENTS,
  GET_EVENT_ERROR,
  GET_SINGLE_HISTORICAL,
  GET_SINGLE_LAUNCH,
} from './types';

export const gethHistoricalEvents = () => {
  return (dispatch) => {
    fetch('https://api.spacexdata.com/v3/history')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error(res.statusText);
      })
      .then((data) =>
        dispatch({
          type: GET_HISTORICAL_EVENTS,
          payload: {
            historicalEvents: [...data],
          },
        })
      )
      .catch((error) => {
        dispatch({
          type: GET_EVENT_ERROR,
        });
      });
  };
};

export const getLauncEvents = () => {
  return (dispatch) => {
    fetch('https://api.spacexdata.com/v3/launches')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error('Unable to fetch from Api');
      })
      .then((data) =>
        dispatch({
          type: GET_LAUNCH_EVENTS,
          payload: {
            launchEvents: [...data],
          },
        })
      )
      .catch((error) => {
        dispatch({
          type: GET_EVENT_ERROR,
        });
      });
  };
};

export const getSingleLaunchEvent = (flight_number) => {
  return (dispatch) => {
    let launchObj = {};
    fetch('https://api.spacexdata.com/v3/launches/' + flight_number)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error('Unable to fetch from Api');
      })
      .then((data) => {
        var launchDate = new Date(data.launch_date_utc);
        launchObj = {
          title: data.mission_name,
          details: data.details || 'No relevant information',
          date: launchDate.toDateString(),
          links: data.links,
          isLaunch: true,
          launch: {
            mission_name: data.mission_name,
            details: data.details,
            date: launchDate.toDateString(),
            rocket: data.rocket.rocket_name,
            launch_site: data.launch_site.site_name_long,
            launch_links: data.links,
            launch_success: data.launch_success,
            isLaunch: true,
          },
        };
        return launchObj;
      })
      .then((data) =>
        dispatch({
          type: GET_SINGLE_LAUNCH,
          payload: {
            singleEvent: data,
          },
        })
      )
      .catch((error) => {
        dispatch({
          type: GET_EVENT_ERROR,
        });
      });
  };
};

export const getSingleHistoricalEvent = (id) => {
  return (dispatch) => {
    const historyObj = {};
    fetch('https://api.spacexdata.com/v3/history/' + id)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw Error('Unable to fetch from Api');
      })
      .then((res) => res.json())
      .then((data) => {
        var date = new Date(data.event_date_utc);
        historyObj.title = data.title;
        historyObj.details = data.details;
        historyObj.date = date.toDateString();
        historyObj.links = data.links;
        if (data.flight_number && data.flight_number !== undefined) {
          fetch('https://api.spacexdata.com/v3/launches/' + data.flight_number)
            .then((res) => {
              if (res.ok) {
                return res;
              }
              throw Error('Unable to fetch from Api');
            })
            .then((res) => res.json())
            .then((data) => {
              var launchDate = new Date(data.launch_date_utc);
              historyObj.isLaunch = true;
              historyObj.launch = {
                mission_name: data.mission_name,
                details: data.details,
                date: launchDate.toDateString(),
                rocket: data.rocket.rocket_name,
                launch_site: data.launch_site.site_name_long,
                launch_links: data.links,
                launch_success: data.launch_success,
                isLaunch: true,
              };
              return historyObj;
            })
            .then((data) => {
              dispatch({
                type: GET_SINGLE_HISTORICAL,
                payload: {
                  singleEvent: data,
                },
              });
            })
            .catch((error) => {
              dispatch({
                type: GET_EVENT_ERROR,
              });
            });
        } else {
          return historyObj;
        }
      })
      .then((data) =>
        dispatch({
          type: GET_SINGLE_HISTORICAL,
          payload: {
            singleEvent: data,
          },
        })
      )
      .catch((error) => {
        dispatch({
          type: GET_EVENT_ERROR,
        });
      });
  };
};

export const makeHistoricalEvent = (event) => {
  var date = new Date(event.event_date_utc);
  var dateTime =
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  var dateString = date.toDateString();
  var title = event.title;
  var isLaunch = event.flight_number != null ? true : false;
  var isHistoryEvent = true;
  var text = event.details;
  var id = event.id;
  return {
    date,
    dateTime,
    dateString,
    title,
    isLaunch,
    isHistoryEvent,
    text,
    id,
    eventType: 'history',
  };
};

export const makeLaunchElement = (launch) => {
  var details = launch.details;
  var date = new Date(launch.launch_date_utc);
  var dateTime =
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  var dateString = date.toDateString();
  var title = launch.mission_name;
  var isLaunch = true;
  var isHistoryEvent = false;
  var text = details;
  var id = launch.flight_number;
  return {
    date,
    dateTime,
    dateString,
    title,
    isLaunch,
    isHistoryEvent,
    text,
    id,
    eventType: 'launches',
  };
};

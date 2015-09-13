var moment = require('moment-timezone');

module.exports = function(d,tz) {
  if (!d)
    d = new Date();
  else if (!String(d).trim().match(/\d{4,4}-\d{2}-\d{2}/)) {
    d = moment(new Date(d)).format('YYYY-MM-DD');
  }
  return moment.tz(d || new Date(),tz || 'America/New_York');
};
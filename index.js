var moment = require('moment-timezone');

module.exports = function(d,tz) {
  if (!String(d).trim().match(/\d{4,4}-\d{1,2}-\d{1,2}/))
    d = moment(new Date(d)).format('YYYY-MM-DD');
  return moment.tz(d,tz || 'America/New_York');
};
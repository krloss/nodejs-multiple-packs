var moment = require('moment');

exports.dateTime = function() {
	return moment().format();
};


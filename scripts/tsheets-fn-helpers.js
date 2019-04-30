//////////////////////////////////////////////////////////////////////////
//                                                                      //
//  This file is generated with tsheets/gen/gen-tsheets-helpers.js      //
//                                                                      //
//  Wed Nov 07 2018 15:55:53 GMT-0300 (-03)                             //
//////////////////////////////////////////////////////////////////////////

var convertFilter = function (filters) {
    var params = "";
    if (typeof filters == "object") {
        var t = 0;
        for (var i in filters) {
            params += (t > 0 ? '&' : '') + i + '=' + filters[i];
            t++;
        }
    }
    return params ? "?" + params : "";
};


endpoint.currentUser = {};

endpoint.currentUser.get = function() {
	var URL = "/current_user";
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};


endpoint.customfields = {};

endpoint.customfields.get = function(filters) {
	var URL = "/customfields";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};


endpoint.customfielditems = {};

endpoint.customfielditems.get = function(filters) {
	var URL = "/customfielditems";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};

endpoint.customfielditems.post = function(params) {
	var URL = "/customfielditems";
	sys.logs.debug('[Tsheets] POST from: ' + URL);
	return endpoint.post(URL, params);
};

endpoint.customfielditems.put = function(params) {
	var URL = "/customfielditems";
	sys.logs.debug('[Tsheets] PUT from: ' + URL);
	return endpoint.put(URL, params);
};


endpoint.effectiveSettings = {};

endpoint.effectiveSettings.get = function(filters) {
	var URL = "/effective_settings";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};


endpoint.files = {};

endpoint.files.get = function(filters) {
	var URL = "/files";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};

endpoint.files.post = function(params) {
	var URL = "/files";
	sys.logs.debug('[Tsheets] POST from: ' + URL);
	return endpoint.post(URL, params);
};

endpoint.files.put = function(params) {
	var URL = "/files";
	sys.logs.debug('[Tsheets] PUT from: ' + URL);
	return endpoint.put(URL, params);
};


endpoint.files.raw = {};

endpoint.files.raw.get = function(filters) {
	var URL = "/files/raw";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};

endpoint.files.delete = function(filters) {
	var URL = "/files";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] DELETE from: ' + URL);
	return endpoint.delete(URL);
};


endpoint.geofenceConfigs = {};

endpoint.geofenceConfigs.get = function(filters) {
	var URL = "/geofence_configs";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};


endpoint.geolocations = {};

endpoint.geolocations.get = function(filters) {
	var URL = "/geolocations";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};

endpoint.geolocations.post = function(params) {
	var URL = "/geolocations";
	sys.logs.debug('[Tsheets] POST from: ' + URL);
	return endpoint.post(URL, params);
};


endpoint.groups = {};

endpoint.groups.get = function(filters) {
	var URL = "/groups";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};

endpoint.groups.post = function(params) {
	var URL = "/groups";
	sys.logs.debug('[Tsheets] POST from: ' + URL);
	return endpoint.post(URL, params);
};

endpoint.groups.put = function(params) {
	var URL = "/groups";
	sys.logs.debug('[Tsheets] PUT from: ' + URL);
	return endpoint.put(URL, params);
};


endpoint.jobcodes = {};

endpoint.jobcodes.get = function(filters) {
	var URL = "/jobcodes";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};

endpoint.jobcodes.post = function(params) {
	var URL = "/jobcodes";
	sys.logs.debug('[Tsheets] POST from: ' + URL);
	return endpoint.post(URL, params);
};

endpoint.jobcodes.put = function(params) {
	var URL = "/jobcodes";
	sys.logs.debug('[Tsheets] PUT from: ' + URL);
	return endpoint.put(URL, params);
};


endpoint.jobcodeAssignments = {};

endpoint.jobcodeAssignments.get = function(filters) {
	var URL = "/jobcode_assignments";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};

endpoint.jobcodeAssignments.post = function(params) {
	var URL = "/jobcode_assignments";
	sys.logs.debug('[Tsheets] POST from: ' + URL);
	return endpoint.post(URL, params);
};

endpoint.jobcodeAssignments.delete = function() {
	var URL = "/jobcode_assignments";
	sys.logs.debug('[Tsheets] DELETE from: ' + URL);
	return endpoint.delete(URL);
};


endpoint.lastModifiedTimestamps = {};

endpoint.lastModifiedTimestamps.get = function(filters) {
	var URL = "/last_modified_timestamps";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};


endpoint.locations = {};

endpoint.locations.get = function(filters) {
	var URL = "/locations";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};


endpoint.locationsMap = {};

endpoint.locationsMap.get = function(filters) {
	var URL = "/locations_map";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};


endpoint.managedClients = {};

endpoint.managedClients.get = function(filters) {
	var URL = "/managed_clients";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};


endpoint.notifications = {};

endpoint.notifications.get = function(filters) {
	var URL = "/notifications";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};

endpoint.notifications.post = function(params) {
	var URL = "/notifications";
	sys.logs.debug('[Tsheets] POST from: ' + URL);
	return endpoint.post(URL, params);
};

endpoint.notifications.delete = function(filters) {
	var URL = "/notifications";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] DELETE from: ' + URL);
	return endpoint.delete(URL);
};


endpoint.reminders = {};

endpoint.reminders.get = function(filters) {
	var URL = "/reminders";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};

endpoint.reminders.post = function(params) {
	var URL = "/reminders";
	sys.logs.debug('[Tsheets] POST from: ' + URL);
	return endpoint.post(URL, params);
};

endpoint.reminders.put = function(params) {
	var URL = "/reminders";
	sys.logs.debug('[Tsheets] PUT from: ' + URL);
	return endpoint.put(URL, params);
};


endpoint.reports = {};


endpoint.reports.currentTotals = {};

endpoint.reports.currentTotals.post = function(params) {
	var URL = "/reports/current_totals";
	sys.logs.debug('[Tsheets] POST from: ' + URL);
	return endpoint.post(URL, params);
};


endpoint.reports.payroll = {};

endpoint.reports.payroll.post = function(params) {
	var URL = "/reports/payroll";
	sys.logs.debug('[Tsheets] POST from: ' + URL);
	return endpoint.post(URL, params);
};


endpoint.reports.payrollByJobcode = {};

endpoint.reports.payrollByJobcode.post = function(params) {
	var URL = "/reports/payroll_by_jobcode";
	sys.logs.debug('[Tsheets] POST from: ' + URL);
	return endpoint.post(URL, params);
};


endpoint.reports.project = {};

endpoint.reports.project.post = function(params) {
	var URL = "/reports/project";
	sys.logs.debug('[Tsheets] POST from: ' + URL);
	return endpoint.post(URL, params);
};


endpoint.scheduleCalendars = {};

endpoint.scheduleCalendars.get = function(filters) {
	var URL = "/schedule_calendars";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};


endpoint.scheduleEvents = {};

endpoint.scheduleEvents.get = function(filters) {
	var URL = "/schedule_events";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};

endpoint.scheduleEvents.post = function(params) {
	var URL = "/schedule_events";
	sys.logs.debug('[Tsheets] POST from: ' + URL);
	return endpoint.post(URL, params);
};

endpoint.scheduleEvents.put = function(params) {
	var URL = "/schedule_events";
	sys.logs.debug('[Tsheets] PUT from: ' + URL);
	return endpoint.put(URL, params);
};


endpoint.timesheets = {};

endpoint.timesheets.get = function(filters) {
	var URL = "/timesheets";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};

endpoint.timesheets.post = function(params) {
	var URL = "/timesheets";
	sys.logs.debug('[Tsheets] POST from: ' + URL);
	return endpoint.post(URL, params);
};

endpoint.timesheets.put = function(params) {
	var URL = "/timesheets";
	sys.logs.debug('[Tsheets] PUT from: ' + URL);
	return endpoint.put(URL, params);
};

endpoint.timesheets.delete = function(filters) {
	var URL = "/timesheets";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] DELETE from: ' + URL);
	return endpoint.delete(URL);
};


endpoint.timesheetsDeleted = {};

endpoint.timesheetsDeleted.get = function(filters) {
	var URL = "/timesheets_deleted";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};


endpoint.users = {};

endpoint.users.get = function(filters) {
	var URL = "/users";
	URL += convertFilter(filters);
	sys.logs.debug('[Tsheets] GET from: ' + URL);
	return endpoint.get(URL);
};

endpoint.users.post = function(params) {
	var URL = "/users";
	sys.logs.debug('[Tsheets] POST from: ' + URL);
	return endpoint.post(URL, params);
};

endpoint.users.put = function(params) {
	var URL = "/users";
	sys.logs.debug('[Tsheets] PUT from: ' + URL);
	return endpoint.put(URL, params);
};
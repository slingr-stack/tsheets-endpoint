var fs = require('fs');

var BASE_URL = "";
var FILE_NAME = "tsheets-fn-helpers.js";
var CODE = '';
var METHODS = [];

var apiURL = [
    {
        method: 'GET',
        URL: 'current_user',
        filters: false
    },
    {
        method: 'GET',
        URL: 'customfields',
        filters: true
    },
    {
        method: 'GET',
        URL: 'customfielditems',
        filters: true
    },
    {
        method: 'POST',
        URL: 'customfielditems',
        filters: false
    },
    {
        method: 'PUT',
        URL: 'customfielditems',
        filters: false
    },
    {
        method: 'GET',
        URL: 'effective_settings',
        filters: true
    },
    {
        method: 'GET',
        URL: 'files',
        filters: true
    },
    {
        method: 'POST',
        URL: 'files',
        filters: false
    },
    {
        method: 'PUT',
        URL: 'files',
        filters: false
    },
    {
        method: 'GET',
        URL: 'files/raw',
        filters: true
    },
    {
        method: 'DELETE',
        URL: 'files',
        filters: true
    },
    {
        method: 'GET',
        URL: 'geofence_configs',
        filters: true
    },
    {
        method: 'GET',
        URL: 'geolocations',
        filters: true
    },
    {
        method: 'POST',
        URL: 'geolocations',
        filters: false
    },
    {
        method: 'GET',
        URL: 'groups',
        filters: true
    },
    {
        method: 'POST',
        URL: 'groups',
        filters: false
    },
    {
        method: 'PUT',
        URL: 'groups',
        filters: false
    },
    {
        method: 'GET',
        URL: 'jobcodes',
        filters: true
    },
    {
        method: 'POST',
        URL: 'jobcodes',
        filters: false
    },
    {
        method: 'PUT',
        URL: 'jobcodes',
        filters: false
    },
    {
        method: 'GET',
        URL: 'jobcode_assignments',
        filters: true
    },
    {
        method: 'POST',
        URL: 'jobcode_assignments',
        filters: false
    },
    {
        method: 'DELETE',
        URL: 'jobcode_assignments',
        filters: false
    },
    {
        method: 'GET',
        URL: 'last_modified_timestamps',
        filters: true
    },
    {
        method: 'GET',
        URL: 'locations',
        filters: true
    },
    {
        method: 'GET',
        URL: 'locations_map',
        filters: true
    },
    {
        method: 'GET',
        URL: 'managed_clients',
        filters: true
    },
    {
        method: 'GET',
        URL: 'notifications',
        filters: true
    },
    {
        method: 'POST',
        URL: 'notifications',
        filters: false
    },
    {
        method: 'DELETE',
        URL: 'notifications',
        filters: true
    },
    {
        method: 'GET',
        URL: 'reminders',
        filters: true
    },
    {
        method: 'POST',
        URL: 'reminders',
        filters: false
    },
    {
        method: 'PUT',
        URL: 'reminders',
        filters: false
    },
    {
        method: 'POST',
        URL: 'reports/current_totals',
        filters: false
    },
    {
        method: 'POST',
        URL: 'reports/payroll',
        filters: false
    },
    {
        method: 'POST',
        URL: 'reports/payroll_by_jobcode',
        filters: false
    },
    {
        method: 'POST',
        URL: 'reports/project',
        filters: false
    },
    {
        method: 'GET',
        URL: 'schedule_calendars',
        filters: true
    },
    {
        method: 'GET',
        URL: 'schedule_events',
        filters: true
    },
    {
        method: 'POST',
        URL: 'schedule_events',
        filters: false
    },
    {
        method: 'PUT',
        URL: 'schedule_events',
        filters: false
    },
    {
        method: 'GET',
        URL: 'timesheets',
        filters: true
    },
    {
        method: 'POST',
        URL: 'timesheets',
        filters: false
    },
    {
        method: 'PUT',
        URL: 'timesheets',
        filters: false
    },
    {
        method: 'DELETE',
        URL: 'timesheets',
        filters: true
    },
    {
        method: 'GET',
        URL: 'timesheets_deleted',
        filters: true
    },
    {
        method: 'GET',
        URL: 'users',
        filters: true
    },
    {
        method: 'POST',
        URL: 'users',
        filters: false
    },
    {
        method: 'PUT',
        URL: 'users',
        filters: false
    },
];

function snakeToCamel(s) {
    return s.replace(/(\_\w)/g, function (m) {
        return m[1].toUpperCase();
    });
}

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

var makeEndpointsHelpers = function () {

    CODE += "\nvar convertFilter = " + convertFilter.toString() + ";";

    for (var i in apiURL) {

        var ws = apiURL[i];
        var methodStr = "\n\nendpoint";
        var tmp = ws.URL.split("/");

        for (j in tmp) {
            methodStr += "." + snakeToCamel(tmp[j]);
            if (METHODS.indexOf(methodStr) == -1) {
                METHODS.push(methodStr);
                CODE += "\n" + methodStr + " = {};"
            }
        }

        methodStr += "." + ws.method.toLowerCase();

        var filters = ws.filters ? 'filters' : '';
        var params = ws.method === 'POST' || ws.method === 'PUT' ? 'params' : '';

        methodStr += " = function(" + filters + params + ") {";
        methodStr += "\n\tvar URL = \"" + BASE_URL + "/" + ws.URL + "\";";
        if (ws.filters) {
            methodStr += "\n\tURL += convertFilter(filters);";
        }
        methodStr += "\n\tsys.logs.debug('[Tsheets] " + ws.method + " from: ' + URL);"
        methodStr += "\n\treturn endpoint." + ws.method.toLowerCase() + "(URL";
        methodStr += ws.method === 'POST' || ws.method === 'PUT' ? ', params);' : ');';

        methodStr += "\n};";

        CODE += methodStr;

    }

    var MESSAGE = '//////////////////////////////////////////////////////////////////////////\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//  This file is generated with tsheets/gen/gen-tsheets-helpers.js      //\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//  ' + new Date() + '                             //\n';
    MESSAGE += '//////////////////////////////////////////////////////////////////////////\n';

    CODE = MESSAGE + CODE;

};

makeEndpointsHelpers();

fs.writeFile("../scripts/" + FILE_NAME, CODE, function (err) {
    if (err) {
        return console.error(err);
    }

    console.info('Generator has run successfully!');
});

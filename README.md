---
title: TSheets endpoint
keywords: 
last_updated: November 06, 2018
tags: []
summary: "Detailed description of the API for TSheets endpoint."
---

## Overview

The TSheets API is based on REST principles. It's very easy to write and test applications. The API allows you to
query meta-data about your account, users, jobcodes, timesheets, GPS points, and custom fields. You can also create 
timesheets, users, jobcodes, etc. 

## Configuration

You will need an account in TSheets and have the API credentials.

As a convenience to you, create access token through the web UI via the API Add-on preferences page 
(Add-ons -> API -> click 'Preferences'). 
You can also extend the expiration date on these tokens via the web UI, so that you don't have to deal 
with refreshing tokens. Remember to keep your access tokens secret; treat them just like passwords!

### Token

OAuth access token. Use it to make API requests.

## Javascript API

In most cases you will be using the provided shortcuts to access the API or you can use the REST API
directly by doing an HTTP request.

Check [API Documentation](https://developers.tsheets.com/docs/api/) for more information.

### Shortcuts

Instead of having to use the generic HTTP methods, you can make use of the shortcuts provided in the endpoint. These
shortcuts follow these rules:

- **Path sections get converted to namespaces**: for example if the method is GET `~/reports/payroll 
  it is converted to `app.endpoints.tsheet.reports.payroll.get({})`. 
- **If they have dashes, we should convert them to camel case**: `~/current_user` is converted to 
  `app.endpoints.tsheet.currentUser.get()`. 
- **HTTP method is appended at the end of the method**: for example if the method is `GET`, you will see a method with 
  the suffix `.get(...)`. For example `GET ~/current_user` will become `app.endpoints.tsheets.currentUser.get()`. 
  This is the mapping of names:
  - `GET`: `get`
  - `POST`: `create`
  - `PUT`: `update`
  - `DELETE`: `delete`
- **Available filters for GET and DELETE**: if the method has filters in the path, they will become a filter for 
  the method. For example `GET ~/custom_user?active=yes` will become 
  `app.endpoints.tsheets.customUser.get({active: "yes"})`.
- **Additional parameters or body are sent in the last param as JSON**: if the method accepts more parameters or it 
  allows to send a body, that will be sent in the last parameter. For example the method `POST ~/geolocations` 
  supports many query parameters, so it will become `app.endpoints.tsheets.geolocations.post({...})`.

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.


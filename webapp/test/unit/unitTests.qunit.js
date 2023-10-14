/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Z_weather_app/weather_app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

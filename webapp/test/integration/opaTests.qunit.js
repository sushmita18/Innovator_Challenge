/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/sapui5ml/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
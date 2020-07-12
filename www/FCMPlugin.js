var exec = require('cordova/exec');

function FCMPlugin() {
	console.log("FCMPlugin.js: is created");
}

// SUBSCRIBE TO TOPIC //
FCMPlugin.prototype.subscribeToTopic = function (topic, success, error) {
	exec(success, error, "FCMPlugin", 'subscribeToTopic', [topic]);
}
// UNSUBSCRIBE FROM TOPIC //
FCMPlugin.prototype.unsubscribeFromTopic = function (topic, success, error) {
	exec(success, error, "FCMPlugin", 'unsubscribeFromTopic', [topic]);
}
// NOTIFICATION CALLBACK //
FCMPlugin.prototype.onNotification = function (callback, success, error) {
	FCMPlugin.prototype.onNotificationReceived = callback;
	exec(success, error, "FCMPlugin", 'registerNotification', []);
}
// TOKEN REFRESH CALLBACK //
FCMPlugin.prototype.onTokenRefresh = function (callback) {
	FCMPlugin.prototype.onTokenRefreshReceived = callback;
}
// GET TOKEN //
FCMPlugin.prototype.getToken = function (success, error) {
	exec(success, error, "FCMPlugin", 'getToken', []);
}
// GET ID //
FCMPlugin.prototype.getId = function (success, error) {
	exec(success, error, "FCMPlugin", "getId", []);
};
// DELETE INSTANCE ID //
FCMPlugin.prototype.deleteInstanceId = function (success, error) {
	exec(success, error, "FCMPlugin", "deleteInstanceId", []);
};

// DEFAULT NOTIFICATION CALLBACK //
FCMPlugin.prototype.onNotificationReceived = function (payload) {
	console.log("Received push notification")
	console.log(payload)
}
// DEFAULT TOKEN REFRESH CALLBACK //
FCMPlugin.prototype.onTokenRefreshReceived = function (token) {
	console.log("Received token refresh")
	console.log(token)
}
//ANALYTICS
FCMPlugin.prototype.logEvent = function (name, params, success, error) {
	exec(success, error, "FCMPlugin", "logEvent", [name, params || {}]);
}
FCMPlugin.prototype.setUserId = function (userId, success, error) {
	exec(success, error, "FCMPlugin", "setUserId", [userId]);
}
FCMPlugin.prototype.setUserProperty = function (name, value, success, error) {
	exec(success, error, "FCMPlugin", "setUserProperty", [name, value]);
}
FCMPlugin.prototype.resetAnalyticsData = function (success, error) {
	exec(success, error, "FCMPlugin", "resetAnalyticsData", []);
}
FCMPlugin.prototype.setEnabled = function (enabled, success, error) {
	exec(success, error, "FCMPlugin", "setEnabled", [enabled]);
}
FCMPlugin.prototype.setCurrentScreen = function (name, success, error) {
	exec(success, error, "FCMPlugin", "setCurrentScreen", [name]);
}
// FIRE READY //
exec(function (result) { console.log("FCMPlugin Ready OK") }, function (result) { console.log("FCMPlugin Ready ERROR") }, "FCMPlugin", 'ready', []);





var fcmPlugin = new FCMPlugin();
module.exports = fcmPlugin;

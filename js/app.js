ZDSyncApp = Ember.Application.create();

ZDSyncApp.Router.map(function() {
	this.resource('DirectorySync');
	this.resource('createScheduler');
	this.resource('PasswordSync');
	this.resource('PasswordSyncValues');
  // put your routes here
});

ZDSyncApp.DirectorySyncRoute = Ember.Route.extend({
  model: function() {
    return scheduledList;
  }
});

ZDSyncApp.PasswordSyncValuesRoute = Ember.Route.extend({
  model: function() {
	var valTest;
    var url = 'https://localhost:8443/dirSync.do';
    Ember.$.getJSON(url, function(data) {
		alert(data);
		valTest = data;
	});
    return valTest;
  }
});

var samplePasswordSyncedValues = [
	{
		uniqueId : "123456",
		accountName : "John",
		time: "12-12-2014 : 4 pm",
		status : "Successfully Synced"
	},
	{
		uniqueId : "123457",
		accountName : "Mike Andy",
		time: "12-12-2014 : 4 pm",
		status : "Successfully Synced"
	},
	{
		uniqueId : "123458",
		accountName : "Peter Morison",
		time: "12-12-2014 : 4 pm",
		status : "Successfully Synced"
	},
	{
		uniqueId : "123459",
		accountName : "Kelly Davidson",
		time: "12-12-2014 : 4 pm",
		status : "Successfully Synced"
	},
	{
		uniqueId : "123410",
		accountName : "Humber John",
		time: "12-12-2014 : 4 pm",
		status : "Successfully Synced"
	},
	{
		uniqueId : "123411",
		accountName : "Peter",
		time: "12-12-2014 : 4 pm",
		status : "Successfully Synced"
	},
	{
		uniqueId : "123412",
		accountName : "Mike",
		time: "12-12-2014 : 4 pm",
		status : "Successfully Synced"
	},
	{
		uniqueId : "123413",
		accountName : "Morison",
		time: "12-12-2014 : 4 pm",
		status : "Successfully Synced"
	},
	{
		uniqueId : "123414",
		accountName : "John",
		time: "12-12-2014 : 4 pm",
		status : "Successfully Synced"
	}

];

var scheduledList = [
	{
		schedulerName : "Test Scheduler 1",
		description : "Description 1",
		time : " Daily 02:15 pm",
		notificationEmailAddress : " testemail1@zoho.com"
	},
	
	{
		schedulerName : "Test Scheduler 2",
		description : "Description 2",
		time : " Daily 02:15 pm",
		notificationEmailAddress : " testemail2@zoho.com"
	},
	
	{
		schedulerName : "Test Scheduler 3",
		description : "Description 3",
		time : " Daily 02:15 pm",
		notificationEmailAddress : " testemail-3@zoho.com"
	},
	
	{
		schedulerName : "Test Scheduler 4",
		description : "Description 4",
		time : " Daily 02:15 pm",
		notificationEmailAddress : " testemail-4@zoho.com"
	},
	
	{
		schedulerName : "Test Scheduler 5",
		description : "Description 5",
		time : " Daily 02:15 pm",
		notificationEmailAddress : " testemail-5@zoho.com"
	},
	];

const remote = require('electron').remote;
var fs = require('fs');
var jsonfile = require('jsonfile');

const converter = {};

// const converter = converter || {};
let settingsData = JSON.parse(fs.readFileSync('js/converter-data.json', 'utf-8'));

converter.urls = [];
Object.keys(settingsData).forEach(function(key) {
	converter.urls.push(settingsData[key]);
}, settingsData);

converter.EventType = {
	INPUTTED : 'inputted'
}
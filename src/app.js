import ko from 'knockout'
import * as Map from './map'

// Set our GoogleMaps API callback function to initMap()
window.initMap = Map.initMap;


// Locations data
let locations = [
	{title: 'Bar 1911', location: {lat: 46.2458001, lng: -63.1262579}, visible: true, foursquareId: '598605a08e886a2682330658'},
	{title: 'Brickhouse', location: {lat: 46.2335767, lng: -63.12835}, visible: true, foursquareId: '4db43a0dfa8c350240e00130'},
	{title: 'Dooley\'s - Kent', location: {lat: 46.2366864, lng: -63.1294277}, visible: true, foursquareId: '4c4a3ec09c8d2d7fba2a3c69'},
	{title: 'Gahan House', location: {lat: 46.23348, lng: -63.1281158}, visible: true, foursquareId: '4b303406f964a520b3f724e3'},
	{title: 'Hotel on Pownal', location: {lat: 46.2341271, lng: -63.1323812}, visible: true, foursquareId: '4bd2caa4462cb7134ff7dc07'},
	{title: 'Merchantman', location: {lat: 46.2317743, lng: -63.1270911}, visible: true, foursquareId: '4c4e00ab9efabe9aebde6169'},
	{title: 'PEI Brewing Company', location: {lat: 46.2524766, lng: -63.1176714}, visible: true, foursquareId: '5197d3cd498e0d5ad57d430a'},
	{title: 'Pizza Delight', location: {lat: 46.24581, lng: -63.1261826}, visible: true, foursquareId: '4bb680aa2ea195216acbab2f'},
	{title: 'Sim\'s Corner', location: {lat: 46.2333235, lng: -63.1283067}, visible: true, foursquareId: '4ba69d54f964a5200d6339e3'},
	{title: 'The Great George', location: {lat: 46.2339997, lng: -63.1265592}, visible: true, foursquareId: '4ba6702cf964a520735239e3'}
];

let Location = function (data) {
	this.title = ko.observable(data.title);
	this.location = ko.observable(data.location);
	this.visible = ko.observable(data.visible);
	this.foursquareId = ko.observable(data.foursquareId);
};

let ViewModel = function () {
	let self = this;

	this.locationList = ko.observableArray([]);

	locations.forEach(function (location) {
		self.locationList.push(new Location(location));
	});

	this.currentLocation = ko.observable(null);

	this.setCurrentLocation = function (locationSelected) {
		self.currentLocation(locationSelected);
	}
};

ko.applyBindings(new ViewModel());

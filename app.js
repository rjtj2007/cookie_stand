'use strict';

console.log('Good Morning!');
// Store Locations
var allLocations = {};
// Cookes Sold per Hour
var totalCookiesPerHour = 0;
// Total Cookies Sold
var netTotal = 0;
// Constructor Function
function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour) {
  // Store Hours
  this.hours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total'];
  // Properties
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  // Arrays
  this.randCustPerHour = [];
  this.cookiesSoldPerHour = [];
  this.totalCookies = 0;
  //Use a method to calculate random customers per hour
  this.calcRandCustPerHour = function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour));
      console.log(this.randCustPerHour);
    }
  };
  //Use method for cookies sold per hour
  this.calcCookiesSoldPerHour = function() {
    this.calcRandCustPerHour();
    for (var j = 0; j < 15; j++) {
      this.cookiesSoldPerHour.push(Math.round(this.avgCookieSoldPerHour + this.randCustPerHour[j]));
      console.log(this.cookiesSoldPerHour);
    }
  };
  this.renderheader = function() {
    var body = document.getElementById('cookies');
    var tr = document.createElement('tr');
    for (var i = 0; i < this.hours.length; i++) {
      var currentHour = this.hours[i];
      console.log('current hour ' + currentHour);
      var td = document.createElement('td');
      var cellText = document.createTextNode(currentHour);
      td.appendChild(cellText);
      tr.appendChild(td);
    };
    body.appendChild(tr);
  };

  this.render = function() {
    var body = document.getElementById('cookies');
    var tr = document.createElement('tr');
    var nameTd = document.createElement('td');
    var nameText = document.createTextNode(this.name);
    nameTd.appendChild(nameText);
    tr.appendChild(nameTd);
    this.calcCookiesSoldPerHour();
    console.log('cookies sold per hour array ' + this.cookiesSoldPerHour);
    var totalCookies = 0;
    for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
      var currentCookie = this.cookiesSoldPerHour[i];
      console.log('this is the current cookie count ' + currentCookie);
      var td = document.createElement('td');
      var cellText = document.createTextNode(currentCookie);
      td.appendChild(cellText);
      tr.appendChild(td);
      totalCookies = totalCookies + currentCookie;
    };
    var totalTd = document.createElement('td');
    var totalText = document.createTextNode(totalCookies);
    totalTd.appendChild(totalText);
    tr.appendChild(totalTd);
    body.appendChild(tr);
  };
};

function makeStands() {
  allLocations.firstAndPike = new MakeLocation('1st & Pike', 23, 65, 6.3);
  allLocations.seatacseattle = new MakeLocation('SeaTac', 3, 24, 1.2);
  allLocations.seaCenter = new MakeLocation('Seattle Center', 11, 38, 3.7);
  allLocations.capHill = new MakeLocation('Capital Hill', 20, 38, 2.3);
  allLocations.alki = new MakeLocation('Alki', 2, 16, 4.6);
};
makeStands();
allLocations.firstAndPike.renderheader();
allLocations.firstAndPike.render();
allLocations.seatacseattle.render();
allLocations.seaCenter.render();
allLocations.capHill.render();
allLocations.alki.render();

// function makeFooterRow() {
//   var cookiestands = document.getElementById('cookiestands');
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');
//   trEl.appendChild(thEl);
// }
// makeFooterRow();
// consider a for loop for the hours
// create a th element
// give the th element some text content like hours[i];
// appendChild

//create a th element
//give the th element text content 'Daily Location Total'
//append child

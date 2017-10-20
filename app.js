'use strict';

console.log('Good Morning!');
// Store Locations
var allLocations = {};
// Cookes Sold per Hour
var totalCookiesPerHour = 0;
// Constructor Function
function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour) {
  // Store Hours
  this.hours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
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
  //header
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
    }
    body.appendChild(tr);
  };
  //body
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
      td.className += 'countable';
      td.className += ' index' + [i];
      var cellText = document.createTextNode(currentCookie);
      td.appendChild(cellText);
      tr.appendChild(td);
      totalCookies = totalCookies + currentCookie;
    }
    var totalTd = document.createElement('td');
    totalTd.className += 'countable';
    totalTd.className += ' index' + [i];
    var totalText = document.createTextNode(totalCookies);
    totalTd.appendChild(totalText);
    tr.appendChild(totalTd);
    body.appendChild(tr);
  };
  //footer
  this.makeFooter = function() {
    var body = document.getElementById('cookies');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var cls = document.getElementById('cookies').getElementsByClassName('countable');
    var filler = document.createTextNode('Total');
    td.appendChild(filler);
    tr.appendChild(td);
    var nodeList = [];
    var elem = [];
    for (var i = 0; i < this.hours.length - 1; i++) {
      nodeList.push(document.querySelectorAll('.index' + i));
    }
    console.log(nodeList);

    for (var i = 0; i < nodeList.length; i++) {
      var column = nodeList[i];
      var sum = 0;
      var td = document.createElement('td');
      for (var j = 0; j < column.length; j++) {
        if (column[j].classList[1] == 'index' + i) {
          var sum = sum + parseInt(column[j].innerHTML);
        }
      }
      var cellText = document.createTextNode(sum);
      td.appendChild(cellText);
      tr.appendChild(td);
    };
    body.appendChild(tr);
  };
};
//add locations to constructor function
function makeStands() {
  allLocations.firstAndPike = new MakeLocation('1st & Pike', 23, 65, 6.3);
  allLocations.seatacseattle = new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  allLocations.seaCenter = new MakeLocation('Seattle Center', 11, 38, 3.7);
  allLocations.capHill = new MakeLocation('Capitol Hill', 20, 38, 2.3);
  allLocations.alki = new MakeLocation('Alki Beach', 2, 16, 4.6);
};
//render new locations to table
makeStands();
allLocations.firstAndPike.renderheader();
allLocations.firstAndPike.render();
allLocations.seatacseattle.render();
allLocations.seaCenter.render();
allLocations.capHill.render();
allLocations.alki.render();
allLocations.alki.makeFooter();

//create newStore Event
document.getElementById('makeNewStore').addEventListener('click', function() {
  var elem = document.getElementById('Total');
  elem.parentElement.removeChild(elem);

  var newStoreName = document.gitElementById('storeName').value;
  var newMinCust = document.gitElementById('minCust').value;
  var newMaxCust = document.gitElementById('maxCust').value;
  var newAvgCookie = document.gitElementById('avgCookie').value;

  event.preventDefault();
  event.stopPropagation();

  new MakeLocation(newStoreName, newMinCust, newMaxCust, newAvgCookie);
  event.preventDefault();

});

'use strict';

console.log('Good Morning!');
// Store Hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// first and pike store
var firstAndPikeLocation = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalCookiesSold: 0,
  //Use a method to calculate random customers per hour
  calcRandCustPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() + (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustPerHour[i]);
    }
  },
  //Use method for cookies sold per hour
  calcCookiesSoldPerHour: function () {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldPerHour.push(Math.round(this.avgCookiesSoldPerHour + this.randCustPerHour[j]));
      console.log(this.cookiesSoldPerHour[j]);
    }
  },
  render: function() {
    var firstAndPike = document.getElementById('firstAndPike');
    var fandp = document.getElementById('fandp');
    this.calcRandCustPerHour();
    this.calcCookiesSoldPerHour();
    var h3El = document.createElement('h3');
    h3El.testContent = this.name;
    fanp.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      varliEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour + ' cookies.';
      console.log(liEl);
      firstAndPike.appendChild(liEl);
    }
  }
};
firstAndPike.render;

'use strict';

console.log('Good Morning!');
// Store Hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// first and pike store
var firstAndPike = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalCookiesSold: 0,
  //Use a method to calculate random customers per hour
  calcRandCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() + (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustPerHour[i]);
    }
  },
  //Use method for cookies sold per hour
  calcCookiesSoldPerHour: function() {
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
    h3El.textContent = this.name;
    fandp.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies.';
      console.log(liEl);
      firstAndPike.appendChild(liEl);
    }
  }
};
firstAndPike.render();

// Sea-Tac Airport store
var seaTacAirport = {
  name: 'Sea-Tac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesSoldPerHour: 1.2,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalCookiesSold: 0,
  //Use a method to calculate random customers per hour
  calcRandCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() + (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustPerHour[i]);
    }
  },
  //Use method for cookies sold per hour
  calcCookiesSoldPerHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldPerHour.push(Math.round(this.avgCookiesSoldPerHour + this.randCustPerHour[j]));
      console.log(this.cookiesSoldPerHour[j]);
    }
  },
  render: function() {
    var seaTacAirport = document.getElementById('seaTacAirport');
    var stairport = document.getElementById('stairport');
    this.calcRandCustPerHour();
    this.calcCookiesSoldPerHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    stairport.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies.';
      console.log(liEl);
      seaTacAirport.appendChild(liEl);
    }
  }
};
seaTacAirport.render();

// Seattle Center store
var seattleCenter = {
  name: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesSoldPerHour: 3.7,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalCookiesSold: 0,
  //Use a method to calculate random customers per hour
  calcRandCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() + (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustPerHour[i]);
    }
  },
  //Use method for cookies sold per hour
  calcCookiesSoldPerHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldPerHour.push(Math.round(this.avgCookiesSoldPerHour + this.randCustPerHour[j]));
      console.log(this.cookiesSoldPerHour[j]);
    }
  },
  render: function() {
    var seattleCenter = document.getElementById('seattleCenter');
    var seacenter = document.getElementById('seacenter');
    this.calcRandCustPerHour();
    this.calcCookiesSoldPerHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    seacenter.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies.';
      console.log(liEl);
      seattleCenter.appendChild(liEl);
    }
  }
};
seattleCenter.render();

// Capital Hill store
var capitalHill = {
  name: 'Capital Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesSoldPerHour: 3.2,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalCookiesSold: 0,
  //Use a method to calculate random customers per hour
  calcRandCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() + (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustPerHour[i]);
    }
  },
  //Use method for cookies sold per hour
  calcCookiesSoldPerHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldPerHour.push(Math.round(this.avgCookiesSoldPerHour + this.randCustPerHour[j]));
      console.log(this.cookiesSoldPerHour[j]);
    }
  },
  render: function() {
    var capitalHill = document.getElementById('capitalHill');
    var caphill = document.getElementById('caphill');
    this.calcRandCustPerHour();
    this.calcCookiesSoldPerHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    caphill.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies.';
      console.log(liEl);
      capitalHill.appendChild(liEl);
    }
  }
};
capitalHill.render();

// Alki store
var alkiSeattle = {
  name: 'Alki Seattle',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesSoldPerHour: 4.6,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalCookiesSold: 0,
  //Use a method to calculate random customers per hour
  calcRandCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push( Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour ));
      console.log(this.randCustPerHour[i]);
    }
  },
  //Use method for cookies sold per hour
  calcCookiesSoldPerHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldPerHour.push(Math.round(this.avgCookiesSoldPerHour + this.randCustPerHour[j]));
      console.log(this.cookiesSoldPerHour[j]);
    }
  },
  render: function() {
    var alkiSeattle = document.getElementById('alkiSeattle');
    var alki = document.getElementById('alki');
    this.calcRandCustPerHour();
    this.calcCookiesSoldPerHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    alki.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies.';
      console.log(liEl);
      alkiSeattle.appendChild(liEl);
    }
  }
};
alkiSeattle.render();

//work on math randomizer from the alki store

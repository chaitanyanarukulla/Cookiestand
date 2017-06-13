'use strict';
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
function getSum(total,num){
  return total + num;
}
// Store1
var pike = {
  location: 'Pike and 1st',
  minCoustmers: 23,
  maxCoustmers: 65,
  avgCookies: 6.3,
  coustmersEachhour: [],
  cookiersEachhour: [],

  calCoustmerThisHour: function() {
    for (var i = 0; i < openHours.length; i++) {
      var avecoustmerperhour = Math.floor(Math.random() * (this.maxCoustmers - this.minCoustmers + 1) + this.minCoustmers);
      console.log('avarage', avecoustmerperhour);
      this.coustmersEachhour.push(avecoustmerperhour);
    };
  },
  calcCookiesThisHour: function() {
    for (var j = 0; j < openHours.length; j++) {
      var avgCookiesperHour = Math.ceil(this.coustmersEachhour[j] * this.avgCookies);
      console.log('avgCookiesperHour', avgCookiesperHour);
      this.cookiersEachhour.push(avgCookiesperHour);
    }
  },
  render: function(){
    var ulEl = document.getElementById('Location1');
    ulEl.textContent = this.location;
    for ( var i = 0; i < openHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = openHours[i] + ' : ' + this.cookiersEachhour[i] + ' Cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total' + ':' + this.cookiersEachhour.reduce(getSum);

  },
};

pike.calCoustmerThisHour();
pike.calcCookiesThisHour();
pike.render();

//Second Store
var seatac = {
  location: 'SeaTac',
  minCoustmers: 3,
  maxCoustmers: 24,
  avgCookies: 1.2,
  coustmersEachhour: [],
  cookiersEachhour: [],

  calCoustmerThisHour: function() {
    for (var i = 0; i < openHours.length; i++) {
      var avecoustmerperhour = Math.floor(Math.random() * (this.maxCoustmers - this.minCoustmers + 1) + this.minCoustmers);
      console.log('avarage', avecoustmerperhour);
      this.coustmersEachhour.push(avecoustmerperhour);
    };
  },
  calcCookiesThisHour: function() {
    for (var j = 0; j < openHours.length; j++) {
      var avgCookiesperHour = Math.ceil(this.coustmersEachhour[j] * this.avgCookies);
      console.log('avgCookiesperHour', avgCookiesperHour);
      this.cookiersEachhour.push(avgCookiesperHour);
    }
  },
  render: function(){
    var ulEl = document.getElementById('Location2');
    ulEl.textContent = this.location;
    for ( var i = 0; i < openHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = openHours[i] + ' : ' + this.cookiersEachhour[i] + ' Cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total' + ':' + this.cookiersEachhour.reduce(getSum);

  },
};

seatac.calCoustmerThisHour();
seatac.calcCookiesThisHour();
seatac.render();

// Third Store
var seattleCenter = {
  location: 'Seattle Center',
  minCoustmers: 11,
  maxCoustmers: 38,
  avgCookies: 3.7,
  coustmersEachhour: [],
  cookiersEachhour: [],

  calCoustmerThisHour: function() {
    for (var i = 0; i < openHours.length; i++) {
      var avecoustmerperhour = Math.floor(Math.random() * (this.maxCoustmers - this.minCoustmers + 1) + this.minCoustmers);
      console.log('avarage', avecoustmerperhour);
      this.coustmersEachhour.push(avecoustmerperhour);
    };
  },
  calcCookiesThisHour: function() {
    for (var j = 0; j < openHours.length; j++) {
      var avgCookiesperHour = Math.ceil(this.coustmersEachhour[j] * this.avgCookies);
      console.log('avgCookiesperHour', avgCookiesperHour);
      this.cookiersEachhour.push(avgCookiesperHour);
    }
  },
  render: function(){
    var ulEl = document.getElementById('Location3');
    ulEl.textContent = this.location;
    for ( var i = 0; i < openHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = openHours[i] + ' : ' + this.cookiersEachhour[i] + ' Cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total' + ':' + this.cookiersEachhour.reduce(getSum);
  },
};

seattleCenter.calCoustmerThisHour();
seattleCenter.calcCookiesThisHour();
seattleCenter.render();

// fourth Store
var capitolhill = {
  location: 'Capitol Hill',
  minCoustmers: 20,
  maxCoustmers: 38,
  avgCookies: 4.6,
  coustmersEachhour: [],
  cookiersEachhour: [],

  calCoustmerThisHour: function() {
    for (var i = 0; i < openHours.length; i++) {
      var avecoustmerperhour = Math.floor(Math.random() * (this.maxCoustmers - this.minCoustmers + 1) + this.minCoustmers);
      console.log('avarage', avecoustmerperhour);
      this.coustmersEachhour.push(avecoustmerperhour);
    };
  },
  calcCookiesThisHour: function() {
    for (var j = 0; j < openHours.length; j++) {
      var avgCookiesperHour = Math.ceil(this.coustmersEachhour[j] * this.avgCookies);
      console.log('avgCookiesperHour', avgCookiesperHour);
      this.cookiersEachhour.push(avgCookiesperHour);
    }
  },
  render: function(){
    var ulEl = document.getElementById('Location4');
    ulEl.textContent = this.location;
    for ( var i = 0; i < openHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = openHours[i] + ' : ' + this.cookiersEachhour[i] + ' Cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total' + ':' + this.cookiersEachhour.reduce(getSum);
  },
};

capitolhill.calCoustmerThisHour();
capitolhill.calcCookiesThisHour();
capitolhill.render();

//Store5
var alki = {
  location: 'Alki',
  minCoustmers: 2,
  maxCoustmers: 16,
  avgCookies: 4.6,
  coustmersEachhour: [],
  cookiersEachhour: [],

  calCoustmerThisHour: function() {
    for (var i = 0; i < openHours.length; i++) {
      var avecoustmerperhour = Math.floor(Math.random() * (this.maxCoustmers - this.minCoustmers + 1) + this.minCoustmers);
      console.log('avarage', avecoustmerperhour);
      this.coustmersEachhour.push(avecoustmerperhour);
    };
  },
  calcCookiesThisHour: function() {
    for (var j = 0; j < openHours.length; j++) {
      var avgCookiesperHour = Math.ceil(this.coustmersEachhour[j] * this.avgCookies);
      console.log('avgCookiesperHour', avgCookiesperHour);
      this.cookiersEachhour.push(avgCookiesperHour);
    }
  },
  render: function(){
    var ulEl = document.getElementById('Location5');
    ulEl.textContent = this.location;
    for ( var i = 0; i < openHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = openHours[i] + ' : ' + this.cookiersEachhour[i] + ' Cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total' + ':' + this.cookiersEachhour.reduce(getSum);
  },
};

alki.calCoustmerThisHour();
alki.calcCookiesThisHour();
alki.render();

'use strict';
// Global variables
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var samStore = [];
var samTable = document.getElementById('Location1');

function sumTotal(total, num) {
  return total + num;
};

function randCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
//Counstructor Stuff
function Store(location, minCustomers, maxCustomers, avgCookiesPerSale, totalDailySales) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.totalDailySales = 0;
  this.avgCoustmersPerHour = [];
  this.cookiesSoldEachHour = [];
  this.getCookiesSold();
  samStore.push(this);
};
// Methods1
Store.prototype.getCoustmers = function() {
  for (var i = 0; i < openHours.length; i++) {
    this.avgCoustmersPerHour.push(randCust(this.minCustomers, this.maxCustomers));
  }
};
// Methods2
Store.prototype.getCookiesSold = function() {
  this.getCoustmers();
  for (var i = 0; i < openHours.length; i++) {
    this.cookiesSoldEachHour.push(Math.ceil(this.avgCoustmersPerHour[i] * this.avgCookiesPerSale));
    this.totalDailySales += this.cookiesSoldEachHour[i];
  }
  this.cookiesSoldEachHour.push(this.totalDailySales);
  console.log(this.cookiesSoldEachHour);
};
// Rendering Content
Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  for (var c = 0; c < openHours.length + 1; c++) {
    var tdEl = document.createElement('td');
    // give it content
    tdEl.textContent = this.cookiesSoldEachHour[c];
    // append it to the DOM
    trEl.appendChild(tdEl);
  }
  samTable.appendChild(trEl);
};
// rendering Headrow
function renderH() {
  var headrow = document.createElement('tr');
  var empty = document.createElement('th');
  empty.textContent = 'Stores';
  headrow.appendChild(empty);

  for (var i = 0; i < openHours.length; i++) {
    var hours = document.createElement('th');
    hours.textContent = openHours[i];
    headrow.appendChild(hours);
  }
  var totalHead = document.createElement('th');
  totalHead.textContent = 'DailySales';
  headrow.appendChild(totalHead);
  document.getElementById('Location1').appendChild(headrow);

}

var pike = new Store('Pike Place market', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('seattleCenter', 11, 38, 1.2);
var captiolhill = new Store('CapitolHill', 20, 38, 2.3);
var alki = new Store('Alik', 2, 16, 4.6);
// Callingfunction
renderH();
pike.render();
seatac.render();
seattleCenter.render();
captiolhill.render();
alki.render();

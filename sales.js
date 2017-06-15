'use strict';
// Global variables
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var samStore = [];
var samTable = document.getElementById('mainpage');
function sumTotal(total, num) {
  return total + num;
};
function randCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// input Global variables
// var newLocation = document.getElementById('newLocation');
// var clearList = document.getElementById('clearList');

// var allComments = [];

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
  this.render();
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
  document.getElementById('mainpage').appendChild(headrow);
}
// getting info from tabel puttinginto var
function handelSubmision(event){
  event.preventDefault();
  var locaInput = event.target.loca.value;
  var minInput = event.target.minCust.value;
  var maxInput = event.target.maxCust.value;
  var avgCookies = event.target.avgCookies.value;
  new Store(locaInput,minInput,maxInput,avgCookies);
  event.target.loca.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgCookies.value = null;

};
var newLocation = document.getElementById('newLocations');

renderH();
var pike = new Store('Pike Place market', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('seattleCenter', 11, 38, 1.2);
var captiolhill = new Store('CapitolHill', 20, 38, 2.3);
var alki = new Store('Alik', 2, 16, 4.6);
// Listners

newLocation.addEventListener('submit', handelSubmision);

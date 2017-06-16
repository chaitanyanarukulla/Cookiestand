'use strict';
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
var samStore = [];
var samTable = document.getElementById('mainpage');
var grandtotal = [];
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
  for (var i = 0; i < openHours.length ; i++) {
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
// rendreing footer
function renderF(){
  var footRow = document.createElement('tr');
  var hout = document.createElement('th');
  hout.textContent = 'Total Per Hour';
  footRow.appendChild(hout);
  grandtotal = [];

  for (var i = 0; i < openHours.length; i++) {
    var totalEh = 0;

    for (var j = 0; j < samStore.length; j++) {
      totalEh += samStore[j].cookiesSoldEachHour[i];
    }

    grandtotal.push(totalEh);
    var make = document.createElement('th');
    make.textContent = totalEh;
    footRow.appendChild(make);
  }
  samTable.appendChild(footRow);
  var tabelFooter = document.createElement('th');
  tabelFooter.textContent = grandtotal.reduce(function(total,sum) {
    return total + sum;
  });

  footRow.appendChild(tabelFooter);
  samTable.appendChild(footRow);
}
// getting info from tabel puttinginto var
function handelSubmision(event){
  event.preventDefault();
  var locaInput = event.target.loca.value;
  var minInput = parseInt(event.target.minCust.value);
  var maxInput = parseInt(event.target.maxCust.value);
  var avgCookies = event.target.avgCookies.value;
  new Store(locaInput,minInput,maxInput,avgCookies);
  event.target.loca.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgCookies.value = null;
  samTable.innerHTML = '';
  renderH();
  renderAllstore();
  renderF();
};
var newLocation = document.getElementById('newLocations');
var pike = new Store('Pike Place market', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('seattleCenter', 11, 38, 1.2);
var captiolhill = new Store('CapitolHill', 20, 38, 2.3);
var alki = new Store('Alik', 2, 16, 4.6);
renderH();
renderAllstore();
renderF();
function renderAllstore(){
  for(var i = 0;i < samStore.length;i ++){
    samStore[i].render();
  }
}
newLocation.addEventListener('submit', handelSubmision);

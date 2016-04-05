
// Cart object constructor
var Cart = function(location, minCustomer, maxCustomer, avSale, sales_per_hour, total_sales) {
  this.loc = location;
  this.minCus = minCustomer;
  this.maxCus = maxCustomer;
  this.avSale = avSale;
  this.sales = sales_per_hour;
  this.cooSum = total_sales;
  this.hours = ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "];
  this.cusGen = function() {    // Random # of customers based on cart max/min
    return Math.random() * (this.maxCus - this.minCus) + this.minCus;
  };
}

// Create and populate Cars Array
var Carts = [];
var pioSqu = new Cart("Pioneer Square", 17, 88, 5.2, [], []);
Carts.push(pioSqu);
var porAir = new Cart("Portland Airport", 6, 24, 1.2, [], []);
Carts.push(porAir);
var wasSqu = new Cart("Washington Square", 11, 38, 1.9, [], []);
Carts.push(wasSqu);
var selWoo = new Cart("Sellwood", 20, 48, 3.3, [], []);
Carts.push(selWoo);
var peaDis = new Cart("Pearl District", 3, 24, 2.6, [], []);
Carts.push(peaDis);


// Calculate an array of cookies per hour and total sales
function cookieCounter(cart) {
  for (var i = 0; i < cart.hours.length; i++) {
    var cookiesPerHour = Math.round(cart.cusGen() * cart.avSale);
    cart.sales.push (cookiesPerHour);
  }
  var saleSum = 0;
  for (var i = 0; i < cart.sales.length; i++) {
      saleSum +=cart.sales[i];
  }
  cart.cooSum.push (saleSum);
};

// Run the cookie counter for all objects in carts array
function runCalc() {
  for (var i = 0; i < Carts.length; i++) {
    cookieCounter(Carts[i]);
  }
};

// Add a row to the cookie chart
function addRow(cart) {
  var table = document.getElementById('cookieData');
    var row = table.insertRow(0);
    var cell = row.insertCell(0);
    var text = document.createTextNode(cart.cooSum+ " cookies");
    cell.appendChild(text);
    for (var i = 0; i < cart.sales.length; i++) {
      var cartSales = cart.sales[i];
      cell = row.insertCell(0);
      text = document.createTextNode(cartSales);
      cell.appendChild(text);
    }
    cell = row.insertCell(0);
    text = document.createTextNode(cart.loc);
    cell.appendChild(text);
}

//Generate the cookie cart rows
function runChart() {
  for (var i = 0; i < Carts.length; i++) {
    addRow(Carts[i]);
  }
}

//Run key functions on load
window.onload = function() {
  runCalc();
  runChart();
};

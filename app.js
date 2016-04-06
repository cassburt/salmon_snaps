
// Cart object constructor
var Cart = function(cartLocation, minCustomer, maxCustomer, avSale, sales_per_hour, total_sales) {
  this.loc = cartLocation;
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
function cookieCounter(Cart) {
  for (var i = 0; i < Cart.hours.length; i++) {
    var cookiesPerHour = Math.round(Cart.cusGen() * Cart.avSale);
    Cart.sales.push (cookiesPerHour);
  }
  var saleSum = 0;
  for (var i = 0; i < Cart.sales.length; i++) {
      saleSum +=Cart.sales[i];
  }
  Cart.cooSum.push (saleSum);
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

//Form Submission
function evaluateForm(submittedForm) {
  var formIsValid = true;
  if (submittedForm.cartLocation.value == "") {
    submittedForm.cartLocation.setAttribute("class", "required");
    formIsValid = false;
  }
  if (submittedForm.minCustomer.value == "") {
    submittedForm.minCustomer.setAttribute("class", "required");
    formIsValid = false;
  }
  if (submittedForm.maxCustomer.value == "") {
    submittedForm.maxCustomer.setAttribute("class", "required");
    formIsValid = false;
  }
  if (submittedForm.avSale.value == "") {
    submittedForm.avSale.setAttribute("class", "required");
    formIsValid = false;
  } 
  var loc = submittedForm.cartLocation.value;
  var minCus = submittedForm.minCustomer.value;
  var maxCus = submittedForm.maxCustomer.value;
  var avSale = submittedForm.avSale.value;
  var newCart = new Cart(loc, minCus, maxCus, avSale, [], []);
  if (formIsValid) {
    Carts.push(newCart);
    cookieCounter(newCart);
    addRow(newCart);
  }
}

//Run key functions on load
window.onload = function() {
  runCalc();
  runChart();
};

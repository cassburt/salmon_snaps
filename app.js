var Cart = function (location, minimumCustomers, maximumCustomers, averageSale, sales) {
  this.loc = location;
  this.minCus = minimumCustomers;
  this.maxCus = maximumCustomers;
  this.avSale = averageSale;
  this.sales = sales;
  this.hours =  ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "];
  this.cusGen = function() {  //Function to generate a random # of customers based on car max/min
    return Math.random() * (this.maxCus - this.minCus) + this.minCus;
  };
};
var pioSqu = new Cart("Pioneer Square", 17, 88, 5.2, []);
var porAir = new Cart("Portland Airport", 6, 24, 1.2, []);
var wasSqu = new Cart("Washington Square", 11, 38, 1.9, []);
var selWoo = new Cart("Sellwood", 20, 48, 3.3, []);
var peaDis = new Cart("Pearl District", 3, 24, 2.6, []);

function cooCou(cart) { //Cookie Counter: Counts # of cookies / hour
  for (var i = 0; i < cart.hours.length; i++) {
    var cPh = Math.round(cart.cusGen() * cart.avSale);
    cart.sales.push (cPh);
  };
};

function disSal(cart, listID) {  //Display Sales: Displays sales as unordered list
  var perHour = "";
  for (var saleIndex = 0; saleIndex < cart.sales.length; saleIndex++) {
    perHour += "<li>" + cart.hours[saleIndex] + cart.sales[saleIndex] + " cookies" + "</li>";
  }
  var sum = cart.sales.reduce(function(pv, cv) { return pv + cv; }, 0);
  document.getElementById(listID).innerHTML = perHour + "Total: " + sum + " cookies";
};

window.onload = function() { //note: turn these into for loops
  copCou(pioSqu);
  cooCou(porAir);
  cooCou(wasSqu);
  cooCou(selWoo);
  cooCou(peaDis);
  disSal(pioSqu, id="pioneer");
  disSal(porAir, id="airport");
  disSal(wasSqu, id="washington");
  disSal(selWoo, id="sellwood");
  disSal(peaDis, id="pearl");
};

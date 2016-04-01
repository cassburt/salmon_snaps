var cart = function(location, minCus, maxCus, avSale, sales) {
  this.location = location;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avSale = avSale;
  this.sales = sales;
  this.hours = ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "];
  this.cusGen = function() {    // Random # of customers based on cart max/min
    return Math.random() * (this.maxCus - this.minCus) + this.minCus;
  };
}

function coCo(cart) {  //Calcs an array of cookies per hour
  for (var i = 0; i < cart.hours.length; i++) {
    var cPh = Math.round(cart.cusGen() * cart.avSale);
    cart.sales.push (cPh);
  }
};

var piosqu = new cart("Pioneer Square", 17, 88, 5.2, []);
var porair = new cart("Portland Airport", 6, 24, 1.2, []);
var wassqu = new cart("Washington Square", 11, 38, 1.9, []);
var selwoo = new cart("Sellwood", 20, 48, 3.3, []);
var peadis = new cart("Pearl District", 3, 24, 2.6, []);


function shSa(cart, listID) {  //Function: Shows sales as unordered list
  var perHour = "";
  for (var saleIndex = 0; saleIndex < cart.sales.length; saleIndex++) {
    perHour += "<td>" + cart.sales[saleIndex] + " cookies" + "</td>";
  }
  /*var sum = cart.sales.reduce(function(pv, cv) { return pv + cv; }, 0);*/
  document.getElementById(listID).innerHTML = perHour;
};

window.onload = function() { //note: turn these into for loops
  coCo(piosqu);
  coCo(porair);
  coCo(wassqu);
  coCo(selwoo);
  coCo(peadis);
  shSa(piosqu, id="cartOne");
  shSa(porair, id="cartTwo");
  shSa(wassqu, id="cartThree");
  shSa(selwoo, id="cartFour");
  shSa(peadis, id="cartFive");
};

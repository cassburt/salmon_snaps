var cartOne = {           // Object: Salmon cookie cart
  loc: "Pioneer Square",  // Location of cart
  hours:  8,              // # of hours the cart is open
  minCus: 17,             // Min # of customers per hour
  maxCus: 88,             // Max # of customers per hour
  avSale: 5.2,            // Av # of cookies per sale
  sales: [],              // Array for cart sales
  cusGen: function() {    // Random # of customers based on cart max/min
    return Math.random() * (this.maxCus - this.minCus) + this.minCus;
  }
};

var cartTwo = {            // Object: Salmon cookie cart
  loc: "Portland Airport", // Location of cart
  hours:  8,               // # of hours the cart is open
  minCus: 6,               // Min # of customers per hour
  maxCus: 24,              // Max # of customers per hour
  avSale: 1.2,             // Av # of cookies per sale
  sales: [],               // Array for cart sales
  cusGen: function() {     // Random # of customers based on cart max/min
    return Math.random() * (this.maxCus - this.minCus) + this.minCus;
  }
};

var cartThree = {            // Object: Salmon cookie cart
  loc: "Washington Square",  // Location of cart
  hours:   8,                // # of hours the cart is open
  minCus: 11,               // Min # of customers per hour
  maxCus: 38,               // Max # of customers per hour
  avSale: 1.9,              // Av # of cookies per sale
  sales: [],                // Array for cart sales
  cusGen: function() {      // Random # of customers based on cart max/min
    return Math.random() * (this.maxCus - this.minCus) + this.minCus;
  }
};

var cartFour = {           // Object: Salmon cookie cart
  loc: "Sellwood",         // Location of cart
  hours:  8,              // # of hours the cart is open
  minCus: 20,             // Min # of customers per hour
  maxCus: 48,             // Max # of customers per hour
  avSale: 3.3,            // Av # of cookies per sale
  sales: [],              // Array for cart sales
  cusGen: function() {    // Random # of customers based on cart max/min
    return Math.random() * (this.maxCus - this.minCus) + this.minCus;
  }
};

var cartFive = {           // Object: Salmon cookie cart
  loc: "Pearl District",   // Location of cart
  hours:   8,              // # of hours the cart is open
  minCus:  3,              // Min # of customers per hour
  maxCus: 24,             // Max # of customers per hour
  avSale: 2.6,            // Av # of cookies per sale
  sales: [],              // Array for cart sales
  cusGen: function() {    // Random # of customers based on cart max/min
    return Math.random() * (this.maxCus - this.minCus) + this.minCus;
  }
};

function shSa(cart) {         //Function: Shows sales as unordered list
  var perHour = "";
  for (var i = 0; i < cart.sales.length; i++) {
    perHour += "<li>" + cart.sales[i] + " cookies" + "</li>";
  }
  document.getElementById("listSpace").innerHTML = cart.loc + perHour;
}

function coco(cart) {     //Calcs an array of cookies per hour
  for (var i = 0; i < cart.hours; i++) {
    var cPh = Math.floor(cart.cusGen() * cart.avSale);
    cart.sales.push (cPh);
  }
};

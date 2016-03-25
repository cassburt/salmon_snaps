  var Store1 = {
  location: 'Pioneer Square',
  hours: 8,
  minCus: 17,
  maxCus: 88,
  avSale: 5.2, 

  genCust: function() {
   return Math.floor(Math.random() * (this.maxCus - this.minCus + 1)) + this.minCus;
 }
};
var custAv = Store1.genCust();
function test() {
 alert("You have "+custAv+" customers");

};

 var Store2 = {
  location: 'Portland Airport',
  hours: 8,
  minCus: 6,
  maxCus: 24,
  avSale: 1.2,

  genCust: function() {
   return Math.floor(Math.random() * (this.maxCus - this.minCus + 1)) + this.minCus;
 }
};
var custAv = Store2.genCust();
function test() {
 alert("You have "+custAv+" customers");
};



 var Store3 = {
  location: 'Washington Square',
  hours: 8,
  minCus: 11,
  maxCus: 38,
  avgSale: 1.9,
  genCust: function() {
   return Math.floor(Math.random() * (this.maxCus - this.minCus + 1)) + this.minCus;
 }
};
var custAv = Store3.genCust();
function test() {
 alert("You have "+custAv+" customers");

};



 var Store4 = {
  location: 'Sellwood',
  hours: 8,
  minCus: 20,
  maxCus: 48,
  avgSale: 3.3,
  genCust: function() {
   return Math.floor(Math.random() * (this.maxCus - this.minCus + 1)) + this.minCus;
 }
};
var custAv = storeOne.genCust();
function test() {
 alert("You have "+custAv+" customers");
};
};


 var Store5 = {
  location: 'Pearl District',
  hours: 8,
  minCus: 3,
  maxCus: 24,
  avSale: 2.6,
};


 


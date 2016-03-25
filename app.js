var storeOne = {
  location: "Pioneer Square",
  hours: 8,
  minCus: 17,
  maxCus: 88,
  avSale: 5.2,
  genCust: function() {
    return Math.floor(Math.random() * (this.maxCus - this.minCus + 1)) + this.minCus;
  }
};
var custAv = storeOne.genCust();
function test() {
  alert("You have "+custAv+" customers");
};

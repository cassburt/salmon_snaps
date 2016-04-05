
function createTable() {
  var chart = document.getElementsByTagName("body")[0];
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

for (var i = 0; i < cart.length; i++) {
  var tHeadRow = document.createElement("tr");
  var tHeadCell = document.createElement("td");
  var headText = document.getElementById('id')(cart.loc);
  tHeadCell.appendChild(headText);
  tHeadRow.appendChild(tHeadCell);
  tblBody.appendChild(tHeadRow);
}


  /*for (var i = 0; i < 8; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < 5; j++) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode("cell in row "+i+", column "+j);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }*/

  tbl.appendChild(tblBody);
  chart.appendChild(tbl);
  tbl.setAttribute("border", "2");
}

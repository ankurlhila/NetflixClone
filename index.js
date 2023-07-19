var elems = document.getElementsByClassName("disp");
var elems2 = document.getElementById("disp");
function sign() {
  for (var i = 0; i < elems.length; i += 1) {
    elems[i].style.display = "none";
    elems2.style.display = "block";
  }
}

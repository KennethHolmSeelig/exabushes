# exabushes

in js client add alias
´´´js
function reqListener () {
  eval(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://cdn.jsdelivr.net/gh/KennethHolmSeelig/exabushes/compiled.js");
oReq.send();
´´´

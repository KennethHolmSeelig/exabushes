# exabushes

in js client add alias
```js
window.gwc = gwc;
function reqListener () {
  eval(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://cdn.jsdelivr.net/gh/KennethHolmSeelig/exabushes/compiled.js");
oReq.send();
```

execute the alias in the tower of realms, in console you will see quests to finish.
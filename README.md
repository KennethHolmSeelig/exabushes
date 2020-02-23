# exabushes

in js client add alias 'exabushes'
```js
window.gwc = gwc;
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.jsdelivr.net/gh/KennethHolmSeelig/exabushes/compiled.js';

document.head.appendChild(script);
```

execute the alias in the tower of realms this will record all quests in all realms that you are missing

in console you will see quests to finish.
A javascript object has been created that can be accessed. In browser console do:
```
exabushes.quests('sparkle')
>
Quests you need to finish in Sparkle:
 0 - Orc Figurine
>
exabushes.quests('sparkle', 0)
>
title: Orc Figurine
links:
  - http://genesisquests.pbworks.com/w/page/52001987/Sparkle%20-%20Orc%20Figurine
hints: |
 requires awreness and light source level 2
difficulty: 0
deadly: false
start: Church in Sparkle
solve:
 - description: Orc
 #comma separated or array form
   actions: s, w, n, 7w, n, w, n, e, ask orc help
 - description: Figurine
   actions: w, 2n, w, 2n, enter hole, light lamp, search here, get figurine
 - description: Orc
   actions: enter hole, 2s, e, 2s, e, give figurine to orc
 - description: Back to start
   actions: w, s, e, s, 7e, s, e, n
```

To send an action sequence to the client, do the following:
```
exabushes.doAction('sparkle', 0)
>
Executing action 'Orc' for quest 'Orc Figurine'
Actions sent: s, w, n, 7w, n, w, n, e, ask orc help
```

## TODO:
 * Save state to a cookie in case of browse exit.
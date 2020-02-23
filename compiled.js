if (!gwc) {
  var gwc = window.gwc;
}
gwc.connection.send('quests');
function quests() {
    var questMap = {
	  'Orc Figurine': false,
	  'Enchant thing': false
	};
	var lines = document.getElementsByClassName('line');

	let questLineFound = false;
	for(var i = 0; i < lines.length;i++) {
	  var line = lines[i];
		if (questLineFound) {
		  let questKeys = Object.keys(questMap);
		  for (var k = 0; k < questKeys.length; k++) {
		    if (line.textContent.indexOf(questKeys[k]) > -1){
			   questMap[questKeys[k]] = true;
			}
		  }
		} else {
			if (line.textContent.indexOf('quests in Sparkle') -1) {
				questLineFound = true;
			}
		}
	}
    let questKeys = Object.keys(questMap);
	console.log('You need to finish:');
	for (var k = 0; k < questKeys.length; k++) {
	  if (questMap[questKeys[k]] === false) {
		console.log(questKeys[k]);
	  }
	}
}

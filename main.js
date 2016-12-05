var inputNum = document.getElementById("treeHeight");
var inputNum = document.getElementById("treeElement");



var tree = function(treeBuilder){

  for (var i = 1; i <= treeBuilder.height.value; i++) {
    var lineToWrite = '';
    var numberOfSpacesToDraw = mytreeBuilder.height.value - i;
    for (var j = 1; j <= numberOfSpacesToDraw; j++) {
      lineToWrite += ' ';
    }
    var numberOfCharactersToDraw = (i -1) + i;
    for (var k = 1; k <= numberOfCharactersToDraw; k++) {
      lineToWrite += treeBuilder.characters.value;
    }
    console.log(lineToWrite);
  }
}
  
  var mytreeBuilder = {};
  mytreeBuilder.height = {value: 7};
  mytreeBuilder.characters = {value: 'a'}
  tree(mytreeBuilder);

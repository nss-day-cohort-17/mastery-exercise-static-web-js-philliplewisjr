


    //
    var gatherInputAndBuildTree = function(){
          var treeBuilder = gatherInput();
          drawTree(treeBuilder);
    } 

    function keypressEvent(eventArgs) {
      if (eventArgs.keyCode === 13) {
        var inputErrorMessage = validateInput();
          if(inputErrorMessage === ''){
            gatherInputAndBuildTree();
          }else{
            alert(inputErrorMessage);
          }
      }
    }
//checks to see if user inputs correct character and character length and number
var validateInput = function(){
  var heightFieldValue = document.getElementById("treeHeight").value; 
  var characterFieldValue = document.getElementById("treeElement").value;
  if (heightFieldValue === "") {
    return "You must enter a numerical value for height";
  }else if (characterFieldValue === "") {
    return "You must enter a character value";
  }else if(isNaN(heightFieldValue)){
return "height must be a number";
  } else if (characterFieldValue.length !== 1) {
    return "Only one character is allowed.";
  }
  return "";
};

//input object data function that provides key value pair for the object
    function gatherInput () {
    var mytreeBuilder = {};
    var inputNum = document.getElementById("treeHeight");
    var inputChar = document.getElementById("treeElement");
    mytreeBuilder.height = inputNum.value;
    mytreeBuilder.characters = inputChar.value;
    return mytreeBuilder;
    //tree(mytreeBuilder);
    }


    // tree building function
   var drawTree = function(treeBuilder) {

   for (var i = 1; i <= treeBuilder.height; i++) {
     var lineToWrite = '';

    var numberOfSpacesToDraw = treeBuilder.height - i;
    for (var j = 1; j <= numberOfSpacesToDraw; j++) {
      lineToWrite += ' ';
    }
    var numberOfCharactersToDraw = (i - 1) + i;
    for (var k = 1; k <= numberOfCharactersToDraw; k++) {
      lineToWrite += treeBuilder.characters;
    }
    console.log(lineToWrite);
  }
}



//eventListener for submit button and error message for empty input field
  var b1 = document.getElementById("goGreen");
  b1.addEventListener("click", function(){
    var inputErrorMessage = validateInput();
          if(inputErrorMessage === ''){
            gatherInputAndBuildTree();
          }else{
            alert(inputErrorMessage);
          }

  });

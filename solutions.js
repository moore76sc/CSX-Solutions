let solutions = { //object including all of our solutions for recursion chapter
  'repeater' :['function repeater (char, count = 5) {', '\u2003'+'if (count === 1) {return char};', '\u2003'+'const newChar = char + char[0];', '\u2003'+'const newCount = count - 1;', '\u2003'+'return repeater(newChar, newCount);', '};', '***This is only one of many possible solutions***'],
  'factorial' : ['function factorial (num) {', '\u2003'+'if (num === 0) {return 1}', '\u2003'+'return num * factorial(num - 1)', '};', '***This is only one of many possible solutions***'],
  'get-length' : ['function getLength (array, output = 0) {', '\u2003'+'if (!array[0]) {return output}', '\u2003'+'if (!array[0]) {return output}', '\u2003'+'\u2003'+'array.pop()','\u2003'+'const newOutput = output + 1', '\u2003'+'return getLength(array, newOutput)', '};', '***This is only one of many possible solutions***'],
  'pow' : ['function pow(base, exponent) {', '\u2003'+'if (!exponent) {return 1}}', '\u2003'+'if (!exponent) {return 1}', '\u2003'+'return base * pow(base, exponent - 1)', '};', '***This is only one of many possible solutions***'],
  'flow' : ['function flow(input, funcArray) {', '\u2003'+'if (!funcArray[0]) {return input}', '\u2003'+'const newInput = funcArray[0](input)', '\u2003'+'funcArray.shift()', '\u2003'+'return flow(newInput, funcArray)', '};', '***This is only one of many possible solutions***'],
  'shuffle-cards' : ['function shuffleCards(topHalf, bottomHalf,i = 0, output = []) {', '\u2003'+'if (!topHalf[i] && !bottomHalf[i]) {return output}', '\u2003'+'const newOutput = output;', '\u2003'+'if (topHalf[i]){newOutput.push(topHalf[i]);}', '\u2003'+'if (bottomHalf[i]){newOutput.push(bottomHalf[i]);}','\u2003'+'const newI = i + 1;', '\u2003'+'return shuffleCards(topHalf, bottomHalf,newI, newOutput)', '};', '***This is only one of many possible solutions***'],
  'cascade' : ['function cascade(number) {', '\u2003'+'if (typeof(number) === "number") {', '\u2003'+'\u2003'+'if (number < 0) {number = Math.abs(number)};', '\u2003'+'if (number < 10) return;}', '\u2003'+'\u2003'+'cascade(Math.floor(number/10));','};', '***This is only one of many possible solutions***']
}



function solutionsInjector(currentSolution) {
  const placeHolder = document.getElementById("solutions-input");//pulling our input area class from index.html
  const newNode = document.createElement('div'); //creating our element to put our solution in
  //newNode.setAttribute('height', '300px')
  //const newContent = document.createTextNode(currentSolution)
  //newNode.appendChild(newContent)
  //newNode.innerHTML(`${currentSolution}`);
  placeHolder.appendChild(newNode); //appending our new element to the solutions-input class div
   //injecting the solution as text into our element
  for (let i = 0; i < currentSolution.length; i++) {
    const newLi = document.createElement('ul');
    newLi.setAttribute("list-style-type", "none");
    const newContent = document.createTextNode(currentSolution[i]);
    newLi.appendChild(newContent)
    newNode.appendChild(newLi)
   };
}

function solutionSelector(solutionsObject) {
  let currentWindow = ""
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    trialAndError(tabs[0].url, solutionsObject)
    return currentWindow = tabs[0].url;
    
});}
   //grabbing current url 'https://csx.codesmith.io/units/recursion/challenge-repeater'
  function trialAndError (currentWindows, solutionsObject) {
  const solutionNames = ['repeater', 'factorial', 'get-length', 'pow', 'flow', 'shuffle-cards', 'cascade']; //array solution names
  
  for (let i = 0; i < solutionNames.length; i++) { //for loop to iterate over solution names
    if(currentWindows.includes(solutionNames[i])) { //checking if solution name at index is contained in the url
      const output = solutionsObject[solutionNames[i]]//.toString(); //if true it will pull the solution for our solutaion name from the solutions object and convert to string
      solutionsInjector(output); //passing in our solution into solutions injector function
    };
  };
};

setTimeout( () => {
const button = document.getElementById("solution-button")
button.addEventListener("click", () => {solutionSelector(solutions)}); 
}, 1000)
 
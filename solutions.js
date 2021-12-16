let solutions = { //object including all of our solutions for recursion chapter
  'repeater' : `function repeater (char, count = 5) {
  if (count === 1) {return char};
    const newChar = char + char[0];
   const newCount = count - 1;
  return repeater(newChar, newCount);
}`,
  'factorial' : function factorial (num) {
  if (num === 0){return 1}
  return num * factorial(num-1)
},
  'get-length' : function getLength (array, output=0) {
	if(!array[0]){return output}
  array.pop()
  const newOutput = output + 1
  return getLength(array, newOutput)
},
  'pow' : function pow(base, exponent) {
if(!exponent){return 1}
  return base * pow(base, exponent-1)
},
  'flow' : function flow(input, funcArray) {
  if(!funcArray[0]){return input}
  const newInput = funcArray[0](input)
  funcArray.shift()
  return flow(newInput, funcArray)
},
  'shuffle-cards' : function shuffleCards(topHalf, bottomHalf,i=0, output =[]) {
	if(!topHalf[i] && !bottomHalf[i]){return output}
  const newOutput = output
  if(topHalf[i]){newOutput.push(topHalf[i]);}
  if(bottomHalf[i]){newOutput.push(bottomHalf[i]);}
  const newI = i + 1
  return shuffleCards(topHalf, bottomHalf,newI, newOutput)
},
  'cascade' : function cascade(number) {
  if (typeof(number)==="number") {
  	if (number<0) {number = Math.abs(number)};
  	console.log(number);
  	if (number < 10) return;
  	cascade(Math.floor(number/10));
  	console.log(number);
  };
}
}


function solutionsInjector(currentSolution) {
  const placeHolder = document.getElementById("solutions-input");//pulling our input area class from index.html
  const newNode = document.createElement('div'); //creating our element to put our solution in
  newNode.setAttribute('height', '300px')
  const newContent = document.createTextNode(`${currentSolution}`)
  newNode.appendChild(newContent)
  //newNode.innerHTML(`${currentSolution}`);
  placeHolder.appendChild(newNode); //appending our new element to the solutions-input class div
   //injecting the solution as text into our element
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
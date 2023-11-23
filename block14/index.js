const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];
 /*
//remove the first elements 
myInstruments.shift();

//removes the last element
myInstruments.pop();

//add the element in the first index
myInstruments.unshift("kazu");

// add new in  the last index
myInstruments.push("ori");
*/ 

//add those strings
myInstruments.push("tuba", "basson");

// remove 1 element on index 2
myInstruments.splice(2, 1);

//add saxsaphone as index 1
myInstruments.unshift("Saxaphone");

console.log(myInstruments);
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

// ამატებს პირველ ეელემნტად
myInstruments.unshift("saxophone");

// დროებით აქრობს პირველ ორ ელემენტს:  saxa, flute
const firstTwo = myInstruments.slice(2);

// პრინტავს მხოლოდ ინდექს : 3 და 5 ის ელემენტებს.
const lastTwo = myInstruments.slice(3, 5);
console.log(lastTwo);

console.log(myInstruments);
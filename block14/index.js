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
// get the first index element (და თან ეს აგდებს ამ ელემენტს, როგორც ჩანს, რადგნა ქვედა ფუნქციამ მეორე ინდექსით დაწყო)
const first = myInstruments.shift();


console.log(first);

// II მეორენაირად 

function getFirstInstrument(instruments) {
    return myInstruments[0];
  }; 
console.log(getFirstInstrument());

// ბოლოს ელემენტის მიღება    
//ამისთვის ვიყენებთ დამატებით ცვლადს, რადგან ინექსის ნომერი უნდა დააბრუნოს ამ ფუნქციამ და თუ პირდაპირ length - 1 არ გამოვა

function getLastInstrument(instruments) {
    const index = myInstruments.length - 1;
    return myInstruments[index];

    // ან პირდაპირ  return instruments[instruments.length - 1];
};

 console.log(getLastInstrument());

 // removing the last element - ასევე მოგცემდა ერეის ბოლო ელემენტს.

function getLastInstrument(instruments) {
    
    return myInstruments.pop();
};

console.log(getLastInstrument());
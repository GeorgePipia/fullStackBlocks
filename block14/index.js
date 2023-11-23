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

function getFirstAndLastInstruments(instruments) {
    const output = [];
    output.push(myInstruments[0]);
    output.push(myInstruments[myInstruments.length - 1]);
    return output; 
}

console.log(getFirstAndLastInstruments());

// Get the first 3 elements

function getFirstThreeInstruments(instrum) {
    const output = [];
    output.push(myInstruments[0]);
    output.push(myInstruments[1]);
    output.push(myInstruments[2]);
    return output;
  
  }

  console.log(getFirstThreeInstruments());
// Better way with loop 

function getThree(instrum) {
    const output = [];
    for (let i = 0; i < 3; i++) {
        //outputში დაამატე myინსტის ინდექსში მყოფი
        output.push(myInstruments[i]);
    }

    return output;
}

console.log(getThree());

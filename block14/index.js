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

function getT(inst) {
    out = []; // შექმენი დამატებითი ერრეი რომელშიც ამ ელემენტებს ჩააწყობ
    for (let i = 0; i < myInstruments.length; i++) { //ყველა ელემენტს დაუვლის
        const instumenti = myInstruments[i];  //გვჭირდება, რომ ელემენტში, პირველ ინდექსი შეამოწმოს, ამიტომ ქმნი 
                                         // დამატებით ცვლადს - გასათითეობლად, რომელშიც ერეის ელემენტები შევლენ სათითაოდ
        if( instumenti[0] === "t") {    //თითოეული ელემნტისთვის, 0 ინდექსს შეადრებს სტრინგ tს
            out.push(myInstruments[i]);  //out ში შეიყვანს, მაიინსტურმენტის შესაბმის ელემენტს
        }
    }
    return out;    // დაბრუნება შესული ელემენტების.
}

console.log(getT());
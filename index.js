//step 1; propmt the user with this object

const welcome = prompt("Enter Flavors",
                        "Vanilla,Vanilla,Vanilla,Strwaberry,Cofee,Cofee");


//step 2; split at "," and turn it to an array  - you can console this.
const userResponse = welcome.split(',');

//step 3; need to Object : elements as a keys and amount of them as a values of this keys 

function returnInfo (a) {  //ეს მიიღებს ზემოთ რა ერეიდაც იყოფა ინფორმაცია "vanil...."
    const hashtable = {}; //ქმნი ახალ objectს. იმისთვის, რომ მერე მასში დააბრუნო დალუპული ინფო 
    for (let i = 0; i < a.length; i++) {
        const item = a[i];
        if (hashtable[item] === undefined) {
            hashtable[item] = 1;
        }
        else {
            hashtable[item] +=1;
        }
        
    }
    return hashtable;
}



console.log(returnInfo(userResponse));
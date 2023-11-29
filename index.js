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
        if (hashtable[item] === undefined) {  // თუ ობიექტ hashtable ში item არის undefined ანუ თუ ჯერ  არ არსებობს, და პირველია,
            hashtable[item] = 1;    // მაშინ hashtableში item ების რაოდენობა = 1;
        }
        else {
            hashtable[item] +=1;
        }
        
    }
    return hashtable;
}



console.log(returnInfo(userResponse));


/* ქმნი prompsს, რომელსაც არქმევ welcome. თვითონ პრომპს აქვს ორი არგუმენტი;
რაც მძიმემდეა დაეწერება პრომპს ზემოდან, მეორე კი, იქნება მასში - როგორც სტრინგი.

პრომპში არსებული სტრინგი უნდა ვაქციოთ ერეიდ, split ფუნქციის დახმარებით, რომელსაც ვარქმევთ userResponse;

ქმნი ფუნქციას, რომელიც ღებულობს არგუმენტს, მაგრამ ამ ეტაპზე ფუნქციამ არ იცის, რომ ეს ერრეია 
ამას იგებს ამოპრინტვის ეტაპზე - როცა ფუნქცია returnInfo(userResponse) შედის ერრეი ამ ფორმით.

იქამდე კი არის როგორც ფუნქცია. ფუნქციაში ქმნი ახალ ობიექტს, რადგან objectის ფორმით უნდა ამოიპრინტოს
დამუშავებული ინფორმცია key: value წყვილებად.

და იწყებ ლუპს, ერეიში, ყოველი ელემენტისთვის, - ყოველი ელემენტის მნიშვნელობა მიეწერა item -ს 

თუ ობიექტ hashtable ში item არის undefined ანუ თუ ჯერ  არ არსებობს, და პირველია, მაშინ hashtableში item ების რაოდენობა = 1;

თუ ეს item უკვე არის, ბუნებრივია, პირველი არ არის და defined იქნება და გაიზარდოს value +=1ით

მიღებული შედეგი დააბრუნე hashtabeში    */
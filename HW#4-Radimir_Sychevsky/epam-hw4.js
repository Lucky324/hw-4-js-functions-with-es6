//1
let splitAndMerge = (sentence, separator) => {
    let ans = "";
    let words = sentence.split(" ");

    words.forEach((element) => {
        let w = element.split("");
        ans += w.join(separator) + ' ';
    });
    return ans.slice(0,-1);
};
console.log(splitAndMerge("It's alive!","?"));

//2
let converter = (hash) => {
    let converted = [];
    for (let i in hash) {
        converted.push([i, hash[i]]);
    }
    return converted;
};
some_hash = {name: 'Jeremy', age: 24, role: 'Software Engineer'};
console.log(converter(some_hash));

//3
let toCamelCase = (str) => {
    str = str.split('-').join('_');
    let words = str.split("_");
    let ans = words.shift();
    words.forEach(element =>{
        let letters = element.split("");
        letters[0] = letters[0].toUpperCase();
        ans += letters.join("")
    });
    return ans;
};
console.log(toCamelCase("the-stealth-warrior")); // returns "theStealthWarrior"
console.log(toCamelCase("The_stealth_Warrior")); // returns "TheStealthWarrior"

//4
let reverseStr = (str) => {
    let words = str.split(" ");
    return words.map(element => {
        return element.split("").reverse().join("");

    }).join(" ");
};
console.log(reverseStr(" A fun little challenge! "));
//" A fun little challenge! " => " A nuf elttil !egnellahc "


//5
let stringExpansion = (str) => {
    let ans = "";
    if (str.search(/\d/) == -1) {
        return str;
    }
    let number = /\d/;
    let letter = /[A-z]/;
    str = str.split("");
    for(let i = 0; i<str.length; i++){
        if(str[i].match(number) && str[i+1].match(letter)){
            ans += str[i+1].repeat(str[i]);
            i++;
            continue;
        }
    }
    return ans;
};
console.log(stringExpansion('3D2a5d2f')); //=== 'DDDaadddddff'

//6
let largest=(...args)=> Math.max(...args);
let smallest=(...args)=> Math.min(...args);

console.log(largest(2, 0.1, -5, 100, 3)); // 100
console.log(smallest(2, 0.1, -5, 100, 3)); // -5

//7
let transform = (arr) => {return arr.map((item) => () => item);};

let baseArray = [10, 20, 30, 40, 50];
let newArray = transform(baseArray);
console.log(newArray[3]()); // should return 40
console.log(newArray[4]()); // should return 50

//8
let sum = (...args) => {
    if (args.length == 0)
        return 0;
    return args[0] + sum(...args.slice(1));
};

console.log(sum(1,3,5,7)); //should return 16

//9
let countDown = (countTime) =>{
    timer = setInterval(() => {
        if(countTime < 0){
            clearInterval(timer)
        } else {
            console.log(countTime);
        }
        countTime--;
    }, 1000);
};
countDown(3); // 3 2 1 0


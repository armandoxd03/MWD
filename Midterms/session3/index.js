// Repetition Control Structures
// While Loop

let loop1 = 0;
while(loop1 <= 5){
    console.log("WHILE: " + loop1);
    loop1++;
}

//Do-While Loop
let loop2 = 0;

do{
    console.log("Do: " + loop2);
    loop2++
}while(loop2 <= 5);

//For Loop
for(let i = 0; i <= 10; i++){
    console.log("FOR: " + i);
}

let name = "jOhn doE";
console.log(name.length);

for(let i =0; i < name.length; i++){
    console.log(name[i])
}


console.log("SELECTION AND CONTROL");
for(let i = 0; i < name.length; i++){
    if (name[i].toLowerCase() == "a" ||
    name[i].toLowerCase() == "e" ||
    name[i].toLowerCase() == "i" ||
    name[i].toLowerCase() == "o" ||
    name[i].toLowerCase() == "u"
    ){
        console.log(1);
    }else{
        console.log(name[i]);
    }
}


console.log("SELECTION AND CONTROL");
for(let i = 0; i < name.length; i++){
    if (name[i].toLowerCase() == "b" ||
    name[i].toLowerCase() == "c" ||
    name[i].toLowerCase() == "d" ||
    name[i].toLowerCase() == "f" ||
    name[i].toLowerCase() == "g" ||
    name[i].toLowerCase() == "h" ||
    name[i].toLowerCase() == "j" ||
    name[i].toLowerCase() == "k" ||
    name[i].toLowerCase() == "l" ||
    name[i].toLowerCase() == "m" ||
    name[i].toLowerCase() == "n" ||
    name[i].toLowerCase() == "p" ||
    name[i].toLowerCase() == "q" ||
    name[i].toLowerCase() == "r" ||
    name[i].toLowerCase() == "s" ||
    name[i].toLowerCase() == "t" ||
    name[i].toLowerCase() == "v" ||
    name[i].toLowerCase() == "w" ||
    name[i].toLowerCase() == "x" ||
    name[i].toLowerCase() == "y" ||
    name[i].toLowerCase() == "z" 
    ){
        console.log("*");
    }else{
        console.log(name[i]);
    }
}
// function sum (a,b){ 
//return a+b;
//}
//console.log(`1+2 = ${sum(1,2)}.`);


// let str ='Привет мир меня зовут';
// let target = 'мир';
// let pos =0 ;
// while(true){
//     let foundPos = str.indexOf(target,pos);
//     if(foundPos == -1)break;
//     console.log(`Найдено тут - ${foundPos}`);
//     pos = foundPos + 1;
// }


// let value = true;
// value = String(value);
// alert(typeof value);
// console.log(value);

 

// let small = "привет";
// console.log(`Верхний регистр - ${small.toUpperCase()}`);
// console.log(`Нижний регистр - ${small.toLowerCase()}`);



// let words = "привет мир";
// console.log(words.includes("мир"));



// let wordss = 'hello everyone';
// let w =wordss.slice(0,5);
// console.log(w);



// let hello = "hello";
// for(let i of hello){
// console.log(i+ ",");
// }



// var word = "StackOverflow";
// var array = word.split("");
// console.log("новый массив "+ array);
// console.log(`массив содержит: ${array.length} элементов`);



// function ar(str , space){
// var arra = str.split(space); 

// console.log("Original - " + str);
// console.log(`Split - ${arra}`);
// }
// var line = "Hello Everyone!";
// var s = "";

// ar(line ,s);



//  let somewords = "привет мир";
//  let str = "мир";
//  if(somewords.includes(str))
//      console.log("содержит");
//  else
// console.log("не содержит")


//1
let line = "Я изучаю JavaScript";
console.log(`Третий символ - ${line.slice(3,4)}`);
console.log(`Первый символ - ${line[0]}`);
console.log(`Последний символ - ${line[line.length - 1]}` );
console.log("Замена слова JavaScript на Frontend");
var re = /JavaScript/gi;
var newstr = line.replace(re, 'Frontend');
console.log(`Замена слова - ${newstr}`);
console.log("Замена символа ю на другой ");
var r = /ю/gi;
var news = line.replace(r, 'л');
console.log(`Замена символа - ${news}`);


 

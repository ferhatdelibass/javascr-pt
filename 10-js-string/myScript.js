// let text = "bu bir \" extra \" stringdir"
// console.log(text)
// let text2 = "istersek \t bir tab boşluk bırakabiliriz.İstersek \n yeni satıra da geçebliriz"
// console.log(text2)
// let text3 = "bu birinci metindir" + 
// " bu ikinci metindir"
// console.log(text3)


// let text = "ASFNDNFSLM"
// let length = text.length
// console.log(length)

// slice(başlangıçPozisyonu, bitis pozisyonu -bitiş dahil değil-)

// let text = "Apple, Banana, Kiwi"
// let part = text.slice(7,13)
// console.log(part)
// let part2 = text.slice(7)
// console.log(part2)
// let part3 = text.slice(0)
// console.log(part3)
// let part4 = text.slice(-5)
// console.log(part4)
// let part5 = text.slice(-7,17)
// console.log(part5)

// let text = "Apple, Banana, Kiwi"
// let part = text.substring(7,13)
// console.log(part)
// //substring negatif ifadeyi sıfır olarak kabul eder.
// let part2 = text.substring(-5)
// console.log(part2)

// substr(start,length)
// let text = "Apple, Banana, Kiwi"
// let part = text.substr(7,5)
// console.log(part)

// let text = "Seni Seviyorum seviyorum";
// console.log(text)
// let newText = text.replace("seviyorum","sevmiyorum")
// console.log(newText)
// let newText2 = text.replace(/SEVIYORUM/i,"sevmiyorum")
// console.log(newText2)
// let newText3 = text.replace(/SEVIYORUM/g,"sevmiyorum")
// console.log(newText3)
// let text2 = "Seni seviyorum seviyorum";
// let newText4 = text2.replace(/seviyorum/g,"sevmiyorum")
// console.log(newText4)
// let newText5 = text.replace(/SEVIYORUM/gi,"sevmiyorum")
// console.log(newText5)

// let text = "Seni seviyorum seviyorum Seviyorum Seviyorum"
// let newText = text.replaceAll("seviyorum",
// "sevmiyorum")
// console.log(newText)

// let text1 ="Hello World !"
// let text2 = text1.toUpperCase();
// console.log(text2)
// let text3 = text1.toLowerCase();
// console.log(text3)

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2," ",text2)
// console.log(text3)

let text1 = "    Hello World !           ";
console.log(text1)
let text2 = text1.trimStart();
console.log(text2)
let text3 = text1.trimEnd();
console.log(text3)
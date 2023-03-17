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

// let text1 = "    Hello World !           ";
// console.log(text1)
// let text2 = text1.trimStart();
// console.log(text2)
// let text3 = text1.trimEnd();
// console.log(text3)






























































// let text = "Please locate where 'locate' occurs!"
// let indexText = text.indexOf("Please")
// console.log(indexText)
// let indexText2 = text.lastIndexOf("loxcate")
// console.log(indexText2)
// let indexText3 = text.indexOf("locate",15)
// console.log(indexText3)
// let indexText4 = text.lastIndexOf("locate",15)
// console.log(indexText4)

// let text = "Please Locate where 'locate' occurs!"
// let searchText = text.search("locate")
// console.log(searchText)
// let searchText2 = text.search(/locate/i)
// console.log(searchText2)

// let text = "The rain in SPAIN stays mainly in the plain"
// let textMatch = text.match(/ain/g)
// console.log(textMatch)
// let textMatch2 = text.match(/ain/gi)
// console.log(textMatch2)

// let text = "Hello world, welcome to the universe."
// let textIncludes = text.includes("world")
// console.log(textIncludes)


let text = "Hello world, welcome to the universe."
let textStartsWith = text.startsWith("Hello")
console.log(textStartsWith)
let textStartsWith2 = text.startsWith("Hello",12)
console.log(textStartsWith2)
let textEndsWith = text.endsWith("universe.")
console.log(textEndsWith)
let textEndsWith2 = text.endsWith("universe.")
console.log(textEndsWith2)

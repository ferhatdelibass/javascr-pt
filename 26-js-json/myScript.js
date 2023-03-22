//JSON(javascript object notation)

let text = '{"firstName":"Jhon"}'
console.log(text)

let text2 = '{"firstName":"Ali","lastName":"Bay"}'
console.log(text2)

let text3 = '{"employes:":[{"firsName":"Jhon","lastName":"Doe"},{"employes:":[{"firsName":"Anna","lastName":"Smith"},{"employes:":[{"firsName":"Peter","lastName":"Pan"}]}'
console.log(text3)
console.log(JSON.parse(text3))
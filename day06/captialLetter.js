//capitalise every first word of the sentence.
//toUpperCase()

let sen = "i AM leARNing japANEse";
console.log(sen);
//spilt,convert, add

let capLetter = (sentience) => {
  return sentience
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const outPut = capLetter(sen);
console.log(outPut);

//convert toLowerCase, split (" "), map -->  word  chat at 0 and then slice the word from  index 1 and add it in the mao
//join the "
//
//
// "
let inputs = "THIS IS the unprofessional way to write .";
console.log(inputs);
capLetter = (sentence) => {
  return sentence
    .toLowerCase()
    .split(" ")
    .map((a) => a.charAt(0).toUpperCase() + a.slice(1))
    .join(" ");
};

const result = capLetter(inputs);
console.log(result);

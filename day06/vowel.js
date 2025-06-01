console.log("Vowels in a string");

function vowelCount(word) {
  let a = 0;
  let e = 0;
  let i = 0;
  let o = 0;
  let u = 0;
  let exrta = 0;
  console.log("woking 1");
  for (let j = 0; j <= word.length - 1; j++) {
    console.log("woking 2");
    if (word[j] == "a") {
      a++;
    } else if (word[j] == "e") {
      e++;
    } else if (word[j] == "i") {
      i++;
    } else if (word[j] == "o") {
      o++;
    } else if (word[j] == "u") {
      u++;
    } else exrta++;
  }

  return console.log(a + e + i + o + u);
}

vowelCount("espionage");

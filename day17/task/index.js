console.log(`_-_-_-_-TASK -01_-_-_-_-_`);
document.addEventListener("DOMContentLoaded", function () {
  let text = document.getElementById("text").innerText;
  console.log(text);

  //convert the string to the array

  let words = text
    .toLocaleLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(" ");
  console.log(words);

  //run a for each loop on the words
  let count = {};

  words.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  console.log(count);

  let maxCount = 0;
  let freqWord = "";

  for (let item in count) {
    if (count[item] > maxCount) {
      maxCount = count[item];
      freqWord = item;
    }
  }

  console.log(maxCount, freqWord);

  let ans = document.getElementById("result");
  ans.textContent = `Most Frequent word is: ${freqWord}   Count: ${maxCount}`;

  //count the number of each text apperaing ,,by using includes and return the max xount of words from the answer.
});

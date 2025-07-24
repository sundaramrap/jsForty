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

console.log(`_-_-_-_-TASK -02_-_-_-_-_`);

document.addEventListener("DOMContentLoaded", function () {
  let listItems = document.querySelectorAll("ul#cars li");
  console.log(listItems);

  //we have a buffet of item lists
  listItems.forEach((list, index) => {
    if (index % 2 == 0) {
      list.style.color = "white";
      list.style.backgroundColor = "black";
    } else {
      list.style.color = "black";
      list.style.backgroundColor = "pink";
    }
  });
});

console.log(`_-_-_-_-TASK -04_-_-_-_-_`);

function changeDog() {
  //getting the paragph from the
  let items = document.querySelector("p#dog");
  let text = items.innerText;
  const updateText = text.replace(/dog/gi, "cat");
  items.innerText = updateText;
}

function uniqueLink() {
  let links = document.querySelectorAll("a");
  //return node list convert to array
  let refrence = Array.from(links).map((link) => link.href);
  console.log(refrence);
  const uniqueRef = new Set(refrence);
  const button = document.getElementById("buttonCount");

  button.innerText = ` ${uniqueRef.size}`;
}

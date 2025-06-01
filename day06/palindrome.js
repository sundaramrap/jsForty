console.log("Palindrome of  a a string ");

function isPalindrome(value) {
  let i = 0;
  let j = value.length - 1;

  while (i < j) {
    if (value[i] !== value[j]) {
      console.log("not palindrome");
      return;
    }
    i++;
    j--;
  }

  console.log("Yes,it is a palindrome");
}

isPalindrome("madam");

console.log(`...connected`);

function handleClick(greeting) {
  let i = 0;
  console.log(`Btn is clicked`, greeting);
}

const myBtn2 = document.getElementById("myBtn2");

myBtn2.onclick = function () {
  console.log(`Btn2 has been clicked `);
};

//cannot, handle 2 functionality on same onClick Function
//Solution --> addEvent Listener

// myBtn2.onclick = handleClick;
// the above passing paranthesis will not work, will not take the refference as handleClick('greeting').. effernce being passed to it .
// we can handle this by calling it inside another function

myBtn2.onclick = () => {
  handleClick("SeokJin");
};

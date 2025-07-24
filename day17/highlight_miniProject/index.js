function highLightEl() {
  let action1 = document.querySelectorAll("p.info");
  action1.forEach((ele) => {
    ele.style.backgroundColor = "green";

    console.log(`it highlighted`);
  });
}

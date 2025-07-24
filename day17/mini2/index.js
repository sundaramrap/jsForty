function filterList() {
  let inputELem = document.getElementById("searchInput");
  const input = inputELem.value;

  let ilELem = document.querySelectorAll("ul#items li");

  ilELem.forEach((eleme) => {
    eleme.style.display = eleme.innerText
      .toLowerCase()
      .includes(input.toLowerCase())
      ? "block"
      : "none";
  });
}

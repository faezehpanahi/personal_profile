//Function expression to select elements
const selectElement = (b) => document.querySelector(b);
//Open the menu on click
selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});
// //close the menu on click
selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});

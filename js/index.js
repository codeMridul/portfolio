document.querySelector(".hamburger").addEventListener("click", function () {
  console.log(document.querySelector(".dropdown-container").style.display);
  if(document.querySelector(".dropdown-container").style.display === "block") {
    document.querySelector(".dropdown-container").style.display = "none";
    this.innerHTML = `<i class="fa-solid fa-burger fa-beat fa-2xl"></i>`
  } else {
    document.querySelector(".dropdown-container").style.display = "block";
    this.innerHTML = `<i class="fa-solid fa-circle-xmark fa-2xl"></i>`;
  }
});
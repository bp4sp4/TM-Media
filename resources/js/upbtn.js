const upButton = document.getElementById("upButton");

window.addEventListener("scroll", function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    upButton.classList.add("visible");
  } else {
    upButton.classList.remove("visible");
  }
});

upButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

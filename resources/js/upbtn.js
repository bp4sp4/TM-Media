const upButton = document.getElementById("upButton");

window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
};

upButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

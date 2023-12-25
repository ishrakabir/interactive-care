function toggle() {
  var x = document.getElementById("hasNavItem");
  if (!x.classList.contains("hamBurger")) {
    x.classList.add("hamBurger");
  } else {
    x.classList.remove("hamBurger");
  }
}

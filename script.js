// navbar
document
  .getElementById("menu-trigger")
  .addEventListener("click", sideMenuAppears);
document
  .getElementById("menu-close")
  .addEventListener("click", sideMenuDisappears);

function sideMenuAppears() {
  document.getElementById("side-menu").classList.add("show-menu");
}

function sideMenuDisappears() {
  document.getElementById("side-menu").classList.remove("show-menu");
}

// on click open new tab
document.querySelector("#new-tab-open").addEventListener("click", new_tab_open);

function new_tab_open() {
  window.open(" ", " ");
}

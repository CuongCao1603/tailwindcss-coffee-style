const topMenu = document.getElementById("ct-top-menu");
const toggleTopMenuIcon = document.getElementById("ct-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
  // console.log(e.target);
  if (toggleTopMenuIcon.contains(e.target)) {
    // CLick to Toggle top menu icon
    console.log(e.target);
    topMenu.classList.toggle("hidden");
    topMenu.classList.toggle("ct-topmenu-expanded");
  } else {
    // Click Outside from Toggle top menu Icon
    if (topMenu.classList.contains("ct-topmenu-expanded")) {
      topMenu.classList.remove("ct-topmenu-expanded");
      topMenu.classList.add("hidden");
    }
  }
});

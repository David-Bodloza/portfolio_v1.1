/*show Sidebar */
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
/* Hide Sidebar*/
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
/*Back to top smooth scrolling */
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

let openSection = null;

function toggleSection(sectionId) {
  if (openSection && openSection !== sectionId) {
    document.getElementById(openSection).style.display = "none";
  }
  const section = document.getElementById(sectionId);
  if (section.style.display === "block") {
    section.style.display = "none";
    openSection = null; 
  } else {
    section.style.display = "block";
    openSection = sectionId; 
  }
}
unction toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

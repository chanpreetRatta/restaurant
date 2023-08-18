import "./style.css";
import "normalize.css";

let content = document.querySelector("#content");
function navBar() {
  let navigationBar = document.createElement("div");
  navigationBar.classList += "nav-bar";
  let home = document.createElement("a");
  let menu = document.createElement("a");
  let aboutUs = document.createElement("a");

  setAttribute(home, {
    href: "#",
    id: "home",
  });
  setAttribute(menu, {
    href: "#",
    id: "menu",
  });
  setAttribute(aboutUs, {
    href: "#",
    id: "aboutUs",
  });

  home.appendChild(document.createTextNode("Home"));
  menu.appendChild(document.createTextNode("Menu"));
  aboutUs.appendChild(document.createTextNode("About Us"));

  navigationBar.append(home, menu, aboutUs);

  return navigationBar;
}

function main() {
  let main = document.createElement("div");
  main.setAttribute("class", "main");
  return main;
}

function footer() {
  let footer = document.createElement("div");
  footer.classList += "footer";

  footer.appendChild(document.createTextNode("A project by Chanpreet"));

  return footer;
}

function setAttribute(element, attributes) {
  for (let attribute in attributes) {
    element.setAttribute(attribute, attributes[attribute]);
  }
}

content.appendChild(navBar());
content.appendChild(main());
content.appendChild(footer());

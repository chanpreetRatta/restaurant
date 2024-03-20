import "normalize.css";
import "./style.css";

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

  let mainMenu = document.createElement("div");
  mainMenu.appendChild(document.createTextNode("this is the menu page"));
  setAttribute(mainMenu, {
    class: "main-menu tab",
  });

  let mainHome = document.createElement("div");
  mainHome.appendChild(document.createTextNode("this is the Home page"));
  setAttribute(mainHome, {
    class: "main-home tab",
    style: "display: none",
  });

  let mainAboutUs = document.createElement("div");
  mainAboutUs.appendChild(document.createTextNode("this is the About Us page"));
  setAttribute(mainAboutUs, {
    class: "main-aboutUs tab",
    style: "display: none",
  });

  main.append(mainMenu, mainAboutUs, mainHome);

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

function tabs(event) {
  let ids = ["home", "menu", "aboutUs"];
  let main = document.querySelector(".main");
  if (ids.includes(event.target.id)) {
    main.childNodes.forEach((child) => {
      child.style.display = "none";
    });
    document.getElementsByClassName(
      `main-${event.target.id}`
    )[0].style.display = "block";
  }
}

content.addEventListener("click", tabs);

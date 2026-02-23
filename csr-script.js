// ============ HEADER ============

const header = document.querySelector("header");
const logoContainer = document.createElement("div");
logoContainer.classList.add("logo-container");

const img = document.createElement("img");
img.src = "logo.svg";

const logoText = document.createElement("p");
logoText.classList.add("logo-text");
logoText.textContent = "THE.BLOG";
logoContainer.appendChild(img);
logoContainer.appendChild(logoText);
header.appendChild(logoContainer);

// ============ H1 SECTION ============

const section = document.querySelector("section");
const sectionTitle = document.createElement("h1");
sectionTitle.textContent = "LATEST ARTICLES";
section.appendChild(sectionTitle);

// ============ NAV ============

const listElements = ["All", "Technology", "Design", "Business"];
const nav = document.querySelector("nav");
const ul = document.createElement("ul");
nav.appendChild(ul);
nav.classList.add("category-filter");
listElements.forEach((item) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.classList.add("filter-tag");
  if (item === "All") {
    span.classList.add("active");
  }
  span.textContent = item;
  li.appendChild(span);
  ul.appendChild(li);
});

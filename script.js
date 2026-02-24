const app = document.getElementById("app");

// ============ HEADER ============

const header = document.createElement("header");
const logoContainer = document.createElement("div");
logoContainer.classList.add("logo-container");

const img = document.createElement("img");
img.src = "logo.svg";

const logoText = document.createElement("p");
logoText.classList.add("logo-text");
logoText.textContent = "THE.BLOG";
img.alt = "Mini Blog";

logoContainer.appendChild(img);
logoContainer.appendChild(logoText);
header.appendChild(logoContainer);
app.appendChild(header);

// ============ H1 SECTION ============

const section = document.createElement("section");
const sectionTitle = document.createElement("h1");
sectionTitle.textContent = "LATEST ARTICLES";

section.appendChild(sectionTitle);
app.appendChild(section);

// ============ NAV ============

const listElements = ["All", "Technology", "Design", "Culture", "Business"];

const nav = document.createElement("nav");
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

app.appendChild(nav);

// ============ ARTICLE ============

const cards = [
  {
    category: "TECHNOLOGY",
    title: "Quiet Tools That Work",
    content:
      "The best tools often go unnoticed, quietly making life easier. They handle small tasks in the background so you can focus on what matters most.",
    date: "Feb 18, 2026",
  },
  {
    category: "DESIGN",
    title: "Small Details Matter",
    content:
      "A subtle shadow or soft curve can make a design feel alive. Small imperfections give warmth and character that perfect symmetry can’t match.",
    date: "Feb 15, 2026 ",
  },
  {
    category: "CULTURE",
    title: "Alone, but Connected",
    content:
      "Even in a crowd, quiet moments like reading or listening to music can create a small sense of connection and reflection.",
    date: "Feb 5, 2026",
  },
  {
    category: "BUSINESS",
    title: "The New Shape of Work",
    content:
      "Careers rarely follow a straight path. People switch roles and learn new skills, creating opportunities for growth in unexpected ways.",
    date: "Feb 2, 2026",
  },
];

const article = document.createElement("article");
const articleContainer = document.createElement("div");
articleContainer.classList.add("cards-container");

cards.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  const category = document.createElement("h2");
  category.textContent = item.category;
  const title = document.createElement("h3");
  title.textContent = item.title;
  const content = document.createElement("p");
  content.textContent = item.content;

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");
  const date = document.createElement("span");
  date.textContent = item.date;
  const readMore = document.createElement("span");
  readMore.textContent = "Read more";
  readMore.classList.add("read-more");

  cardFooter.appendChild(date);
  cardFooter.appendChild(readMore);
  card.appendChild(category);
  card.appendChild(title);
  card.appendChild(content);
  card.appendChild(cardFooter);
  articleContainer.appendChild(card);
});

article.appendChild(articleContainer);
app.appendChild(article);

// ============ FOOTER ============

const footer = document.createElement("footer");
const footerContainer = document.createElement("div");
footerContainer.classList.add("render-badge");
const badge = document.createElement("div");
badge.classList.add("badge-dot");
const footerText = document.createElement("span");
footerText.textContent = "Client Side Rendered";
const link = document.createElement("a");
link.href = "ssr.html";
link.textContent = "View SSR version →";
link.classList.add("switch-link");

footerContainer.appendChild(badge);
footerContainer.appendChild(footerText);
footer.appendChild(footerContainer);
footer.appendChild(link);
app.appendChild(footer);

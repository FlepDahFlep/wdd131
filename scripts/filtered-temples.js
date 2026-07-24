document.querySelector("#currentyear").textContent =
new Date().getFullYear();

document.querySelector("#lastmodified").textContent =
document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const temples = [
  {
    templeName: "Nauvoo Temple",
    location: "Nauvoo, Illinois",
    dedicated: "1846, May, 1",
    area: 50000,
    imageUrl:
    "https://s1.ezgif.com/tmp/ezgif-1e0bbfb897fed4f2.webp"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
    "https://s7.ezgif.com/tmp/ezgif-7e44d542560c9016.webp"
  },
  {
    templeName: "Manila Temple",
    location: "Quezon City, Manila",
    dedicated: "1984, September, 25",
    area: 26683,
    imageUrl:
    "https://s7.ezgif.com/tmp/ezgif-7c3be09287bcf09e.webp"
  },
  {
    templeName: "Cebu Temple",
    location: "Brgy. Lahug, Cebu City, Cebu",
    dedicated: "2010, June, 13",
    area: 29556,
    imageUrl:
    "https://s7.ezgif.com/tmp/ezgif-74bbf05fc08a7db0.webp"
  },
  {
    templeName: "Urdaneta Temple",
    location: "Brgy. Nancayasan, Urdaneta City, Pangasinan",
    dedicated: "2024, April, 28",
    area: 32604,
    imageUrl:
    "https://s7.ezgif.com/tmp/ezgif-786f6a6c8f1e3bac.webp"
  },
  {
    templeName: "Alabang Temple",
    location: "Muntinlupa City, Metro Manila",
    dedicated: "2026, January, 18",
    area: 6861,
    imageUrl:
    "https://s7.ezgif.com/tmp/ezgif-7c59dd7aedf15233.webp"
  },
  {
    templeName: "Davao Temple",
    location: "Davao City, Davao Del Sur",
    dedicated: "2026, May, 3",
    area: 18450,
    imageUrl:
    "https://s7.ezgif.com/tmp/ezgif-781af2be53b5cd3c.webp"
  },
  {
    templeName: "Bacolod Temple",
    location: "Bacolod, Philippines",
    dedicated: "2026, May, 31",
    area: 9600,
    imageUrl:
    "https://s7.ezgif.com/tmp/ezgif-7590feace0eb5c84.webp"
  },
];

const gallery = document.querySelector(".gallery");

function displayTemples(temples) {

    gallery.innerHTML = "";

    temples.forEach(temple => {

        const card = document.createElement("section");

        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = temple.templeName;

        location.innerHTML =
            `<strong>Location:</strong> ${temple.location}`;

        dedicated.innerHTML =
            `<strong>Dedicated:</strong> ${temple.dedicated}`;

        area.innerHTML =
            `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        image.width = 400;
        image.height = 300;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        gallery.appendChild(card);

    });
}

document.querySelector("#home").addEventListener("click", () => {
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {

    const oldTemples = temples.filter(temple => {

        const year = Number(temple.dedicated.split(",")[0]);

        return year < 1900;

    });

    displayTemples(oldTemples);

});

document.querySelector("#new").addEventListener("click", () => {

    const newTemples = temples.filter(temple => {

        const year = Number(temple.dedicated.split(",")[0]);

        return year > 2000;

    });

    displayTemples(newTemples);

});

document.querySelector("#large").addEventListener("click", () => {

    displayTemples(
        temples.filter(temple => temple.area > 90000)
    );

});

document.querySelector("#small").addEventListener("click", () => {

    displayTemples(
        temples.filter(temple => temple.area < 10000)
    );

});

displayTemples(temples);

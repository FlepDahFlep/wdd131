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
    image: "images/nauvoo-temple.webp"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 382207,
    image: "images/salt-lake-temple.webp"
  },
  {
    templeName: "Manila Temple",
    location: "Quezon City, Manila",
    dedicated: "1984, September, 25",
    area: 26683,
    image: "images/manila-temple.webp"
  },
  {
    templeName: "Cebu Temple",
    location: "Brgy. Lahug, Cebu City, Cebu",
    dedicated: "2010, June, 13",
    area: 29556,
    image: "images/cebu-temple.webp"
  },
  {
    templeName: "Urdaneta Temple",
    location: "Brgy. Nancayasan, Urdaneta City, Pangasinan",
    dedicated: "2024, April, 28",
    area: 32604,
    image: "images/urdaneta-temple.webp"
  },
  {
    templeName: "Alabang Temple",
    location: "Muntinlupa City, Metro Manila",
    dedicated: "2026, January, 18",
    area: 6861,
    image: "images/alabang-temple.webp"
  },
  {
    templeName: "Davao Temple",
    location: "Davao City, Davao Del Sur",
    dedicated: "2026, May, 3",
    area: 18450,
    image: "images/davao-temple.webp"
  },
  {
    templeName: "Bacolod Temple",
    location: "Bacolod, Philippines",
    dedicated: "2026, May, 31",
    area: 9600,
    image: "images/bacolod-temple.webp"
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

        image.src = temple.image;
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

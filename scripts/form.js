const products = [
  {
    id: "fc-1011",
    name: "Medpack Mk.5",
    averagerating: 4.8
  },
  {
    id: "fc-1032",
    name: "Survival Kit/72hr Kit",
    averagerating: 4.6
  },
  {
    id: "fs-1131",
    name: "Camping Gear",
    averagerating: 4.2
  },
  {
    id: "ac-3111",
    name: "Alphapack/Travel Backpack",
    averagerating: 4.0
  },
  {
    id: "ad-1023",
    name: "Ready for work Suitcase",
    averagerating: 4.5
  },
  {
    id: "ss-1233",
    name: "Safety Boots",
    averagerating: 5.0
  }
];

const productSelect = document.querySelector("#product");

products.forEach(product => {
    const option = document.createElement("option");

    option.value = product.id;
    option.textContent = product.name;

    productSelect.appendChild(option);
});

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;


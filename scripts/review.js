let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

document.querySelector("#reviewCount").textContent = reviewCount;

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;
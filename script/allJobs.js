// let count=0;

// document.querySelectorAll("section");
// const count = section.querySelector(".card").length;
// console.log(count);

const totalCards = document.querySelectorAll("#all-jobs .card").length;
document.getElementById("total-label").textContent = totalCards;

document.getElementById("jobs-count-label").textContent = totalCards;

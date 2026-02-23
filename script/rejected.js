{
  let count = 0;

  const rejectedButtons = document.querySelectorAll(".btn-error");

  rejectedButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const card = button.closest(".card");

      if (card.dataset.decided === "true") return;

      card.dataset.decided = "true";
      count += 1;

      document.getElementById("rejected-label").textContent = count;

      // decrease total
      const total = parseInt(document.getElementById("total-label").textContent);
      document.getElementById("total-label").textContent = total - 1;
      document.getElementById("jobs-count-label").textContent = total - 1;

      document.getElementById("rejected-container").appendChild(card);
      document.querySelector("#rejected .empty-state").classList.add("hidden");

    });
  });
}
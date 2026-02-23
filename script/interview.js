{
  let count = 0;

  const interviewButtons = document.querySelectorAll(".btn-success");

  interviewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const card = button.closest(".card");

      if (card.dataset.decided === "true") return;

      card.dataset.decided = "true";
      count += 1;

      document.getElementById("interview-label").textContent = count;

      // decrease total
      const total = parseInt(document.getElementById("total-label").textContent);
      document.getElementById("total-label").textContent = total - 1;
      document.getElementById("jobs-count-label").textContent = total - 1;

    document.getElementById("interview-container").appendChild(card);
    document.querySelector("#interview .empty-state").classList.add("hidden");
    });
  });
}
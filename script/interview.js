let count = 0;

const interviewButtons = document.querySelectorAll(".btn-success");

interviewButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = button.closest(".card");
    const badge = card.querySelector(".badge");

    if (card.dataset.interviewed === "true") return;

    card.dataset.interviewed = "true";
    count += 1;

    document.getElementById("interview-label").textContent = count;
  });
});
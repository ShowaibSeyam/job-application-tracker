let count = 0;

const rejectedButtons = document.querySelectorAll(".btn-error");

interviewButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = button.closest(".card");
    const badge = card.querySelector(".badge");

    if (card.dataset.interviewed === "true") return;

    card.dataset.interviewed = "true";
    count -= 1;

    document.getElementById("rejected-label").textContent = count;
  });
});
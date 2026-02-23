//machine id > hide all > show id
function showOnly(id, clickedBtn){
    const interview = document.getElementById("interview");
    const allJobs = document.getElementById("all-jobs");
    const rejected = document.getElementById("rejected");
    interview.classList.add("hidden");
    allJobs.classList.add("hidden");
    rejected.classList.add("hidden");

    const filterButtons = document.querySelectorAll(".buttons .btn");
    filterButtons.forEach(btn => {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-ghost", "bg-base-200");
    });

    clickedBtn.classList.remove("btn-ghost", "bg-base-200");
    clickedBtn.classList.add("btn-primary")

    //id wala element ta ke show korbo
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}
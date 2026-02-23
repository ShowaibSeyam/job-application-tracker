//machine id > hide all > show id
function showOnly(id){
    const interview = document.getElementById("interview");
    const allJobs = document.getElementById("all-jobs");
    const rejected = document.getElementById("rejected");
    interview.classList.add("hidden");
    allJobs.classList.add("hidden");
    rejected.classList.add("hidden");

    //id wala element ta ke show korbo
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}
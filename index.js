var button = document.getElementById("toggle-workexpe");
var expe = document.getElementById("workExperience");
button.addEventListener("click", function () {
    if (expe.style.display === "none") {
        expe.style.display = "block";
    }
    else {
        expe.style.display = "none";
    }
});


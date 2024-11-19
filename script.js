var content = document.getElementById("content");
var moreText = document.getElementById("moreText");
var toggleButton = document.getElementById("toggleButton");
function toggleContent() {
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        toggleButton.textContent = "Show Less";
    }
    else {
        moreText.style.display = "none";
        toggleButton.textContent = "Show More";
    }
}
toggleButton.addEventListener("click", toggleContent);

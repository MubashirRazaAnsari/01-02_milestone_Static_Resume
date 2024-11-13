(function () {
    // Get references to the elements
    var content = document.getElementById("content");
    var moreText = document.getElementById("moreText");
    var toggleButton = document.getElementById("toggleButton");
    // Function to toggle visibility
    function toggleContent() {
        if (moreText.style.display === "none") {
            moreText.style.display = "inline"; // Show the additional content
            toggleButton.textContent = "Show Less"; // Update button text
        }
        else {
            moreText.style.display = "none"; // Hide additional content
            toggleButton.textContent = "Show More"; // Update button text
        }
    }
    // Add the event listener to toggle button
    toggleButton.addEventListener("click", toggleContent);
})();

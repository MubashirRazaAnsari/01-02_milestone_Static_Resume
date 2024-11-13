(() => {
    // Get references to the elements
    const content = document.getElementById("content")!;
    const moreText = document.getElementById("moreText")!;
    const toggleButton = document.getElementById("toggleButton")!;
  
    // Function to toggle visibility
    function toggleContent(): void {
      if (moreText.style.display === "none") {
        moreText.style.display = "inline"; // Show the additional content
        toggleButton.textContent = "Show Less"; // Update button text
      } else {
        moreText.style.display = "none"; // Hide additional content
        toggleButton.textContent = "Show More"; // Update button text
      }
    }
  
    // Add the event listener to toggle button
    toggleButton.addEventListener("click", toggleContent);
  })();
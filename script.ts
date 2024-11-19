
   
    const content = document.getElementById("content")!;
    const moreText = document.getElementById("moreText")!;
    const toggleButton = document.getElementById("toggleButton")!;
  
    function toggleContent(): void {
      if (moreText.style.display === "none") {
        moreText.style.display = "inline"; 
        toggleButton.textContent = "Show Less"; 
      } else {
        moreText.style.display = "none"; 
        toggleButton.textContent = "Show More"; 
      }
    }
  
    
    toggleButton.addEventListener("click", toggleContent);
 
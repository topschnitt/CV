document.addEventListener("DOMContentLoaded", function() {
    // Simulate a delay (2 seconds) for demonstration purposes
    setTimeout(function() {
        // Hide the loading screen
        document.getElementById("loadingScreen").style.display = "none";
        // Show the main content
        document.getElementById("mainContent").style.display = "block";
    }, 2000);
});
document.addEventListener("DOMContentLoaded", function() {
	// Display the alert box and overlay when the page loads
	document.querySelector(".overlay").style.display = "block";
	document.querySelector(".alert-box").style.display = "block";
	
	// Add event listener to close button
	document.querySelector(".close-btn").addEventListener("click", function() {
		
		// Hide the alert box and overlay when the close button is clicked
		document.querySelector(".overlay").style.display = "none";
		document.querySelector(".alert-box").style.display = "none";
	});
});
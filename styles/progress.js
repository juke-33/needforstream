// Set the target amount
const targetAmount = 22.28;

// Function to update the progress bar and label
function updateProgress(amount) {
	const progressBar = document.getElementById('progress-bar');
	const progressPercentage = document.getElementById('progress-percentage');
	
	// Calculate the percentage of progress
	const percentage = (amount / targetAmount) * 100;
	
	// Update the width of the progress bar
	progressBar.style.width = percentage + '%';
	
	// Update the label with the current amount and the target amount
	progressPercentage.textContent = Math.round(percentage) + '%';
}

// Current money gathered
updateProgress(25);
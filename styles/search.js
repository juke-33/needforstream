function searchMovies() {
	// Get the search query from the input field
	var query = document.getElementById('movieSearch').value.toLowerCase();
	
	// Get the list of movie containers
	var movieContainers = document.querySelectorAll('.movie-container');
	
	// Loop through each movie container and check if it contains the search query
	movieContainers.forEach(function(movieContainer) {
		var movieTitle = movieContainer.querySelector('p').textContent.toLowerCase();
		
		// If the movie title contains the search query, show it; otherwise, hide it
		if (movieTitle.includes(query)) {
			movieContainer.style.display = 'inline-block';
		} else {
			movieContainer.style.display = 'none';
		}
	});

	// Update the URL with the search term
	const newURL = new URL(window.location);
	newURL.searchParams.set('search', query);
	window.history.pushState({}, '', newURL);
}
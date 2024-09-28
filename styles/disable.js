// Disable right-click context menu
window.addEventListener('contextmenu', function (e) {
	e.preventDefault();
});

// Detect if developer tools are open and Ctrl+U and prevent default behavior
window.addEventListener('keydown', function (e) {
	if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'u')) {
		e.preventDefault();
	}
});
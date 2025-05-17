// Toggle dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for existing dark mode preference in sessionStorage
if (sessionStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☾'; // Change icon to indicate dark mode is active
}

// Event listener for the toggle button
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Check if dark mode is enabled and save preference
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☾'; // Change icon to indicate dark mode is active
        sessionStorage.setItem('darkMode', 'enabled'); // Save preference
    } else {
        darkModeToggle.textContent = '☀︎'; // Change icon to indicate light mode
        sessionStorage.setItem('darkMode', 'disabled'); // Save preference
    }
});

// Load user data
window.onload = function() {
    const userEmail = localStorage.getItem('userEmail') || 'admin@adnu.edu.ph';
    document.getElementById('userEmail').textContent = userEmail;
};

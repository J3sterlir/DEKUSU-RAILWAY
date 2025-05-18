document.addEventListener('DOMContentLoaded', function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
    
    // Check each nav link
    document.querySelectorAll('.nav_contents li a').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        
        if (linkPage === currentPage) {
            // Set active state on parent li
            link.parentElement.classList.add('active');
            
            // Force expanded state for active item
            link.parentElement.style.width = 'fit-content';
            const textSpan = link.querySelector('.nav-text');
            if (textSpan) {
                textSpan.style.display = 'inline';
            }
        }
        
        // Handle hover effects
        link.parentElement.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.width = 'fit-content';
                this.style.backgroundColor = '';
                const textSpan = this.querySelector('.nav-text');
                if (textSpan) {
                    textSpan.style.display = 'inline';
                }
            }
        });
        
        link.parentElement.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.width = '40px';
                const textSpan = this.querySelector('.nav-text');
                if (textSpan) {
                    textSpan.style.display = 'none';
                }
            }
        });
    });
});

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

// Display Map Over
function showmapdetails() {
    const modal = document.getElementById('mapdetails');
    modal.style.display = 'block';
}
// Hide Map Over
function hidemapdetails() {
    const modal = document.getElementById('mapdetails');
    modal.style.display = 'none';
}
// Close map Over
document.getElementById('closemapdetails').addEventListener('click', hidemapdetails);
  // Hide modal when clicking outside modal content
window.addEventListener('click', function(event) {
    const modal = document.getElementById('mapdetails');
    if (event.target === modal) {
      hidemapdetails();
    }
});

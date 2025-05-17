document.addEventListener('DOMContentLoaded', function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
    
    // Function to handle hover effects
    function handleHover(link, isHovering) {
        const textSpan = link.querySelector('.nav-text');
        if (isHovering) {
            link.style.width = 'fit-content';
            if (textSpan) {
                textSpan.style.display = 'inline';
            }
        } else {
            link.style.width = '40px';
            if (textSpan) {
                textSpan.style.display = 'none';
            }
        }
    }

    // Check each nav link
    document.querySelectorAll('.nav_contents li a').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        
        // Set active state on parent li if the link matches the current page
        if (linkPage === currentPage) {
            link.parentElement.classList.add('active');
            link.parentElement.style.width = 'fit-content'; // Ensure active item is fully expanded
            const textSpan = link.querySelector('.nav-text');
            if (textSpan) {
                textSpan.style.display = 'inline';
            }
        }
        
        // Handle hover effects
        link.parentElement.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                handleHover(this, true);
            }
        });
        
        link.parentElement.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                handleHover(this, false);
            }
        });
    });
});


// Toggle dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    const Logo = document.getElementById('Logo');

    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☾';
        Logo.src = '/Dekusu images/dekusu logo(Dark).png'
        
    } else {
        darkModeToggle.textContent = '☀︎';
        Logo.src = '/Dekusu images/dekusu logo.png'
    }
});

document.getElementById('visitorform').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = document.getElementById('Purpose').value;
    if (form){
        window.location.href = 'Pages/dashboard(guest).html';
    }
});
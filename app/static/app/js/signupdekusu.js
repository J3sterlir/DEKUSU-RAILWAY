document.addEventListener("DOMContentLoaded", function () {
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

    // Visitor Modal Popup
    const visitorBtn = document.getElementById("visitor");
    const visitorModal = document.getElementById("visitorModal");
    const closeBtn = document.getElementById("closeVisitorModal");

    if (visitorBtn && visitorModal && closeBtn) {
        visitorBtn.addEventListener("click", function (e) {
            e.preventDefault();
            visitorModal.style.display = "block";
        });

        closeBtn.addEventListener("click", function () {
            visitorModal.style.display = "none";
        });

        window.addEventListener("click", function (e) {
            if (e.target === visitorModal) {
                visitorModal.style.display = "none";
            }
        });
    }


    // Visitor Form Submission → Redirect
    const visitorForm = document.getElementById('visitorform');
    const purposeSelect = document.getElementById('Purpose');

    if (visitorForm && purposeSelect) {
        visitorForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const purpose = purposeSelect.value;
            if (purpose) {
                window.location.href = '/dashboard-guest/';
            } else {
                alert('Please select a purpose before continuing.');
            }
        });
    }

    // Fix for select dropdown glitch
    const select = document.querySelector('select');
    if (select) {
        select.addEventListener('click', function () {
            this.style.position = 'relative';
            this.style.top = 'auto';
        });
    }
});

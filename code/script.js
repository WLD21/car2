// Check if the availability form exists on the page before adding the event listener
const availabilityForm = document.getElementById('availability-form');

if (availabilityForm) {
    availabilityForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const rentalDate = document.getElementById('rental-date').value;
        if (rentalDate) {
            showNotification(`Checking availability for ${rentalDate}. Redirecting...`);
            // Redirect to availability results page with date parameter
            window.location.href = `availability.html?date=${rentalDate}`;
        } else {
            showNotification('Please select a rental date.');
        }
    });
}

// Function to display notifications instead of alerts
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Function to handle redirection to document upload page
function redirectToUpload(event) {
    event.preventDefault();
    showNotification('Redirecting to upload document page...');
    window.location.href = "document-upload.html";
}

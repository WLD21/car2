document.getElementById('availability-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const rentalDate = document.getElementById('rental-date').value;
    if (rentalDate) {
        alert(`Checking availability for ${rentalDate}. Redirecting to availability page...`);
        // Redirect to availability results page with date parameter
        window.location.href = `availability.html?date=${rentalDate}`;
    } else {
        alert('Please select a rental date.');
    }
});

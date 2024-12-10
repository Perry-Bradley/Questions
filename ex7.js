function updateDateTime() {
    const now = new Date();
    
    // Get the current date
    const date = now.toLocaleDateString();
    
    // Get the current time
    const time = now.toLocaleTimeString();
    
    // Update the HTML content
    document.getElementById('date').innerText = `Date: ${date}`;
    document.getElementById('time').innerText = `Time: ${time}`;
}

// Update the date and time immediately
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);
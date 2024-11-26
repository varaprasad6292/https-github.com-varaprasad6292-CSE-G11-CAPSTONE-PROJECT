// user_profile.js

// Function to handle the complaint submission
document.getElementById("complaint-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const area = document.getElementById("area").value;
    const complaint = document.getElementById("complaint").value;

    const newComplaint = {
        id: Date.now(), // Unique ID for each complaint
        name,
        area,
        description: complaint,
        status: 'Pending', // Complaint status
    };

    // Get existing complaints from localStorage or initialize an empty array
    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    complaints.push(newComplaint);

    // Save the updated complaints array to localStorage
    localStorage.setItem("complaints", JSON.stringify(complaints));

    // Clear form fields
    document.getElementById("complaint-form").reset();

    alert("Complaint submitted successfully!");

    // Optional: Redirect or update the interface to show success message
});

// Function to open the modal and set the selected driver
function openRequestModal(driver) {
    document.getElementById("selected-driver").textContent = driver;
    document.getElementById("request-modal").style.display = "block";
}

// Function to close the request modal
function closeRequestModal() {
    document.getElementById("request-modal").style.display = "none";
}

// Function to submit the request to the driver
function sendRequest() {
    const driver = document.getElementById("selected-driver").textContent;
    const requestDescription = document.getElementById("request").value;

    const newRequest = {
        driver,
        description: requestDescription,
        status: 'Pending', // Request status
        requestDate: Date.now(), // Timestamp for the request
    };

    // Get existing requests from localStorage or initialize an empty array
    const requests = JSON.parse(localStorage.getItem("requests")) || [];
    requests.push(newRequest);

    // Save the updated requests array to localStorage
    localStorage.setItem("requests", JSON.stringify(requests));

    // Clear request textarea
    document.getElementById("request").value = '';

    alert("Request submitted successfully to " + driver);

    // Close the modal after submission
    closeRequestModal();
}


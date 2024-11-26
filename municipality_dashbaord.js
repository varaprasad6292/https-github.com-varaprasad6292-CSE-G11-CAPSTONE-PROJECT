document.addEventListener("DOMContentLoaded", function() {
    // Display welcome message based on localStorage user info (assumed to be saved during login)
    const userName = localStorage.getItem("user-name") || "Municipal Officer";
    document.getElementById("welcome-message").textContent = `Welcome, ${userName}!`;

    // Fetch and display complaints
    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    const complaintsTableBody = document.getElementById("complaints");
    complaintsTableBody.innerHTML = ""; // Clear previous content

    complaints.forEach(function(complaint) {
        const complaintRow = document.createElement("tr");
        complaintRow.innerHTML = `
            <td>${complaint.id}</td>
            <td>${complaint.name}</td>
            <td>${complaint.area}</td>
            <td>${complaint.description}</td>
            <td>${complaint.status}</td>
            <td><button onclick="communicateWithUser('${complaint.id}')">Communicate</button></td>
        `;
        complaintsTableBody.appendChild(complaintRow);
    });

    // List of drivers
    const drivers = [
        { name: "Mike Johnson", route: "Route 12" },
        { name: "Sarah Connor", route: "Route 18" },
        { name: "Jake Parker", route: "Route 5" },
    ];

    const driversTableBody = document.getElementById("drivers");
    driversTableBody.innerHTML = ""; // Clear previous content

    drivers.forEach(function(driver) {
        const driverRow = document.createElement("tr");
        driverRow.innerHTML = `
            <td>${driver.name}</td>
            <td>${driver.route}</td>
            <td><button onclick="assignWork('${driver.name}')">Assign Work</button></td>
        `;
        driversTableBody.appendChild(driverRow);
    });

    // Assign work to the selected driver
    document.getElementById("assign-work-form").addEventListener("submit", function(e) {
        e.preventDefault();

        const complaintId = document.getElementById("complaint-id").value;
        const selectedDriver = document.getElementById("driver").value;

        // Find the complaint using the complaint ID
        const complaint = complaints.find(c => c.id == complaintId);
        if (complaint) {
            // Assign the work to the selected driver
            complaint.status = `Assigned to ${selectedDriver}`;

            // Update complaints in localStorage
            localStorage.setItem("complaints", JSON.stringify(complaints));

            // Optionally, display assigned work status
            alert(`Complaint ${complaintId} has been assigned to ${selectedDriver}.`);

            // Re-render complaints and assigned work
            renderAssignedWork();
        } else {
            alert("Complaint ID not found!");
        }

        // Clear the form
        document.getElementById("assign-work-form").reset();
    });

    // Function to handle communication with users
    document.getElementById("communication-form").addEventListener("submit", function(e) {
        e.preventDefault();

        const complaintId = document.getElementById("complaint-id").value;
        const message = document.getElementById("message").value;

        const complaint = complaints.find(c => c.id == complaintId);
        if (complaint) {
            // Append the message to the complaint's communication log
            if (!complaint.communication) {
                complaint.communication = [];
            }
            complaint.communication.push(message);

            // Update complaints in localStorage
            localStorage.setItem("complaints", JSON.stringify(complaints));

            alert(`Message sent to user for Complaint ID ${complaintId}.`);

            // Re-render complaints to show updated communication
            renderAssignedWork();
        } else {
            alert("Complaint ID not found!");
        }

        // Clear the form
        document.getElementById("communication-form").reset();
    });
});

// Function to handle direct assignment of work to drivers
function assignWork(driverName) {
    const complaintId = prompt("Enter the Complaint ID to assign to " + driverName + ":");
    if (complaintId) {
        const complaints = JSON.parse(localStorage.getItem("complaints")) || [];
        const complaint = complaints.find(c => c.id == complaintId);
        if (complaint) {
            complaint.status = `Assigned to ${driverName}`;
            localStorage.setItem("complaints", JSON.stringify(complaints));

            alert(`Complaint ${complaintId} has been assigned to ${driverName}.`);
            renderAssignedWork(); // Re-render assigned work
        } else {
            alert("Complaint ID not found.");
        }
    }
}

// Function to render assigned work
function renderAssignedWork() {
    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    const complaintsTableBody = document.getElementById("complaints");
    complaintsTableBody.innerHTML = ""; // Clear previous content

    complaints.forEach(function(complaint) {
        const complaintRow = document.createElement("tr");
        complaintRow.innerHTML = `
            <td>${complaint.id}</td>
            <td>${complaint.name}</td>
            <td>${complaint.area}</td>
            <td>${complaint.description}</td>
            <td>${complaint.status}</td>
            <td><button onclick="communicateWithUser('${complaint.id}')">Communicate</button></td>
        `;
        complaintsTableBody.appendChild(complaintRow);
    });
}

// Function to communicate with a user about a complaint
function communicateWithUser(complaintId) {
    const complaint = JSON.parse(localStorage.getItem("complaints")).find(c => c.id == complaintId);
    if (complaint) {
        const message = prompt(`Communicate with user for Complaint ID ${complaintId}:`);
        if (message) {
            // Append the communication message
            if (!complaint.communication) {
                complaint.communication = [];
            }
            complaint.communication.push(message);

            // Save the updated complaint with communication in localStorage
            localStorage.setItem("complaints", JSON.stringify(complaint));

            alert("Message sent to user.");
            renderAssignedWork();
        }
    }
}

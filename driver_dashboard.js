document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the logged-in driver's information from localStorage
    const driverName = localStorage.getItem("driver-name");
    const vehicleNumber = localStorage.getItem("vehicle-number");
    const assignedArea = localStorage.getItem("assigned-area");

    if (driverName && vehicleNumber && assignedArea) {
        // Set driver details dynamically
        document.getElementById("driver-name").textContent = driverName;
        document.getElementById("vehicle-number").textContent = vehicleNumber;
        document.getElementById("assigned-area").textContent = assignedArea;

        // Fetch and display the driver's work schedule dynamically
        loadDriverComplaints();
    } else {
        alert("Driver data is missing. Please log in first.");
    }
});

// Function to load the complaints and dynamically assign them to a work schedule
function loadDriverComplaints() {
    // Example complaints data (this can be fetched from your database or API)
    const complaints = [
        { complaintId: "C001", userName: "Alice", location: "Downtown", request: "Street cleaning", assignedRoute: "Route 12" },
        { complaintId: "C002", userName: "Bob", location: "Uptown", request: "Trash pickup", assignedRoute: "Route 18" },
        { complaintId: "C003", userName: "Charlie", location: "Midtown", request: "Garbage bin replacement", assignedRoute: "Route 5" }
    ];

    // Get the driver schedule body and complaints table
    const complaintsTable = document.getElementById("complaints");
    const scheduleBody = document.getElementById("work-schedule-body");

    complaintsTable.innerHTML = ""; // Clear any previous data
    scheduleBody.innerHTML = ""; // Clear the work schedule

    complaints.forEach(function(complaint) {
        // Add complaints to the table
        const complaintRow = document.createElement("tr");
        complaintRow.innerHTML = `
            <td>${complaint.complaintId}</td>
            <td>${complaint.userName}</td>
            <td>${complaint.location}</td>
            <td>${complaint.request}</td>
            <td>
                <button onclick="assignWork('${complaint.complaintId}', '${complaint.assignedRoute}')">Assign</button>
            </td>
        `;
        complaintsTable.appendChild(complaintRow);
    });
}

// Function to assign the work to the driver and add it to the schedule
function assignWork(complaintId, assignedRoute) {
    // Here, you can update the schedule dynamically based on the complaint and assigned route
    const scheduleBody = document.getElementById("work-schedule-body");

    // Example of how you can assign work (based on the assigned route and complaint)
    const assignedSchedule = {
        "Route 12": { day: "Monday", startTime: "8:00 AM", endTime: "4:00 PM" },
        "Route 18": { day: "Tuesday", startTime: "8:00 AM", endTime: "4:00 PM" },
        "Route 5": { day: "Wednesday", startTime: "8:00 AM", endTime: "4:00 PM" }
    };

    // Get the schedule for the assigned route
    const routeSchedule = assignedSchedule[assignedRoute];

    if (routeSchedule) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${routeSchedule.day}</td>
            <td>${routeSchedule.startTime}</td>
            <td>${routeSchedule.endTime}</td>
            <td>${assignedRoute}</td>
            <td>${complaintId}</td>
        `;
        scheduleBody.appendChild(row);
    }

    // Optionally, update the complaint status to "Assigned" (this could be done dynamically)
    alert(`Work assigned for Complaint ID: ${complaintId} to ${assignedRoute}`);
}

// Function to toggle the visibility of the work schedule
function toggleSchedule() {
    const scheduleContainer = document.getElementById("schedule-container");
    if (scheduleContainer.style.display === "none") {
        scheduleContainer.style.display = "block";
    } else {
        scheduleContainer.style.display = "none";
    }
}

// Function to update the work status (optional)
function updateWorkStatus() {
    alert("Work status updated.");
}

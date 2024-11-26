<?php
session_start();
include 'db.php';

// Ensure the user is logged in and has the appropriate role
if (!isset($_SESSION['username']) || $_SESSION['role'] !== 'user') {
    header('Location: index.html');
    exit();
}

echo "<h1>Driver Profiles</h1>";

// Fetch driver profiles from the database
$sql = "SELECT * FROM drivers";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data for each driver
    while ($row = $result->fetch_assoc()) {
        echo "<div class='driver-profile'>";
        echo "<p><strong>Driver Name:</strong> " . $row['driver_name'] . "</p>";
        echo "<p><strong>Truck Number:</strong> " . $row['truck_number'] . "</p>";
        echo "<p><strong>Route Area:</strong> " . $row['route_area'] . "</p>";
        echo "<p><strong>Phone Number:</strong> " . $row['phone_number'] . "</p>";
        echo "<hr>";
        echo "</div>";
    }
} else {
    echo "<p>No drivers available at the moment.</p>";
}

$conn->close();
?>

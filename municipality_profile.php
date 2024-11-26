<?php
session_start();
include 'db.php';

// Ensure the user is logged in and has the appropriate role
if (!isset($_SESSION['username']) || $_SESSION['role'] !== 'user') {
    header('Location: index.html');
    exit();
}

echo "<h1>Municipality Office Contacts</h1>";

// Fetch municipality office details from the database
$sql = "SELECT * FROM municipality";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data for each municipality office
    while ($row = $result->fetch_assoc()) {
        echo "<div class='municipality-profile'>";
        echo "<p><strong>Office Name:</strong> " . $row['office_name'] . "</p>";
        echo "<p><strong>Location:</strong> " . $row['location'] . "</p>";
        echo "<p><strong>Phone Number:</strong> " . $row['phone_number'] . "</p>";
        echo "<p><strong>Email:</strong> " . $row['email'] . "</p>";
        echo "<hr>";
        echo "</div>";
    }
} else {
    echo "<p>No municipality offices available at the moment.</p>";
}

$conn->close();
?>

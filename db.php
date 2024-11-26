<?php
$servername = "localhost";
$username = "root";
$password = "root";  // Default is blank. If you have a password, enter it here.
$dbname = "waste_management";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

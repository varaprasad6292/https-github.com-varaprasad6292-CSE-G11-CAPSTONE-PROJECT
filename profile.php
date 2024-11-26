<?php
session_start();

if (!isset($_SESSION['username'])) {
    header('Location: index.html');
    exit();
}

echo "<h1>Welcome, " . $_SESSION['username'] . "!</h1>";
echo "<p>Your role: " . $_SESSION['role'] . "</p>";

if ($_SESSION['role'] === 'user') {
    echo "<a href='driver_profile.php'>View Driver Profiles</a>";
    echo "<br><a href='municipality_profile.php'>Contact Municipality</a>";
} elseif ($_SESSION['role'] === 'driver') {
    echo "<p>Driver Dashboard - Manage your routes and pickups.</p>";
} elseif ($_SESSION['role'] === 'municipality') {
    echo "<p>Municipality Dashboard - Manage waste collection and user requests.</p>";
}
?>
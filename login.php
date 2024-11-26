<?php
session_start();
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $role = $_POST['role'];

    $sql = "SELECT * FROM users WHERE username = ? AND role = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $role);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['username'] = $user['username'];
            $_SESSION['role'] = $user['role'];

            // Redirect based on user role
            if ($user['role'] == 'driver') {
                header('Location: driver_dashboard.html');
            } elseif ($user['role'] == 'municipality') {
                header('Location: municipality_dashboard.html');
            } elseif ($user['role'] == 'user') {
                header('Location: profile.php');
            }
            exit();
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "No user found with that username and role.";
    }
}
?>

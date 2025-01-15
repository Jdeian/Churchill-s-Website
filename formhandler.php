<?php

// Retrieve form data
$name = $_POST['name'];
$comment = $_POST['comment'];
$rating = $_POST['rating'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'testimonials');
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
    // Prepare and execute the SQL statement
    $stmt = $conn->prepare("INSERT INTO testimonials (Name, Comment, Rating) VALUES (?, ?, ?)");
    // Bind parameters
    $stmt->bind_param("ssi", $name, $comment, $rating);
    // Execute the statement
    if ($stmt->execute()) {
        echo "Registration Successful";
    } 

    $stmt->close();
    $conn->close();
}
?>

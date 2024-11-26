-- Create the database
CREATE DATABASE IF NOT EXISTS waste_management;
USE waste_management;

-- Create the users table
CREATE TABLE users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,  -- Use hashed passwords
    role ENUM('user', 'driver', 'municipality') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the messages table for communication
CREATE TABLE messages (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    sender VARCHAR(50) NOT NULL,
    receiver VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create drivers table
CREATE TABLE drivers (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    driver_name VARCHAR(50) NOT NULL,
    truck_number VARCHAR(50) NOT NULL,
    route_area VARCHAR(50) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- Create municipality table
CREATE TABLE municipality (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    office_name VARCHAR(100) NOT NULL,
    office_address TEXT NOT NULL,
    contact_person VARCHAR(50),
    contact_number VARCHAR(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO drivers (driver_name, truck_number, route_area, phone_number) VALUES
('varaprasad', 'TN-01234', 'Central City', '1234567890'),
('sujith', 'TN-56789', 'presidencyuniversity', '0987654321');

INSERT INTO municipality (office_name, location, phone_number, email) VALUES
('Central Waste Management', '123 Central Avenue', '555-1234', 'central@wastegov.com'),
('Rajankunte Municipality', '456 North Street', '555-5678', 'northhills@wastegov.com');


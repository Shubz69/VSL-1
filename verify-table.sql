-- Step 1: Make sure you're using the railway database
USE railway;

-- Step 2: Show all tables in the railway database
SHOW TABLES;

-- Step 3: If applications table exists, show its structure
DESCRIBE applications;

-- Step 4: View any existing data (will be empty until first submission)
SELECT * FROM applications ORDER BY createdAt DESC;



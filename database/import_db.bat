@echo off
title DUST Local MySQL Setup
echo =====================================================================
echo DUST -- Choice of Motherland (Everest Edges Pvt. Ltd.)
echo Local MySQL Database Setup & Schema Import Tool
echo =====================================================================
echo.
set /p MYSQL_PASS="Enter your local MySQL root password: "

mysql -u root -p%MYSQL_PASS% < "%~dp0schema.sql"

if %ERRORLEVEL% EQU 0 (
    echo.
    echo SUCCESS! Database 'dust_db' and all 7 tables created successfully!
    echo Tables created:
    echo  - categories
    echo  - products
    echo  - users
    echo  - orders
    echo  - order_items
    echo  - distributor_leads
    echo  - contact_inquiries
) else (
    echo.
    echo ERROR: Import failed. Please check your MySQL password or path.
)
echo.
pause

#!/bin/bash

echo "Terminating MySQL container..."
docker kill drupal_mysql
echo "Removing MySQL container..."
docker rm drupal_mysql
echo "Starting MySQL container..."
docker run -d --name=drupal_mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=drupal -e MYSQL_USER=drupal -e MYSQL_PASSWORD=drupal centurylink/mysql

if [[ $? -ne 0 ]]; then
    echo "Failed to start MySQL container for Drupal!"
    exit 1
fi

echo "Terminating Drupal container..."
docker kill drupal
echo "Removing Drupal container..."
docker rm drupal
echo "Starting Drupal container..."
docker run -d --name=drupal --link=drupal_mysql:DB -p 8888:80 centurylink/drupal

if [[ $? -ne 0 ]]; then
    echo "Failed to start Drupal container!"
    exit 1
fi

echo "Drupal is running at http://localhost:8888"


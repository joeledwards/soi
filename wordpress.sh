#!/bin/bash

echo "Terminating MySQL container..."
docker kill wordpress_mysql
echo "Removing MySQL container..."
docker rm wordpress_mysql
echo "Starting MySQL container..."
docker run --name=wordpress_mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql:5.6.21

echo "Waiting for MySQL to start..."
tries=10
count=1
result=1
while [[ $result -ne 0 && $count -le $tries ]]; do
    sleep 1
    echo "  check ${count} of ${tries}"
    ./check_db.py #2>&1 >> /dev/null
    result=$?
    count=$[$count + 1]
done

if [[ $result -ne 0 ]]; then
    echo "MySQL did no start!"
else
    echo "MySQL is running."

    echo "Terminating Wordpress container..."
    docker kill wordpress
    echo "Removing Wordpress container..."
    docker rm wordpress
    echo "Starting Wordpress container..."
    docker run --name=wordpress --link=wordpress_mysql:mysql -p 8080:80 -d wordpress:4.0.0

    echo "Wordpress started at http://localhost:8080"
fi


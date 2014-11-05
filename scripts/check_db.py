#!/usr/bin/env python
import pymysql
import sys

try:
    connectin = pymysql.connect(host='localhost', port=3306, user='root', passwd='root', db='mysql')
    cursor = connectin.cursor()

    cursor.execute('SELECT 1')

    for row in cursor:
        print row
except Exception, e:
    print "error:", e
    sys.exit(1)


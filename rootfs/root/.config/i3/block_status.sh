#!/bin/sh

while :
do
    memory_usage=`free -m | awk 'NR==2{print (($3+$5)*100)/$2 }'`
    echo "MEM: ${memory_usage%.*}% | $(date) "
    sleep 5
done
#!/bin/sh

while :
do
    memory_usage=`free -m | awk 'NR==2{print ($4/$3)*100 }'`
    echo "MEM: ${memory_usage%.*}% | $(date) "
    sleep 5
done
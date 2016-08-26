#!/bin/bash

rm -f travelshare.js

for FILE1 in `ls | grep js | grep -v js~` ; do
echo "// "$FILE1 >> travelshare.js
printf "\n"  >> travelshare.js
cat $FILE1 >> travelshare.js
printf "\n"  >> travelshare.js
done

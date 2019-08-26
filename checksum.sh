#!/bin/bash

# generate checksum of all package.json inside the repo
# used for caching and restoring dependencies in circleci

RESULT_FILE="${1:-checksum.txt}"

if [ -f "$RESULT_FILE" ]; then
  rm "$RESULT_FILE"
fi
touch "$RESULT_FILE"

checksum_file() {
  openssl md5 "$1" | awk '{print $2}'
}

FILES=('package.json')
while read -r -d ''; do
  FILES+=("$REPLY")
done < <(find ./packages -maxdepth 2 -name 'package.json' -type f -print0)

# loop through package files and append MD5 to result file
for FILE in "${FILES[@]}"; do
  checksum_file "$FILE" >> "$RESULT_FILE"
done

# sort the result file
sort "$RESULT_FILE" -o "$RESULT_FILE"

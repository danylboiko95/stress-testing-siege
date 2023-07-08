#!/bin/bash

concurrency_levels=(10 25 50 100)
urls_file=./urls.txt

for concurrency in "${concurrency_levels[@]}"
do
  echo "Running Siege with concurrency: $concurrency"
  siege -c $concurrency -t 20s -f $urls_file

  sleep 5
done

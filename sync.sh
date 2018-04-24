#!/bin/sh

html-minifier --output index.html index.big.html

aws --profile propr s3 sync \
  --exclude '.DS_Store/*' --exclude 'sync.sh' --exclude '.git/*' \
  --cache-control 'max-age=86400' \
  . s3://propr.tech/expshrunk

# TODO

# max-age=86400 where appropriate

#!/bin/sh
path="$(pwd)/_site"
sed "s|SOURCE_ROOT|$path|" nginx.conf.template > nginx.conf
nginx -c $(pwd)/nginx.conf

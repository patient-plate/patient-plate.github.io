#!/bin/bash
# build.sh - clean, build, copy

# Exit immediately if a command exits with a non-zero status
set -e

echo "Cleaning assets and dist folders"
rm -rf assets/* dist/*

echo "Restoring index.html from backup"
cp -rf index_backup.html index.html

echo "Running build"
npm run build

echo "Copying built files to root"
cp -rf dist/* .

echo "Build completed, exiting now."

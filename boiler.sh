## Script to create boilerplate code

## Usage : boiler.sh [DIRECTORY_NAME] <DESCRIPTION>

## Create the new Directory
mkdir $1

## Copy the files frm ./scaffolding directory
cp -r ./scaffolding/* $1

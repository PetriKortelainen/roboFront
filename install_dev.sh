#!/bin/bash

user=""
password=""
url="proto294.haaga-helia.fi"
target="/home/robo"
current=$(pwd)

#Asenna
grunt build
#Tarkista


#Paketoi
tar -cZf $current/dist/ 

#Siirrä

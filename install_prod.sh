#!/bin/sh
user=$1
server="proto460.haaga-helia.fi"
target="/home/robofront/app/"

if [ ! -z "$user" ]
then
    #Asenna
    echo "BUILD"
    grunt build

    #Paketoi
    echo "CREATE PACKET"
    tar -cf dist.tar.gz ./dist/*

    #Siirrä
    echo "MOVE TO SERVER: "$server
    scp dist.tar.gz $user@$server:/home/$user/
    ssh -l -t $user@$server 'sudo rm -rf '$target'*;
    sudo mv /home/'$user'/dist.tar.gz '$target';
    sudo tar -xf '$target'dist.tar.gz -C '$target';
    sudo chown -R robofront:users '$target'*;
    sudo mv '$target'dist/* '$target';
    sudo rm -rf '$target'dist*;'

    #Cleanup
    echo "CLEANUP"
    rm -rf ./dist.tar.gz
    rm -rf ./dist/
else
    echo "give username as parameter"
fi

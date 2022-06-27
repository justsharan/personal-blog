#!/bin/bash
rm -rf $PWD/out
yarn build
ssh root@justsharan.xyz 'rm -rf /var/www/html/justsharan.xyz'
scp -r $PWD/out root@justsharan.xyz:/var/www/html/justsharan.xyz
rm -rf $PWD/out
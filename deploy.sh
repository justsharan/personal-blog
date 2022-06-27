#!/bin/zsh
rm -rf $PWD/out
npx next build
npx next export
ssh root@justsharan.xyz 'rm -rf /var/www/html/justsharan.xyz'
scp -r $PWD/out root@justsharan.xyz:/var/www/html/justsharan.xyz
rm -rf $PWD/out
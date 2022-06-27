#!/bin/bash
rm -rf $PWD/out
npx next build
npx next export
mkdir $PWD/out/movies
mv $PWD/out/movies.html $PWD/out/movies/index.html
mv $PWD/out/posts.html $PWD/out/posts/index.html
ssh root@justsharan.xyz 'rm -rf /var/www/html/justsharan.xyz'
scp -r $PWD/out root@justsharan.xyz:/var/www/html/justsharan.xyz
rm -rf $PWD/out
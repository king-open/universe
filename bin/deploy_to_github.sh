#!/usr/bin/env bash
rm -rf dist
pnpm run bild
cd dist
git add .
git commit -m delpoy
git remote add origin xxxx.git
git push -f origin main:main
cd -

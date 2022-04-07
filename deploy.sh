#!/usr/bin/env sh

# 发生错误时终止
set -e

#rm -rf online

# 构建
yarn run build:examples

# 进入构建文件夹
cd online

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

#git init
#git checkout main
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:realsee-developer/dnalogel.git main:gh-pages

cd -

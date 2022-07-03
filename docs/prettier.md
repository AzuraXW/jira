## 配置 prettier

prettier 官网：[https://prettier.io/](https://prettier.io/)

### step1

```
npm install --save-dev --save-exact prettier
echo {}> .prettierrc.json
```

### step2 配置 pre-commit hooks

```
npx mrm@2 lint-staged
```

## 配置 commitlint

[官方文档](https://github.com/conventional-changelog/commitlint)

### step1

```
npm install --save-dev @commitlint/config-conventional @commitlint/cli

# Configure commitlint to use conventional config

echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```

> 相关文章： [commitLint 和 husky 实现代码提交校验](https://cloud.tencent.com/developer/article/1965422)

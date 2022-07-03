## 使用 json-server 作为 mock 方案

[json-server 官方文档](https://github.com/typicode/json-server)

### step1. 在项目中安装 json-server

```
npm install json-server -D
```

### 创建文件

在项目中添加目录 \_\_json_server_mock\_\_  
添加文件 db.json

### 启动 json_server

```
json-server __json_server_mock__/db.json --watch
```

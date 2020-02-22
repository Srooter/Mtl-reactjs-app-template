
Mtl-reactjs-app-template

中文 | [English](README.md)

一个基于create-react-app模板，用于创建一个reactjs前端应用和一个nodejs后端应用。

![GitHub](https://img.shields.io/github/license/Srooter/Mtl-reactjs-app-template)

## 特征

1. 基于 `create-reactjs-app` 集成常用插件。

2. 基于 `Koa2` 搭建nodejs api接口服务。
    
## 环境支持

现代浏览器，Chrome,Firefox,Edge的最新一个版本。

## Usage

1. `git clone https://github.com/Srooter/Mtl-reactjs-app-template.git` 或下载zip。

2. `npm install`

3. `npm run start`

4. `npm run start-server`

## 配置 

`.env` 文件 

### `BUNDLE_VISUALIZE`

- 选项: `0` | `1`
- 默认: `1`

### `OUTPUT_PUBLIC_PATH`

- 类型: `String`
- 默认: ``
- 例子：`http://www.xxx.com`                      

## Npm命令

- `npm run clean`: 清除 npm 缓存。

- `npm run start`: 启用reactjs开发环境。

- `npm run start-server`: Start nodejs server app development environment.

- `npm run build`: 发布reactjs应用。

- `npm run build-debug`: 发布开发环境reactjs应用。

- `npm run postbuild`: reactjs预渲染。

- `npm run uncss`: 检查css文件未使用的样式并打印在控制台。

- `npm run test`: 运行单元测试。

- `npm run prettier-html`: 格式化所有html文件。

- `npm run prettier-css`: 格式化所有css文件。

- `npm run prettier-js`: 格式化所有js文件。

- `npm run prettier-all`: 格式化所有html+css+js文件。

- `npm run storybook`: 测试并运行reactjs组件。

- `npm run build-storybook`: 导出并运行reactjs组件到html文件.

> `npm run uncss` 检查src目录的css文件未使用的样式。


## 参考

- [create-react-app](https://github.com/facebook/create-react-app).

## License

The MIT License(http://opensource.org/licenses/MIT).


Mtl-reactjs-app-template

English|[中文](README-zh.md)

A base on create-react-app template，build a front-end react js app and a back-end nodejs app.

![GitHub](https://img.shields.io/github/license/Srooter/Mtl-reactjs-app-template)

## Features

1.Base on `create-reactjs-app` integrate common plugins. 

2.Base on `Koa2` Build nodejs api interface service.
    
## Environment Support

Modern browser,like Chrome,Firefox,Edge last 1 versions.

## Usage

1.`git clone https://github.com/Srooter/Mtl-reactjs-app-template.git` or download zip.

2.`npm install`

3.`npm run start`

4.`npm run start-server`

## Config 

`.env` file 

### `BUNDLE_VISUALIZE`

- Option: `0` | `1`
- Default: `1`

### `OUTPUT_PUBLIC_PATH`

- Type: `String`
- Default: ``
- Example：`http://www.xxx.com`                      

## Npm Command 

- `npm run clean`: Clean npm cache.

- `npm run start`: Start reatjs app development environment.

- `npm run start-server`: Start nodejs server app development environment.

- `npm run build`: Publish reactjs application.

- `npm run build-debug`: Publish reactjs application for development environment.

- `npm run postbuild`: Reactjs Pre-renders.

- `npm run uncss`: Check css files unused styles and print to console.

- `npm run test`: Run unit test.

- `npm run prettier-html`: Formatter all html files.

- `npm run prettier-css`: Formatter all css files.

- `npm run prettier-js`: Formatter all js files.

- `npm run prettier-all`: Formatter all html,css,js files.

- `npm run storybook`: Test and playground for reactjs components.

- `npm run build-storybook`: Exporting reactjs components output to html file.

> `npm run uncss` Check src dir css files unused styles.


## Reference

- [create-react-app](https://github.com/facebook/create-react-app).

## License

The MIT License(http://opensource.org/licenses/MIT).

# wp-webpack-theme

#### A blank open source WordPress theme working with webpack bundler ####

The goal of this WordPress theme is to create an easy-to-use, friendly and lightweight environment to combine both the structure of a WordPress theme and the power of a bundler.

[![Only 2 Kb](https://badge-size.herokuapp.com/louislspn/wp-webpack-theme/master/bundler/webpack.dev.js)](https://github.com/Naereen/StrapDown.js/blob/master/bundler/webpack.dev.js)
[![GitHub version](https://badge.fury.io/gh/louislspn%2Fwp-webpack-theme.svg)](https://github.com/louislspn/wp-webpack-theme)
[![Maintenance](https://img.shields.io/badge/maintained-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![GitHub contributors](https://img.shields.io/github/contributors/louislspn/wp-webpack-theme.svg)](https://GitHub.com/louislspn/wp-webpack-theme/graphs/contributors/)

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Run webpack](#run-webpack)

## 1. Introduction

This blank WordPress theme will allow you to install dependecies to your project. You will be able to write .scss and webpack will compile it into minified .css file.

The theme comes with [BrowserSync](https://github.com/BrowserSync/browser-sync) to reload automatically your web server when a change is detected in your project files.

To use this theme you will need :

- node.js
- npm
- local web server
- wordpress installed

## 2. Installation

### Download

- Download the [ZIP folder of the project](https://github.com/louislspn/wp-webpack-theme/archive/refs/heads/main.zip).
- Unzip it
- Rename it "wp-webpack-theme"
- Move it to your WordPress themes folder

```
[wp-folder-name]/wp-content/themes/wp-webpack-theme
```

### Clone

If you prefere to clone the Github repository, go head and do so
```
cd [path/to/your/wp-folder]/wp-content/themes
```
```
git clone https://github.com/louislspn/wp-webpack-theme.git
```

### Install dependencies

In the freshly installed theme folder run the command below
```
npm install
```



## 3. Configuration

To make the webpack configuration works with your environment you will have to tell your WordPress theme the path of your local web server. So first of all, **launch your usual web local server on your computer** such as WAMP or MAMP.

In the ```bundler/config.js``` file, write the path where you usually access to your WordPress website with your local server. For example :

```js
exports.datas = {
  'localPath': 'localhost:8888/my-wp-project'
}
```

SASS will be writen in the ```assets/src/sass/app.scss``` file.

JS will be writen in the ```assets/src/js/app.js``` file.

## 4. Run webpack

Once you have installed and configured the ```wp-webpack-theme```, you should be able to run webpack to start coding your project. You have 2 diffrent configurations for both development and production purpose.

|        environment         |   configuration    | command |
| :-----------------: | :---------: | :----------: |
|  development  | ```bundler/webpack.dev.js```  | ```npm run dev```  |
|  production | ```bundler/webpack.prod.js``` | ```npm run build```

### Development

```npm run dev```

This command will start your BrowserSync server, watch for changes in your file and compile your assets.

## Production

```npm run build```

This command will build once minified CSS and JS files with sourcemaps to upload your website in production.

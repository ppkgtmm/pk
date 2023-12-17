# personal website

Make sure to be inside project directory in your terminal

### Initialization

Steps below are required for those using Node JS or yarn for the first time 

1. Install `Node JS (v20.6.1)` after downloading `Source code
(tar.gz)` from [Node JS](https://github.com/nodejs/node/releases/tag/v20.6.1) github repo

2. Run below in terminal to install yarn package manager
```
npm install --global yarn
```

### Install Dependencies
```sh
yarn install
```

### Run App
``` sh
yarn start
```
- Open `http://localhost:3000` to view the app in browser
- The page will reload when changes are made and lint errors (if any) will appear in the console

### Build App
```
yarn build
```
- App will be built for production to the `build` folder
- Code will be correctly bundled in production mode and optimized for the best performance
- The build will be minified and the filenames will include hashes resulting in ready to deploy app

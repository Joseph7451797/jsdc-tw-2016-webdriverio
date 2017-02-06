## Note:

This is a fork from alincode, some stuff is added to enhance feature.
Please check the latest commit for more information, and remember to install packages before running test.

```
$ npm install
```


# JSDC.tw 2016 Webdriver.IO

**init project**

```
mkdir jsdc-tw-2016-webdriverio
cd jsdc-tw-2016-webdriverio
npm init -y
npm i webdriverio -D
```

**generate config**

```
./node_modules/webdriverio/bin/wdio
```

**setting up npm test**

`vi package.json`

```
"test": "wdio wdio.conf.js"
```

**first test script**

```
mkdir -p test/specs
touch ./test/specs/demo.js
```
**execute**

```
npm test
npm run demo1
npm run demo2
```

### more example
* [modern web 2016 e2e test demo](https://github.com/alincode/modern-web-2016-e2etest)

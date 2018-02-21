# Create.js 与 Adobe Animate CC H5互动交互项目


## 目录结构
```shell
1.安装cnpm,避免有些包国内下不下来
https://npm.taobao.org/

2.安装依赖
cnpm install
请注意如果是使用Webstorm，Idea之类的IDE，请设置node_modules目录为Excluded
避免遍历该目录过久，IDE界面无反应状态。
```
*建议使用Visual Studio Code > V1.10版本*


## 通讯方式
#### 1. Animate to Create.js
```js
// Animate层:通过派发事件方式通知create.js, poModel为create.js自定义事件接收对像
if (p0Model) {
	p0Model.dispatchEvent("p0-complete");
}

// Create.js层: 创建自定义对像接收事件
window.p0Model = new createjs.EventDispatcher();
window.p0Model.addEventListener('p0-complete', function(e){
    console.log(e.type); 
});

// 输出 p0-complete
```

#### 2. Create.js to Animage
```js
// 新建Animate库里导出的对像，然后添加入场景
var musicBtn = new lib0.music();
window.stage.addChild(musicBtn);

// 控制对像
musicBtn.gotoAndStop(2);
```

## 运行
```js
npm install
npm run serve
```

## 访问
```js
http://localhost:7001/public/montage/index.html
```

## 预览
<img src='./Animation.gif'>

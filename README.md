# Create.js 与 Adobe Animate CC H5互动交互项目


## 说明
```js
1.支持多场景动态加载
2.支持场景动画通过Adobe Animate CC生成,适用于个性化动画展示
3.支持微信分享(前端部份)
4.支持手势交互，向上滑加载下一场景，向下滑动加载上一场景
```

## 目录结构
```shell
configs ---         配置项
engine ---          H5交互逻辑
  |---core          create.js引擎文件
  |---entrance      主交互入口
  |---event         横竖屏切换处理
  |---music         音乐管理器
  |---share         微信分享管理器
  |---swipe         滑动事件管理器
  |---touch         点击事件管理器
  |---view          主场景显示对像基类
images---           资源图片目录
  |---p0                         场景0动画
  |---p1                         场景1动画
  |---p2                         场景2动画
  |---p3                         场景3动画
  |---p4                         场景4动画
  |---p5                         场景5动画
  |---p6                         场景6动画
  |---p7                         场景7动画
  |---_preloader.png             加载中提示图片
  |---cover.jpg                  微信分享封面

sounds ---资源声音目录
index.html --入口文件
index.js   --入口JS
```
*请注意源文件在app/public/montage目录,此目录为EGG SERVER端静态资源目录，不同框架请依据该框架静态资源目录设置*

## P0-P7 需要在每次FLA发布之后依据服务器更改服务器静资源路径，例如:
```js
// p0/montage-po.js
lib.properties = {
	...
	manifest: [{src: 'images/montage_p0_atlas_.png', id: 'montage_p0_atlas_'}],
	...
};

// 更改成:
// p0/montage-p0.js
lib.properties = {
	...
	manifest: [{src: window.configs.perfixUrl + '0/images/montage_p0_atlas_.png', id: 'montage_p0_atlas_'}],
	...
};

// 0代表第N个动画
```


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
<img src='app/public/montage/Animation.gif'>

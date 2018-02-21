(function () {
    'use strict';

    var stage = {}; 
    var view = {};
    var pageView = {};
    var currentSceneNum = 0;
    var currentScene = 'lib1';
    var currentImages = 'images1';
    var nextPlaySceneNum = 0;
    var MAX_CONNECTIONS = 100;
    var PERCENT_100 = 100;

    // 事件接收器，画布引用
    window.p0Model = new createjs.EventDispatcher();
    window.p1Model = new createjs.EventDispatcher();
    window.p2Model = new createjs.EventDispatcher();
    window.p3Model = new createjs.EventDispatcher();
    window.p4Model = new createjs.EventDispatcher();
    window.p5Model = new createjs.EventDispatcher();
    window.p6Model = new createjs.EventDispatcher();
    window.p7Model = new createjs.EventDispatcher();

    /**
     * 接收场景播放完毕事件更新
     * @param {*} e 
     */
    function updateSceneEvent(e) {
        var type = e.type || '';
        var typeList = '';
        var typeBefore = '';

        switch (type) {
            case 'p0-complete':
                // 出现播放按钮,陶藏默认的操作按钮
                coreEngine.updateEntrance();
                // 加载背景音乐
                coreEngine.updateBackgroundMusic();
                // 标记已完成播放场景
                nextPlaySceneNum = 1;
            break;
                
            case 'p7-complete':
                // 出现分享和重复播放按钮
                coreEngine.updateEnd();
                // 标记已完成播放场景
                nextPlaySceneNum = 1;
            break;

            default:
                // 加载下一场景
                typeList = type.split('-');

                if (typeList && typeList.length > 0) {
                    typeBefore = typeList[0];
                    typeBefore = typeBefore.replace('p', '');
                    typeBefore = Number(typeBefore);
                    typeBefore++;
                    
                    // 标记已完成播放场景
                    nextPlaySceneNum = typeBefore;

                    // 显示下一场景可播放箭头按钮
                    coreEngine.showArrowBtn();
                }
            break;
        }
    }

    /**
     * 场景资源引用
     * @param {*} sceneUsingNum 
     */
    function getSecneView(sceneUsingNum) {
        return new window[sceneUsingNum].scene();
    }

    /**
     *  单个文件加载完毕监听
     * @param {*} evt 
     */
    function handleFileLoad(evt) {
        if (evt.item.type == 'image') {
            window[currentImages][evt.item.id] = evt.result;
        }
    }

    /**
     * 加载进度
     * @param {*} event 
     */
    function loadProgressHandler(event) {
        var loadingProcess = (event.progress * PERCENT_100).toFixed(0) + '%';

        document.getElementById('loaderLbl').innerHTML = loadingProcess;
    }

    /**
     * 切换场景
     */
    function changeScene(reuse) {
        var layerView = '';

        if (reuse) {
            layerView = pageView[currentScene];
        } else {
            layerView = getSecneView(currentScene);
            pageView[currentScene] = layerView;
        }
        switch (currentSceneNum) {
            default: 
            if (view.numChildren) {
                view.addChild(layerView);
            } else {
                view.addChild(layerView);
            }

            // 更新视图，注册按钮等事件
            layerView.gotoAndPlay(0);
            coreEngine.updateView(currentSceneNum, layerView);

            // 播放切换动画
            coreEngine.playSwipeMovie(layerView, view);
            break;
        }
    }

    /**
     * 所有文件加载完毕
     * @param {*} event 
     */
    function loadCompleteHandler(event) {
        var queue = '';
        var ssMetadata = '';
        var i = 0;
        
        // 移除事件
        event.currentTarget.removeEventListener('fileload', handleFileLoad);
        event.currentTarget.removeEventListener('progress', loadProgressHandler);
        event.currentTarget.removeEventListener('complete', loadCompleteHandler);
        
        // 隐藏加载进度条
        coreEngine.hideLoading();

        // sprite sheet
        queue = event.target;
        ssMetadata = window[currentScene].ssMetadata;

        for (i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({'images': [queue.getResult(ssMetadata[i].name)], 'frames': ssMetadata[i].frames});
        }
        
        // 切换场景
        changeScene();
    }

     /**
     * 加载场景
     * @param {*} sceneNum 
     */
    function loadScene(sceneNum) {
        var mainfest = '';
        var loader = '';

        currentScene = 'lib' + sceneNum;
        currentImages = 'images' + sceneNum;

        if (pageView[currentScene]) {
            // 复用资源
            changeScene(true);
        } else {
            // 加载资源
            loader = new createjs.LoadQueue(true);
            mainfest = window[currentScene].properties.manifest;
            mainfest.forEach(function(element) {
                if (element && element.src) {
                    element.src = element.src + '?v=' + window.configs.version;
                }
            });

            loader.installPlugin(createjs.Sound);
            loader.setMaxConnections(MAX_CONNECTIONS);
            loader.maintainScriptOrder = true;
            loader.addEventListener('fileload', handleFileLoad);
            loader.addEventListener('progress', loadProgressHandler);
            loader.addEventListener('complete', loadCompleteHandler);
            loader.loadManifest(mainfest);
            
            // 显示加载进度条
            coreEngine.showLoading();
        }
    }

    /**
     * 初始化
     */
    function init() {
        // 创建场景
        createjs.MotionGuidePlugin.install();
        stage = new createjs.Stage(canvas);
        window.stage = stage;
        createjs.Touch.enable(stage); 

        // 添加主场景
        view = new coreEngine.View();
        stage.addChild(view);

        // 监听子MOVIE传入事件
        window.p0Model.addEventListener('p0-complete', updateSceneEvent);
        window.p1Model.addEventListener('p1-complete', updateSceneEvent);
        window.p2Model.addEventListener('p2-complete', updateSceneEvent);
        window.p3Model.addEventListener('p3-complete', updateSceneEvent);
        window.p4Model.addEventListener('p4-complete', updateSceneEvent);
        window.p5Model.addEventListener('p5-complete', updateSceneEvent);
        window.p6Model.addEventListener('p6-complete', updateSceneEvent);
        window.p7Model.addEventListener('p7-complete', updateSceneEvent);

        // 初始化场景
        loadScene(currentSceneNum);

        // TOUCH事件检测
        coreEngine.updateTouch();

        // 微信分享验证
        coreEngine.getSignature();
    }

    /**
     * 获取当前场景对像
     */
    function getCurrentScene() {
        return pageView[currentScene];
    }

    /**
     * 外部调用更新场景
     * @param {*} sceneNum 
     */
    function updateScene(sceneNum) {
        var currentView = pageView[currentSceneNum];

        if (currentView) {
            currentView.stop();
        }

        currentSceneNum = sceneNum;
        loadScene(currentSceneNum);
    }

    /**
     * 获取下一场景需要播放ID
     */
    function getNextSceneNum() {
        return nextPlaySceneNum;
    }

    /**
     * 获取当前场景ID
     */
    function getCurrentSceneNum() {
        return currentSceneNum;
    }

    coreEngine.init = init;
    coreEngine.updateScene = updateScene;
    coreEngine.getNextSceneNum = getNextSceneNum;
    coreEngine.getCurrentSceneNum = getCurrentSceneNum;
    coreEngine.getCurrentScene = getCurrentScene;
}());
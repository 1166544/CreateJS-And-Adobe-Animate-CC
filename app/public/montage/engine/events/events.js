(function () {
    'use strict';

    var DEVICE_WIDTH = 750;
    var DEVICE_HEIGHT = 1206;
    var FPS = 24;
    var DEVICE_RATIO = 0.665;
    var DEVICE_CENTER = 2;
    var stageWidth = 0;
    var stageHeight = 0;
    var stageScale = 0; 
    var canvas = {};

    // 场景宽高和缩放比例
    canvas = document.getElementById('mainView');
    stageWidth = document.documentElement.clientWidth;
    stageHeight = document.documentElement.clientHeight;
    stageScale = stageWidth / (DEVICE_WIDTH / DEVICE_CENTER);

    // 按比例缩放
    if (stageWidth / stageHeight > DEVICE_RATIO) {
        stageScale = stageHeight / (DEVICE_HEIGHT / DEVICE_CENTER);
        canvas.style.left = (stageWidth - DEVICE_WIDTH / DEVICE_CENTER * stageScale) / DEVICE_CENTER + 'px';
    } else {
        stageScale = stageWidth / (DEVICE_WIDTH / DEVICE_CENTER);
    }
    canvas.style.width = DEVICE_WIDTH / DEVICE_CENTER * stageScale + 'px';
    canvas.style.height = DEVICE_HEIGHT / DEVICE_CENTER * stageScale + 'px';

    /**
     * 暴露对外参数
     */
    function updateExposeData() {
        if (coreEngine) {
            coreEngine.stageWidth = stageWidth;
            coreEngine.stageHeight = stageHeight;
            coreEngine.canvasWidth = canvas.style.width;
            coreEngine.canvasHeight = canvas.style.height;
            coreEngine.stageScale = stageScale;
        }
    }

    /**
     * 定时更新事件
     * @param {*} event 
     */
    function stageBreakHandler(event) {
        if (stageWidth != document.documentElement.clientWidth || stageHeight != document.documentElement.clientHeight) {
            stageWidth = document.documentElement.clientWidth;
            stageHeight = document.documentElement.clientHeight;
            if (stageWidth / stageHeight > DEVICE_RATIO) {
                stageScale = stageHeight / (DEVICE_HEIGHT / DEVICE_CENTER);
                canvas.style.left = (stageWidth - DEVICE_WIDTH / DEVICE_CENTER * stageScale) / DEVICE_CENTER + 'px';
            } else {
                stageScale = stageWidth / (DEVICE_WIDTH / DEVICE_CENTER);
            }

            canvas.style.width = DEVICE_WIDTH / DEVICE_CENTER * stageScale + 'px';
            canvas.style.height = DEVICE_HEIGHT / DEVICE_CENTER * stageScale + 'px';
        }
        if (window.stage) {
            window.stage.update();
        }

        // 暴露场景宽高属性 
        coreEngine.stageScale = stageScale;

        // 更新按钮位置
        if (coreEngine.stageWidth != stageWidth || coreEngine.stageHeight != stageHeight) {
            if (coreEngine.updatePosition) {
                coreEngine.updatePosition();
            }
        }
        
        // 更新对外暴露参数
        updateExposeData();
    }

    // 监听定时器和设置FPS
    createjs.Ticker.setFPS(FPS);
    createjs.Ticker.addEventListener('tick', stageBreakHandler);

    coreEngine.DEVICE_WIDTH = DEVICE_WIDTH;
    coreEngine.DEVICE_HEIGHT = DEVICE_HEIGHT;
    coreEngine.DEVICE_RATIO = DEVICE_RATIO;
    
    updateExposeData();
    window.canvas = canvas;
}());
(function () {
    'use strict';

    var playBtn = '';
    var musicBtn = '';
    var shareBtn = '';
    var replayBtn = '';
    var arrowBtn = '';
    var navBtn = '';
    var shareTips = '';
    var isMusicOn = true;
    var direction = coreEngine.SWIPE_UP;

     /**
     * 音乐按钮点击
     * @param {*} e 
     */
    function handleMusicClick(e) {
        isMusicOn = !isMusicOn;
        if (isMusicOn) {
            musicBtn.gotoAndStop(0);
            coreEngine.playBackground();
        } else {
            musicBtn.gotoAndStop(1);
            coreEngine.stopBackground();
        }
    }

    /**
     * 更新按钮位置
     */
    function updatePosition() {
        var ratio = 0;
        var MUSIC_WIDTH = 54;
        var ARROW_WIDTH = 43;
        var ARROW_HEIGHT = 106;
        var MUSIC_HEIGHT = 56;

        if (!musicBtn) {
            return;
        }
        ratio = stage.canvas.width / stage.canvas.clientWidth;

        // 音乐按钮位置
        musicBtn.x = stage.canvas.width - MUSIC_WIDTH * ratio;
        musicBtn.y = MUSIC_HEIGHT;

        // 向上翻页按钮位置
        arrowBtn.x = stage.canvas.width - ARROW_WIDTH >> 1;
        arrowBtn.y = stage.canvas.height - ARROW_HEIGHT * ratio;
    }

    /**
     * 显示重播按钮
     */
    function showReplayBtn() {
        if (replayBtn) {
            replayBtn.visible = true;
        }
    }

    /**
     * 隐藏重播按钮
     */
    function hideReplayBtn() {
        if (replayBtn) {
            replayBtn.visible = false;
        }
    }

    /**
     * 显示分享按钮
     */
    function showShareBtn() {
        if (shareBtn) {
            shareBtn.visible = true;
        }
    }

    /**
     * 隐藏分享按钮
     */
    function hideShareBtn() {
        if (shareBtn) {
            shareBtn.visible = false;
        }
    }

    /**
     * 显示下一页按钮
     */
    function showArrowBtn() {
        if (arrowBtn) {
            arrowBtn.visible = true;
        }
    }

    /**
     * 隐藏下一页按钮
     */
    function hideArrowBtn() {
        if (arrowBtn) {
            arrowBtn.visible = false;
        }
    }

    /**
     * 显示播放按钮
     */
    function showPlayBtn() {
        if (playBtn) {
            playBtn.visible = true;
        }
    }

    /**
     * 隐藏播放按钮
     */
    function hidePlayBtn() {
        if (playBtn) {
            playBtn.visible = false;
        }
    }

    /**
     * 隐藏分享二维码
     */
    function hideShareTips() {
        if (shareTips) {
            shareTips.visible = false;
        }
    }

    /**
     * 显示分享二维码
     */
    function showShareTips() {
        if (shareTips) {
            shareTips.visible = true;
        }
    }

    /**
     * 显示音乐按钮
     */
    function showMusicBtn() {
        if (musicBtn) {
            musicBtn.visible = true;
        }
    }

    /**
     * 隐藏分享二维码
     */
    function hideMusicBtn() {
        if (musicBtn) {
            musicBtn.visible = false;
        }
    }

    /**
     * BEGIN:添加入口按钮，播放按钮、音乐按钮、分享、重播按钮
     */
    function updateEntrance() {
        if (!musicBtn) {
            musicBtn = new lib0.music();
            window.stage.addChild(musicBtn);

            musicBtn.mouseEnable = true;
            musicBtn.addEventListener('click', handleMusicClick);
        } else {
            showMusicBtn();
        }
        
        if (!arrowBtn) {
            arrowBtn = new lib0.arrow();
            window.stage.addChild(arrowBtn);
        }

        // 定位
        updatePosition();

        // 首界面隐藏
        hideArrowBtn();
    }

    /**
     * END:所有场景播放完毕,出现分享和重复播放按钮
     */
    function updateEnd() {
        showShareBtn();
        showReplayBtn();
    }

    /**
     * 开始播放点击
     * @param {*} e 
     */
    function handlePlayClick(e) {
        var interval = 0;
        var INTER_TIME = 100;

        direction = coreEngine.SWIPE_DOWN;
        playBtn.gotoAndStop(1);
        coreEngine.updateScene(1);
        
        interval = setTimeout(function() {
            clearTimeout(interval);
            hidePlayBtn();
        }, INTER_TIME);
    }

    /**
     * 更新第1页按钮视图
     * @param {*} view 
     */
    function updateFirstView(view) {
        if (playBtn) {
            showPlayBtn();
            
            return;
        }
        playBtn = view.playBtn;
        playBtn.mouseEnable = true;
        playBtn.addEventListener('click', handlePlayClick);
    }

    /**
     * 隐藏默认元素
     */
    function hideShareEmements() {
        hideShareBtn();
        hideReplayBtn();
        hideShareTips();
    }

    /**
     * 分享按钮点击
     * @param {*} e 
     */
    function handleShareClick(e) {
        showShareTips();
    }

    /**
     * 分享图层点击
     * @param {*} e 
     */
    function handleShareViewClick(e) {
        hideShareTips();
    }

    /**
     * 跳转按钮图层点击
     * @param {*} e 
     */
    function handleNavViewClick(e) {
        var url = 'https://wap.your-website.com.com';

        window.open(url, '_blank');
    }

    /**
     * 重播点击
     * @param {*} e 
     */
    function handleReplayClick(e) {
        hidePlayBtn();
        hideShareBtn();
        hideReplayBtn();
        hideShareTips();
        hideArrowBtn();
        coreEngine.updateScene(0);
    }

    /**
     * 最后一页视图开始播放时调用
     * @param {*} view 
     */
    function updateLastView(view) {
        if (shareBtn) {
            hideShareEmements();
            
            return;
        }
        // 分享按钮
        shareBtn = view.shareBtn;
        shareBtn.mouseEnable = true;
        shareBtn.addEventListener('click', handleShareClick);

        // 重播按钮
        replayBtn = view.replayBtn;
        replayBtn.mouseEnable = true;
        replayBtn.addEventListener('click', handleReplayClick);

        // 分享提示图层
        shareTips = view.shareTips;
        shareTips.mouseEnable = true;
        shareTips.addEventListener('click', handleShareViewClick);

        // 跳转到WAP按钮
        navBtn = view.navBtn;
        if (navBtn) {
            navBtn.mouseEnable = true;
            navBtn.addEventListener('click', handleNavViewClick);
        }

        // 隐藏默认元素
        hideShareEmements();
    }

    /**
     * 每次视图开始播放时调用
     * @param {*} currentSceneNum 
     * @param {*} pageView 
     */
    function updateView(currentSceneNum, view) {
        switch (currentSceneNum) {
            case coreEngine.VIEW_0:
                // 第1次进入更新第1页按钮视图
                updateFirstView(view);
            break;
            case coreEngine.VIEW_7:
                // 第1次进入更新最后一页按钮视图
                updateLastView(view);
            break;
            default:
                // hole
            break;
        }
    }

    /**
     * 开始触发加载下一场景
     */
    function loadNextScene() {
        console.log('next..');

        direction = coreEngine.SWIPE_DOWN;
        coreEngine.updateScene(coreEngine.getNextSceneNum());
        hidePlayBtn();
        hideShareBtn();
        hideReplayBtn();
        hideShareTips();
        hideArrowBtn();
    }

    /**
     * 开始触发加载上一场景
     */
    function loadPrevScene() {
        var currentSceneNum = coreEngine.getCurrentSceneNum();
        var prevSceneNum = currentSceneNum - 1;

        if (currentSceneNum == 0) {
            return;
        }
        if (prevSceneNum < 0) {
            prevSceneNum = 0;
        }

        direction = coreEngine.SWIPE_UP;

        hidePlayBtn();
        hideShareBtn();
        hideReplayBtn();
        hideShareTips();
        hideArrowBtn();
        coreEngine.updateScene(prevSceneNum);
        console.log('prev..');
    }

    /**
     * 显示加载进度条
     */
    function showLoading() {
        document.getElementById('_preload_div_').style.display = 'inline-block';
    }

    /**
     * 隐藏加载进度条
     */
    function hideLoading() {
        document.getElementById('_preload_div_').style.display = 'none';
    }

    /**
     * 检测转场按钮显示状态，用于判断是否可以加载下一场景 
     */
    function checkArrowStatus() {
        return arrowBtn.visible;
    }

    /**
     * 获取滑动方向
     */
    function getDirection() {
        return direction;
    }

    coreEngine.showMusicBtn = showMusicBtn;
    coreEngine.hideMusicBtn = hideMusicBtn;
    coreEngine.updatePosition = updatePosition;
    coreEngine.updateEntrance = updateEntrance;
    coreEngine.updateEnd = updateEnd;
    coreEngine.showArrowBtn = showArrowBtn;
    coreEngine.hideArrowBtn = hideArrowBtn;
    coreEngine.hideLoading = hideLoading;
    coreEngine.showLoading = showLoading;
    coreEngine.updateView = updateView;
    coreEngine.loadNextScene = loadNextScene;
    coreEngine.loadPrevScene = loadPrevScene;
    coreEngine.getDirection = getDirection;
    coreEngine.checkArrowStatus = checkArrowStatus;
}());
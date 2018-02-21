(function () {
    'use strict';
    var positionStartY = 0;
    var positionEndY = 0;
    var positionMove = false;
    var isPullDown = true;
    
    /**
     * 弹起事件处理
     * @param {*} e 
     */
    function handleArrowUp(e) {
        if (!coreEngine.checkArrowStatus()) {
            return;
        }

        positionEndY = e.stageY;

        if (positionMove) {
            // true:下拉,false:上拉
            isPullDown = true;

            if (positionStartY > positionEndY) {
                isPullDown = false;
            }

            if (isPullDown) {
                // 上一场景
                coreEngine.loadPrevScene();
            } else {
                // 下一场景
                coreEngine.loadNextScene();
            }
        }

        positionMove = false;
    }

    /**
     * 滑动事件事处理
     * @param {*} e 
     */
    function handleArrowMove(e) {
        if (!coreEngine.checkArrowStatus()) {
            return;
        }
        positionMove = true;
    }

    /**
     * 按下事件处理
     * @param {*} e 
     */
    function handleArrowDown(e) {
        if (!coreEngine.checkArrowStatus()) {
            return;
        }
        positionStartY = e.stageY;
    }

    /**
     * TOUCH事件模拟
     */
    function updateTouch() {
        window.stage.addEventListener('pressup', handleArrowUp);
        window.stage.addEventListener('pressmove', handleArrowMove);
        window.stage.addEventListener('mousedown', handleArrowDown);
    }

    coreEngine.updateTouch = updateTouch;
}());
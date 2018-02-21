(function () {
    'use strict';
    var DURATION = 500;
    
    /**
     * 播放切换场景动画
     * @param {*} layerUpView 
     * @param {*} view 
     */
    function playSwipeMovie(layerUpView, view) {
        var layerDownView = '';
        var direction = '';

        if (view && view.numChildren > 1) {
            layerDownView = view.getChildAt(0);
        }
        
        if (layerUpView && layerDownView) {
            direction = coreEngine.getDirection();
            // console.log('direction>>>>>>>>>>>>', direction);
    
            if (direction == coreEngine.SWIPE_DOWN) {
                // 播放向上滑动动画
                layerDownView.y = 0;
                layerUpView.y = stage.canvas.height;

                createjs.Tween.get(layerUpView)
                .to({y: 0}, DURATION)
                .call(function() {
                    view.removeChildAt(0);
                });

                createjs.Tween.get(layerDownView)
                .to({y: -stage.canvas.height}, DURATION);
            } else {
                // 播放向下滑动动画
                layerDownView.y = 0;
                layerUpView.y = -stage.canvas.height;

                createjs.Tween.get(layerUpView)
                .to({y: 0}, DURATION)
                .call(function() {
                    view.removeChildAt(0);
                });

                createjs.Tween.get(layerDownView)
                .to({y: stage.canvas.height}, DURATION);
            }
        }
    }

    coreEngine.playSwipeMovie = playSwipeMovie;

}());
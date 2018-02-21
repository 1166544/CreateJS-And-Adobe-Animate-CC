(function () {
    'use strict';
    var coreEngine = {};

    /**
     * 构造体
     */
    function View() {
        this.Container_constructor();
    }
    
    createjs.extend(View, createjs.Container);
    coreEngine.View = createjs.promote(View, 'Container');
    coreEngine.VIEW_0 = 0;
    coreEngine.VIEW_1 = 1;
    coreEngine.VIEW_2 = 2;
    coreEngine.VIEW_3 = 3;
    coreEngine.VIEW_4 = 4;
    coreEngine.VIEW_5 = 5;
    coreEngine.VIEW_6 = 6;
    coreEngine.VIEW_7 = 7;
    coreEngine.SWIPE_UP = 'up';
    coreEngine.SWIPE_DOWN = 'down';

    window.coreEngine = coreEngine;
}());
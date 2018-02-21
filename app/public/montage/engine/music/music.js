(function () {
    'use strict';

    var soundID = 'Thunder';
    var soundBgProps = '';
    var isMute = false;

    /**
     * 音乐加载完毕
     * @param {*} event 
     */
    function loadHandler(event) {
        soundBgProps = new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 0.5});
        createjs.Sound.play(soundID, soundBgProps);
        coreEngine.showMusicBtn();
    }

    /**
     * 更新背景音乐
     */
    function updateBackgroundMusic() {
        if (soundBgProps) {
            return;
        }
        createjs.Sound.alternateExtensions = ['mp3'];
        createjs.Sound.on('fileload', loadHandler);
        createjs.Sound.registerSound(window.configs.soundUrl, soundID);
    }

    /**
     * 播放背景音乐
     */
    function playBackground() {
        isMute = false;
        createjs.Sound.play(soundID);
    }

    /**
     * 停止背景音乐
     */
    function stopBackground() {
        isMute = true;
        createjs.Sound.stop();
    }

    /**
     * 播放音效
     * @param {*} id 
     * @param {*} loop 
     */
    function playSound(id, loop) {
        if (isMute) {
            return;
        }
        
        return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
    }

    coreEngine.playBackground = playBackground;
    coreEngine.stopBackground = stopBackground;
    coreEngine.updateBackgroundMusic = updateBackgroundMusic;
    window.playSound = playSound;
}());
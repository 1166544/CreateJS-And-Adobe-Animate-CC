(function () {
    'use strict';
    var SUCCESS_CODE = 200;

    /**
     * 记录日志
     * @param {*} statusStr 
     * @param {*} uaStr 
     * @param {*} shareMessage 
     */
    function updateShareLog(statusStr, uaStr, shareMessage) {
        // test
        return;

        var loader = new createjs.LoadQueue(true);
        var shareStr = '';

        if (shareMessage) {
            shareStr = shareMessage.link;
        }

        loader.addEventListener('complete', function() {
            console.log('onShareSuccess');
        });
        loader.addEventListener('fileload', function(event) {
            console.log('onShareFileload');
        });
        loader.loadManifest([new createjs.LoadItem().set({
            // 服务器上报记录PV日志地址
            src: '/api/service/updateStatusLog',
            id: 'shareSuccess',
            values: {
                status: statusStr,
                ua: uaStr,
                message: shareStr
            },
            method: 'POST',
            headers: {
                'x-csrf-token': 'zSC3v5DlxkRctSnQh6UvsceZ'
            }
        })]);
    }

    /**
     * 更新设置微信分享配置
     * @param {*} wxAccountInfo 
     * @param {*} wxShareInfo 
     */
    function updateShareInfo(wxAccountInfo, wxShareInfo) {
        var userAgentInfo = '';

        if (navigator && navigator.userAgent) {
            userAgentInfo = navigator.userAgent;
        }

        // 配置微信信息
        wx.config({
            debug: false,
            appId: wxAccountInfo.appId,
            timestamp: wxAccountInfo.timestamp,
            nonceStr: wxAccountInfo.nonceStr,
            signature: wxAccountInfo.signature,
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone'
            ]
        });

        // 统计PV
        updateShareLog('ON_SHARE_PV', userAgentInfo, wxShareInfo);

        wx.ready(function () {
            // 微信分享数据
            var shareData = {
                'imgUrl': wxShareInfo.imgUrl,
                'link': wxShareInfo.link,
                'desc': wxShareInfo.desc,
                'title': wxShareInfo.title,
                success: function () {
                    // 分享成相应数据处理
                    updateShareLog('ON_SHARE_SUCCESS', userAgentInfo, wxShareInfo);
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                    updateShareLog('ON_SHARE_FAIL', userAgentInfo, wxShareInfo);
                }
            };

            wx.onMenuShareTimeline(shareData);
            wx.onMenuShareAppMessage(shareData);
            wx.onMenuShareQQ(shareData);
            wx.onMenuShareWeibo(shareData);
            wx.onMenuShareQZone(shareData);
        });

        wx.error(function (res) {
            var errStr = res;

            try {
                errStr = JSON.stringify(errStr);
            } catch (e) {
                console.log(e);
            }
            updateShareLog('ON_SHARE_ERROR', userAgentInfo + '\n' + errStr, wxShareInfo);
        });
    }

    /**
     * 接口请求完成
     * @param {*} event 
     */
    function xhrLoadCompvare(event) {
        // console.log(event);
    }

    /**
     * API数据加载完毕
     * @param {*} event 
     */
    function handleXHRLoad(event) {
        var wxData = '';

        if (event.result) {
            wxData = JSON.parse(event.result);
            // 微信分享默认调用接口
            if (wxData && wxData.data && wxData.code == SUCCESS_CODE) {
                updateShareInfo(wxData.data.wxAccountInfo, wxData.data.wxShareInfo);
            }
        }

    }

    /**
     * 获取签名数据
     */
    function getSignature() {
        // test
        return;

        var loader = new createjs.LoadQueue(true);

        loader.addEventListener('complete', xhrLoadCompvare);
        loader.addEventListener('fileload', handleXHRLoad);
        loader.loadManifest([new createjs.LoadItem().set({
            // 服务器微信分享签名获取地址
            src: '/api/service/getWeChatSignature',
            id: 'waterSignature',
            values: {
                link: encodeURIComponent(document.location.href.split('#')[0]) || 'https://mp.your-website.com/montage/index.html',
                // 分享缩略图地址
                imgUrl: 'https://mp.your-website.com/montage/images/cover.jpg',
                title: '什么鬼！这也要收钱！',
                desc: '那些你以为你知道其实你不知道的值钱的东西。。。'
            },
            method: 'POST',
            headers: {
                'x-csrf-token': 'zSC3v5DlxkRctSnQh6UvsceZ'
            }
        })]);
    }

    coreEngine.getSignature = getSignature;
}());
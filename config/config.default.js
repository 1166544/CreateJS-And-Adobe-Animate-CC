'use strict';

const fs = require('fs');
const path = require('path');

module.exports = appInfo => {
    const config = {};

    // 静态资源目录
    config.sources = 'public';

    // 项目名 
    config.keys = appInfo.name + 'Mobiles';

    // 模板
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.nj': 'nunjucks',
            '.html': 'nunjucks',
        },
    };

    // 模版配置默认关闭过滤
    config.nunjucks = {
        autoescape: false,
    };

    // 静态服务目录
    config.static = {
        prefix: `/${config.sources}/`,
        dir: path.join(appInfo.baseDir, `app/${config.sources}`),
        dynamic: true,
        preload: false,
        buffer: false,
        maxFiles: 1000,
    };

    return config;
};
requirejs.config({

    // baseUrl 配置查询其他文件的根目录
    baseUrl: 'js',

    // paths 对于那些没有直接存放在baseUrl下面的模块，提供一个便捷的访问，可以是目录或者文件。
    paths: {
      jquery: 'libs/jquery-1.11.1',
      moduleTruck: 'modules/ModuleTruck',
      moduleBus: 'modules/ModuleBus',
      moduleCar: 'modules/ModuleCar'

    }
});

// require引入需要用到的模块 function()后边跟上对应模块别名
requirejs(['jquery', 'moduleTruck', 'moduleBus', 'moduleCar'], function($, moduleTruck, moduleBus, moduleCar)
{
  // DOM ready
  $(function()
  {
    console.log('document is ready...');

    // 主要逻辑
    moduleTruck.drive();
    moduleBus.drive();
    moduleCar.drive();

    // 隐藏页面ARTICLE,再显示
    $("article").fadeOut(1000, function(){
      $("article").fadeIn(1000,function(){
        $("h5").css("color","green");
      });
    });
  });

});

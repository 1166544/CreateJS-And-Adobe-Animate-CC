requirejs.config({

    // baseUrl ���ò�ѯ�����ļ��ĸ�Ŀ¼
    baseUrl: 'js',

    // paths ������Щû��ֱ�Ӵ����baseUrl�����ģ�飬�ṩһ����ݵķ��ʣ�������Ŀ¼�����ļ���
    paths: {
      jquery: 'libs/jquery-1.11.1',
      moduleTruck: 'modules/ModuleTruck',
      moduleBus: 'modules/ModuleBus',
      moduleCar: 'modules/ModuleCar'

    }
});

// require������Ҫ�õ���ģ�� function()��߸��϶�Ӧģ�����
requirejs(['jquery', 'moduleTruck', 'moduleBus', 'moduleCar'], function($, moduleTruck, moduleBus, moduleCar)
{
  // DOM ready
  $(function()
  {
    console.log('document is ready...');

    // ��Ҫ�߼�
    moduleTruck.drive();
    moduleBus.drive();
    moduleCar.drive();

    // ����ҳ��ARTICLE,����ʾ
    $("article").fadeOut(1000, function(){
      $("article").fadeIn(1000,function(){
        $("h5").css("color","green");
      });
    });
  });

});

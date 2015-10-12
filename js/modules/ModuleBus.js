// define后边加入数组标明引用的模块名称
define(['moduleCar'], function(moduleCar)
{
  console.log('Bus is init!');
  moduleCar.horn();

  return{

    // 供外部调用方法
    drive: function() {
      console.log('Bus is driving...');
    },

    horn: function() {
      console.log("BA~~~~");
    }

  };
});
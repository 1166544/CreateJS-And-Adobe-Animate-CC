// 定义基类模块 Car
define(function()
{
  console.log('Car is init');

  return{
    drive: function() {
      console.log("Car is driving..");
    },

    horn: function() {
      console.log("DI DI");
    }
  };
});
// define后边加入数组标明引用的模块名称
define(['moduleBus'], function(moduleBus) {
  console.log('Truck is init!');
  moduleBus.horn();

  return {
    drive: function() {
      console.log('Truck is driving...');
    }
  };
});
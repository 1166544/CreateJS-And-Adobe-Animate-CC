// define��߼�������������õ�ģ������
define(['moduleBus'], function(moduleBus) {
  console.log('Truck is init!');
  moduleBus.horn();

  return {
    drive: function() {
      console.log('Truck is driving...');
    }
  };
});
// define��߼�������������õ�ģ������
define(['moduleCar'], function(moduleCar)
{
  console.log('Bus is init!');
  moduleCar.horn();

  return{

    // ���ⲿ���÷���
    drive: function() {
      console.log('Bus is driving...');
    },

    horn: function() {
      console.log("BA~~~~");
    }

  };
});
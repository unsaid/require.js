// 2.定义一个计算器模块
define(function () {

  // 加法
  function add (num1, num2) {
     return num1 + num2
  }

  // 减法
  function sub (num1, num2) {
    return num1 - num2
  }

  // 暴露功能
 return {
  add : add,
  sub : sub
 }

})
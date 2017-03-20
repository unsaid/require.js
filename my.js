// 3.定义自己的模块
define(['./calc','jquery','boot'],function (calc, $) {
  // a.注册点击事件(add)
  $('#add').on('click', function () {
  // b.获取两个文本框的值
  var num1 = $('#num1').val()
  var num2 = $('#num2').val()

  // c.调用calc里的方式相加
  var sum = calc.add(num1 - 0, num2 - 0)
  // d.把c中的中结果放到result 文本框中
  $('#result').val(sum)


  // e弹出模态框
  $('.modal-body').html('<h1>'+ sum +'</h1>')
  $('#mymodel').modal()
  })
})
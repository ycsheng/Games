/**
 * 1. 一般递归函数可以用循环实现，本函数返回的是一个表达式，层级较高
 * 2. 使用尾递归优化，在函数返回时调用函数本身，return中不能含有表达式
 */
var num = 8;
var fun = func(num);
console.log("fun:" + fun);

function func(n) {
  if(n <= 4) {
    console.log("n:" +　n);
    return n;
  }
  // 递归
  var a = func(n - 4);
  var b = func(n - 1);
  var c = func(n - 3);
  var count = a * b - c;
  console.log(count);
  return count;
}



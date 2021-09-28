// 由示例数组完成
var arr = [
  [1, 2, 5],
  [6, 8, 10],
  [15, 18, 30]
];
// 获取数组的行和列数
var row = arr.length;
var column = arr[0].length
// target 在二维数组中需定位的值
var target = 8;
look(target)

function look(target) {
  var i = 0;
  var j = column - 1;
  while(i < row && j >= 0) {
    // 由于数组的行和列都是从小到大排列，使用二分查找，将值与数组中右上角的值比较
    if(target > arr[i][j]) {
      // 大于时，行加1
      i++;
    } else if(target < arr[i][j]) {
      // 小于时，列减1
      j--;
    } else {
      console.log("i:" + i + "," + "j:" + j);
      // console.log(arr[i][j]);
      return true
    }
  }
  return false
}




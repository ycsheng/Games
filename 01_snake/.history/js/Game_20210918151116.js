/* 
  1. 在构造函数中创建一个空对象
  2. 将执行上下文指向这个空对象
  3. 执行里面的所有函数
  4. 执行完成后，返回对象
*/
function Game() {
  // 创建表格
  this.row = 20;  // 行数
  this.col = 20;  //列数
  // 初始化节点
  this.init();
  // 实例化蛇类
  this.snake = new Snake();
  // 执行定时器任务
  this.start();
  // 键盘的事件监听
  this.bindEvent();

  // this.snake.render();
}
// 舞台设计
Game.prototype.init = function() {
  this.dom = document.createElement("table");
  var tr, td;
  // 遍历行和列上树
  for(var i = 0; i < this.row; i++) {
    // 遍历行，创建节点上树
    tr = document.createElement("tr");
    for(var j = 0; j < this.col; j++) {
      // 遍历列，创建节点上树
      td = document.createElement("td");
      tr.appendChild(td)
    }
    // 追加节点上树
    this.dom.appendChild(tr);
  }
  // 表格上树
  document.getElementById("app").appendChild(this.dom)
}

// 清屏方法
Game.prototype.clear = function() {
  // 遍历表格，擦除画布
  for(var i = 0; i < this.row; i++) {
    for(var j = 0; j < this.col; j++) {
      this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].style.background = "white"
    }
  }
}

// 设置颜色的方法
Game.prototype.setColor = function(row, col, color) {
  // 让表格的第几行，第几列设置颜色的方法
  this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].style.background = color;
}

// 设置键盘的事件监听
Game.prototype.bindEvent = function() {
  // 键盘事件
  document.onkeydown = function(event) {
    console.log(event.keyCode);
    39
Game.js:62 40
Game.js:62 37
Game.js:62 38
    // switch(event.keyCode) {

    // }
  }
}

// 定时器
Game.prototype.start = function() {
  this.timer = setInterval(function() {
    // 定时器里面的核心就是游戏的渲染本质，清屏-更新-渲染
    // 清除屏幕，解决蛇会边长但不运动
    game.clear();
    // 渲染蛇
    game.snake.render();
    // 蛇的运动
    game.snake.update();
  }, 500)
}

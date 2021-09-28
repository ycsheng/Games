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
  // 食物位置
  this.food = new Food(this);

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
      this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = ""
    }
  }
}

// 设置颜色的方法
Game.prototype.setColor = function(row, col, color) {
  // 让表格的第几行，第几列设置颜色的方法
  this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].style.background = color;
}

// 渲染食物
Game.prototype.setHTML = function(row, col, html) {
  this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].innerHTML = html;
}

// 设置键盘的事件监听
Game.prototype.bindEvent = function() {
  var self = this;
  // 键盘事件
  document.onkeydown = function(event) {
    console.log(event.keyCode);
    // 39 40 37 38
    switch(event.keyCode) {
      case 39:
        if(self.snake.direction == "L") return;
        // self.snake.direction = "R";
        self.snake.changeDirection("R");
        break;
      case 40:
        if(self.snake.direction == "T") return;
        // self.snake.direction = "D";
        self.snake.changeDirection("D");
        break;
      case 37:
        if(self.snake.direction == "R") return;
        // self.snake.direction = "L";
        self.snake.changeDirection("L");
        break;
      case 38:
        if(self.snake.direction == "D") return;
        // self.snake.direction = "T";
        self.snake.changeDirection("T");
        break;
    }
  }
}

// 定时器
Game.prototype.start = function() {
  // 帧编号
  this.f = 0;
  this.timer = setInterval(function() {
    // 定时器里面的核心就是游戏的渲染本质，清屏-更新-渲染
    game.f++;
    // 清除屏幕，解决蛇会边长但不运动
    game.clear();
    
    // 蛇的运动,蛇变长时，速度加快

    game.snake.update();

    // 渲染蛇
    game.snake.render();
    
    // 渲染食物
    game.food.render();
  }, 50)
}

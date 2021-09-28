function Snake() {
  // 蛇的初始化身体
  this.body  = [
    {"row": 3, "col": 5},
    {"row": 3, "col": 4},
    {"row": 3, "col": 3},
    {"row": 3, "col": 2},
  ];
  // 信号量，设置的运动方向
  this.direction = "R";
  // 即将改变的方向，目的是为例防止出现原地掉头的情况
  this.willDirection = "R"
}

// 蛇的运动
Snake.prototype.update = function() {
  // 当前的direction接收一个willDirection
  this.direction = this.willDirection;
  // 尾部减一
  this.body.pop();
  // 头部
  // this.body.unshift({"row": this.body[0].row, "col": this.body[0].col + 1});
  // 蛇的不容方向的运动
  switch(this.direction) {
    case "R": // 右
      this.body.unshift({"row": this.body[0].row, "col": this.body[0].col + 1});
      break;
    case "D": // 下
      this.body.unshift({"row": this.body[0].row + 1, "col": this.body[0].col});
      break;
    case "L": // 左
      this.body.unshift({"row": this.body[0].row, "col": this.body[0].col - 1});
      break;
    case "T": // 上
      this.body.unshift({"row": this.body[0].row - 1, "col": this.body[0].col});
      break;
  }
  // 死亡的判定
  if(this.body[0].row > game.row - 1 || this.body[0].col > game.col - 1 || this.body[0].row < 0 || this.body[0].col < 0) {
    alert("gameover");
    // this.body.shift();
    clearInterval(game.state.timer);
  }
   
}

// 蛇的方向改变，防止在一次渲染之前会出现掉头的情况
Snake.prototype.changeDirection = function(next) {
  this.willDirection = next;
}

/* 
  Snake的render谁来调用？如果Snake自己的构造函数调用得不到game
  因为Game类还没有执行完四步走
  解决方案：定时器，异步
*/
Snake.prototype.render = function() {
  // 蛇头的渲染
  game.setColor(this.body[0].row, this.body[0].col, "red");
  // 蛇身体的渲染
  for(var i = 1; i < this.body.length; i++) {
    game.setColor(this.body[i].row, this.body[i].col, "blue")
  }
}
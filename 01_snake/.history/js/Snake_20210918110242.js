function Snake() {
  // 蛇的初始化身体
  this.body  = [
    {"row": 3, "col": 5},
    {"row": 3, "col": 4},
    {"row": 3, "col": 3},
    {"row": 3, "col": 2},
  ];
}

// 蛇的运动
Snake.prototype.update = function() {
  // 尾部减一
  this.body.pop(); 
  // 头部
  this.body.unshift({"row": this.body[0].row, "col": this.body[0].col + 1})
}

Snake.prototype.render = function() {
  // 蛇头的渲染
  game.setColor(this.body[0].row, this.body[0].col, "red");
  // 蛇身体的渲染
  for(var i = 1; i < this.body.length; i++) {
    game.setColor(this.body[i].row, this.body[i].col, "blue")
  }
}
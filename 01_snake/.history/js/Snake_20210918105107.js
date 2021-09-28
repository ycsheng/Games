function Snake() {
  // 蛇的初始化身体
  this.body  = [
    {"row": 3, "col": 2},
    {"row": 3, "col": 3},
    {"row": 3, "col": 4},
    {"row": 3, "col": 5},
  ];
}

Snake.prototype.render = function() {
  // 蛇的渲染
  Game.setColor(this.body[0].row, this.body[0].col, "red")
}
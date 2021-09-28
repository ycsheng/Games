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
  console.log(game);
}
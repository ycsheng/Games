function Food() {
  // 食物的位置
  this.row = parseInt(Math.random() * Game.row);
  this.col = parseInt(Math.random() * Game.col);

}
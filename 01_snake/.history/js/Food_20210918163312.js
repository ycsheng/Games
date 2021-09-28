function Food(game) {
  // 食物的位置
  do{
    this.row = parseInt(Math.random() * game.row);
    this.col = parseInt(Math.random() * game.col);
  }while ((function() {

  })())
}

Food.prototype.render = function() {
  game.setHTML(this.row, this.col, "♥");
}
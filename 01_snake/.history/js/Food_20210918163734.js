function Food(gameSnake) {
  // 食物的位置
  // 先创建一个row和col，然后判断这个row和col是否在蛇的身上
  do{
    this.row = parseInt(Math.random() * gameSnake.row);
    this.col = parseInt(Math.random() * gameSnake.col);
  }while ((function() {
    // 遍历蛇的row和col，
    for(var i = 0; i < gameSnake.snake.body.length; i++) {
      if(gameSnake.snake.body[i].row == this.row && gameSnake.snake.body[i].col == this.col) {

      }
    }
  })())
}

Food.prototype.render = function() {
  game.setHTML(this.row, this.col, "♥");
}
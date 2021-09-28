function Game() {
  // 创建表格
  this.row = 20;  // 行数
  this.col = 20;  //列数

  this.init()
}
Game.prototype.init = function() {
  this.dom = document.createElement("table");
  var tr, td;
  // 遍历行和列上树
  for(var i = 0; i < this.row; i++) {
    // 遍历行，创建节点上树
    tr = document.createElement("tr");

    // 追加节点上树
    this.dom.appendChild(tr);
  }
}
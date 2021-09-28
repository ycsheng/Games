function Game() {
  // 创建表格
  this.row = 20;  // 行数
  this.col = 20;  //列数
  // 初始化节点
  this.init()；
  // 实例化蛇
  
}
Game.prototype.init = function() {
  this.dom = document.createElement("table");
  var tr, td;
  // 遍历行和列上树
  for(var i = 0; i < this.row; i++) {
    // 遍历行，创建节点上树
    tr = document.createElement("tr");
    for(var j = 0; j < this.col; j++) {
      td = document.createElement("td");
      tr.appendChild(td)
    }
    // 追加节点上树
    this.dom.appendChild(tr);
  }
  // 表格上树
  document.getElementById("app").appendChild(this.dom)
}
var countNodes = function (node) {
  //  计算自身
  var count = 1;
  //  判断是否存在子节点
  if (node.hasChildNodes()) {
    //  获取子节点
    var cnodes = node.childNodes;
    //  对子节点进行递归统计
    for (var i = 0; i < cnodes.length; i++) {
      count = count + countNodes(cnodes.item(i))
    }
  }
  return count;
}


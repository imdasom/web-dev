/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  var nodeIterator1 = new NodeIterator(l1);
  var nodeIterator2 = new NodeIterator(l2);
  var nodeIterator3 = null;
  var node1 = nodeIterator1.next();
  var node2 = nodeIterator2.next();
  var previousNodeCeil = 0;
  do {
    var node1Value = getValue(node1);
    var node2Value = getValue(node2);
    var totalValue = node1Value + node2Value + previousNodeCeil;
    var currentNodeCeil = getCeil(totalValue, 10);
    var value = getReminder(totalValue, currentNodeCeil*10);
    var newNode = new ListNode(value);
    previousNodeCeil = currentNodeCeil;
    if(nodeIterator3 === null) {
      nodeIterator3 = new NodeIterator(newNode);
    } else {
      var node3 = nodeIterator3.next();
      node3.next = newNode;
    }
    node1 = nodeIterator1.next();
    node2 = nodeIterator2.next();
  } while(node1 !== null || node2 !== null || previousNodeCeil > 0);
  return nodeIterator3.head();
};
//============= PROTOTYPES ===================//
var NodeIterator = function(node) {
  if(node === null || node === undefined) {
    throw new Error('node must not empty');
  }
  var head = new ListNode(null);
  head.next = node;
  this.currentNode = head;
  this.headNode = node;
};
NodeIterator.prototype = (function() {
  var head = function() {
    return this.headNode;
  };
  var next = function() {
    if(this.currentNode === null) {
      return null;
    } else {
      this.currentNode = this.currentNode.next;
      return this.currentNode;
    }
  };
  var hasNext = function() {
      return this.currentNode.next !== null;
  };
  return {
    head: head
    ,next: next
    ,hasNext: hasNext
  };
})();
//============== UTILS ===================//
function getValue(node) {
  return node === null ? 0 : node.val;
}
function add(num1, num2) {
  return num1 + num2;
}
function getCeil(num, quentient) {
  return Math.floor(num / quentient);
}
function getReminder(num, quentient) {
  return (quentient === 0) ? num : (num % quentient);
}


/// test code
function addNode(nodes) {
  for(var i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i+1];
  }
}
// var l1Nodes = [new ListNode(2), new ListNode(4), new ListNode(3)];
// var l2Nodes = [new ListNode(5), new ListNode(6), new ListNode(4)];
var l1Nodes = [new ListNode(1)];
var l2Nodes = [new ListNode(9), new ListNode(9)];
addNode(l1Nodes);
addNode(l2Nodes);

var l3 = addTwoNumbers(l1Nodes[0], l2Nodes[0]);
var nodeIterator3 = new NodeIterator(l3);
while(nodeIterator3.hasNext()) {
  console.log(nodeIterator3.next());
}
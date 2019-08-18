/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 Input:
 Tree 1                     Tree 2
 1                         2
 / \                       / \
 3   2                     1   3
 /                           \   \
 5                             4   7
 Output:
 Merged tree:
 3
 / \
 4   5
 / \   \
 5   4   7
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
function getValueIfNull(value, valueIfNull) {
    return value == null ? valueIfNull : value;
}
function initNode(node) {
  return node == null ? new TreeNode(0) : node;
}
var mergeTrees = function(t1, t2) {
  if(t1 == null && t2 == null) {
    return null;
  }
  var newTreeNode = initNode(null);
  t1 = initNode(t1);
  t2 = initNode(t2);
  newTreeNode.val = getValueIfNull(t1.val, 0) + getValueIfNull(t2.val, 0);
  if(t1.left != null || t2.left != null) {
    newTreeNode.left = mergeTrees(t1.left, t2.left);
  }
  if(t1.right != null || t2.right != null) {
    newTreeNode.right = mergeTrees(t1.right, t2.right);
  }
  return newTreeNode;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * Given binary tree [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 *
 *  return 3
 */
let maxDepth = function(root) {
  function visit(depth, node) {
    if(node == null) {
      return depth;
    } else {
      depth++;
    }
    let leftDepth = visit(depth, node.left);
    let rightDepth = visit(depth, node.right);
    return Math.max(leftDepth, rightDepth);
  }
  return visit(0, root);
};
let maxDepth_others = function(root) {
  if(root === undefined || root === null){
    return 0;
  }
  return Math.max(maxDepth_others(root.left), maxDepth_others(root.right)) + 1;
};
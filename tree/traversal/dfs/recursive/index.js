var tree = require( '../../../../StandardBinarySearchTree' );
var ref = new tree.BST( [3, 8, 5, 11, 10, 2] );
//var ref = new tree.BST([5,4,3,2,1]);

/**
 * descending order
 * @param {*} tree 
 */
function reverseInorder ( tree ) {
    if ( tree.right ) reverseInorder( tree.right );
    console.log( tree.data )
    if ( tree.left ) reverseInorder( tree.left );
    return;
}

/**
 * ascending order
 * @param {*} tree 
 */
function inorder ( tree ) {
    if ( tree.left ) inorder( tree.left );
    console.log( tree.data )
    if ( tree.right ) inorder( tree.right );
    return;
}

function preorder ( tree ) {
    console.log( tree.data )
    if ( tree.left ) preorder( tree.left );
    if ( tree.right ) preorder( tree.right );
    return;
}

function postorder ( tree ) {
    if ( tree.left ) postorder( tree.left );
    if ( tree.right ) postorder( tree.right );
    console.log( tree.data )
    return;
}

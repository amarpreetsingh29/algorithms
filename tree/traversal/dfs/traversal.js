var tree = require( '../../../StandardBinarySearchTree' );
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



function findNodeBT ( root, data ) {
    var node;
    if ( root.data === data ) {
        return root;
    }
    if ( root.left ) {
        node = findNodeBT( root.left, data )
        if ( node ) return node;
    }
    if ( root.right ) {
        node = findNodeBT( root.right, data );
        if ( node ) return node;
    }

    return node;
}


function findNodeBST ( root, data ) {
    var node;
    if ( root.data === data ) {
        return root;
    }
    if ( data < root.data ) {
        node = findNodeBST( root.left, data )
        if ( node ) return node;
    }
    if ( data > root.data ) {
        node = findNodeBST( root.right, data );
        if ( node ) return node;
    }

    return node;
}


function inorderDFS ( root ) {
    var stack, node;
    stack = [];
    addLeft( stack, root );
    while ( stack.length ) {
        node = stack.pop();
        processNode( node );
        if ( node.right ) {
            addLeft( stack, node.right )
        }
    }
}

function postorderDFS ( root ) {
    var stack, node;
    stack = [];
    addLeft( stack, root )
    while ( stack.length ) {
        node = stack[stack.length - 1];
        if ( !node.visited && node.right ) {
            node.visited = true;
            node = node.right;
            addLeft( stack, node )
        } else {
            node = stack.pop();
            processNode( node );
        }
    }
}

function Preorder ( root ) {
    var stack, node;
    stack = [];
    addLeft( stack, root, true )
    while ( stack.length ) {
        node = stack.pop()
        if ( node.right ) {
            addLeft( stack, node.right, true )
        }
    }
}
function addLeft ( stack, node, process ) {
    while ( node ) {
        stack.push( node )
        if ( process ) processNode( node );
        node = node.left
    }
    return stack;
}
function processNode ( node ) {
    console.log( node.data );
}
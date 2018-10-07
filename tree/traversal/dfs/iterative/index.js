var tree = require( '../../../../StandardBinarySearchTree' );
var ref = new tree.BST( [3, 8, 5, 11, 10, 2] );

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

inorderDFS(ref.tree)
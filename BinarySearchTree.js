/**
 * Created by samarpreet on 05/04/17.
 */

function BinarySearchTree(input) {
    var tree= {};
    var pointer;
    for(var i=0 ; i<input.length;i++){
        pointer = tree;
        if(Object.keys(tree).length){
            while (true){
                //less
                if(input[i] < pointer.data){
                    if(pointer.left){
                        pointer = pointer.left;  // reducing
                        continue;
                    }else{
                        pointer.left =  createNode(input[i]);
                        break;
                    }
                } //more
                else if(input[i] > pointer.data){
                    if(pointer.right){
                        pointer = pointer.right;  //reducing
                        continue;
                    }else{
                        pointer.right = createNode(input[i]);
                        break;
                    }
                } //invalid value
                else{
                    break;
                }
            }
        }else{
            tree = createNode(input[i]);
            pointer = tree;
        }
    }
    return tree;
}

function createNode(data){
   let obj = new Object();
    obj.left = null;
    obj.right = null;
    obj.data = data;
    return obj;
}



function SearchBST(tree,elm) {
    var pointer = tree;
    var flag = true;
    while(true){
        if(elm < pointer.data){
            if(pointer.left){
                pointer = pointer.left;  //reducing
                continue;
            }else {
                flag = false;
                break;
            }
        }else if(elm > pointer.data) {
            if(pointer.right){
                pointer = pointer.right;  //reducing
                continue;
            }else {
                flag = false;
                break;
            }
        }else if( elm == pointer.data){
            return pointer; // return node if found
        }else{
            break;
        }
    }
    return flag; //return false if not found
}


/**
 *
 *
 tree *search_tree(tree *l, item_type x)
 {
         if (l == NULL) return(NULL);
         if (l->item == x) return(l);
         if (x < l->item)
            return( search_tree(l->left, x) );
         else{
             return( search_tree(l->right, x) );
         }
 }
 * @param tree
 * @param elm
 * @returns {boolean}
 *
 * time Complexity O(h)
 */
function recursiveSearchBST(tree,elm) {
    if(!tree) return false;
    else{
        if(elm < tree.data){
            if(tree.left){
                return recursiveSearchBST(tree.left,elm)
            }else{
                return false;
            }
        }else if(elm > tree.data) {
            if(tree.right){
                return recursiveSearchBST(tree.right,elm)
            }else{
                return false;
            }
        }else if( elm == tree.data){
            return tree;
        }else{
            return false;
        }
    }
}


function minimumInBST(tree){
    if(!tree.left) return tree.data;
    else return minimumInBST(tree.left);
}
function maximumInBST(tree) {
    if(!tree.right) return tree.data;
    else return maximumInBST(tree.right);
}

console.log(recursiveSearchBST(BinarySearchTree([5,1,4,2,8,11,0]),0));

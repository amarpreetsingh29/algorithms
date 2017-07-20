/**
 * Created by samarpreet on 15/04/17.
 */



(function () {
    function BST(input) {
        this.tree=null;
        createBST.call(this,input);
    }
    BST.prototype.search = function (elm) {
        if(!(this.tree && elm)) return false;
        var pointer = this.tree;
        while (pointer) {
            if (elm < pointer.data) {
                pointer = pointer.left;
            } else if (elm > pointer.data) {
                pointer = pointer.right;
            } else if (elm == pointer.data) {
                return pointer; // return node if found
            } else {
                break;
            }
        }
        return false; //return false if not found
    }
    BST.prototype.recursiveSearch = function (elm) {
        return recursiveSearchBST(this.tree,elm)
    }
    BST.prototype.minimum = function () {
        return this.tree ? minimumInBST(this.tree) : null;
    }
    BST.prototype.maximum = function () {
        return this.tree ? maximumInBST(this.tree) : null;
    }
    BST.prototype.insertNode = function (elm) {
        if(elm){
            if(!this.tree){
                this.tree = createNode(elm);
            }else{
                var pointer = this.tree;
                while (true){
                    if(elm > pointer.data){
                        if(pointer.right){
                            pointer = pointer.right;
                        }else{
                            pointer.right = createNode(elm);
                            break;
                        }
                    }else if(elm < pointer.data){
                        if(pointer.left){
                            pointer = pointer.left;
                        }else{
                            pointer.left = createNode(elm);
                            break;
                        }
                    }else{
                        break;
                    }
                }
            }
        }
    }
    BST.prototype.deleteNode = function (elm) {
        if(elm){
            if(this.tree){
                var pointer = this.tree;
                while(true){
                    if(elm > pointer.data){
                        if(pointer.right){
                            if(pointer.right.data == elm ){
                                //neither left nor right child
                                if(!pointer.right.right && !pointer.right.left){
                                    pointer.right = null; //element deleted
                                    break;
                                }
                                //either left or right child
                                else if(!(pointer.right.right && pointer.right.left)){
                                    if(pointer.right.right){
                                        pointer.right = pointer.right.right;
                                        break;
                                    }
                                    else if(pointer.right.left){
                                        pointer.right = pointer.right.left;
                                        break;
                                    }
                                }
                                //both left and right children
                                else if(pointer.right.left && pointer.right.right){
                                    //left child has  right  child
                                    if(pointer.right.left.right){
                                        var rNode = findRightReplacementNode(pointer.right.left);
                                        pointer.right.data = rNode;
                                        break;
                                    }
                                    //right child has left child
                                    else if(pointer.right.right.left){
                                        var rNode = findLeftReplacementNode(pointer.right.right);
                                        pointer.right.data = rNode;
                                        break;
                                    } else {
                                        pointer.right.right.left = pointer.right.left;
                                        pointer.right = pointer.right.right;
                                        break;
                                    }
                                }
                            }
                            else{
                                pointer = pointer.right;
                                continue;
                            }
                        }else{
                            break;
                        }
                    }
                    else if(elm < pointer.data){
                        if(pointer.left){
                            if(pointer.left.data == elm ){
                                //neither left nor right child
                                if(!pointer.left.right && !pointer.left.left){
                                    pointer.left = null; //element deleted
                                    break;
                                }
                                //either left or right child
                                else if(!(pointer.left.right && pointer.left.left)){
                                    if(pointer.left.right){
                                        pointer.left = pointer.left.right;
                                        break;
                                    }
                                    else if(pointer.left.left){
                                        pointer.left = pointer.left.left;
                                        break;
                                    }
                                }
                                //both left and right children
                                else if(pointer.left.left && pointer.left.right){
                                    //left child has  right  child
                                    if(pointer.left.left.right){
                                        var rNode = findRightReplacementNode(pointer.left.left);
                                        pointer.left.data = rNode;
                                        break;
                                    }
                                    //right child has left child
                                    else if(pointer.left.right.left){
                                        var rNode = findLeftReplacementNode(pointer.left.right);
                                        pointer.left.data = rNode;
                                        break;
                                    } else {
                                        pointer.left.right.left = pointer.left.left;
                                        pointer.left = pointer.left.right;
                                        break;
                                    }
                                }
                            }
                            else{
                                pointer = pointer.left;
                                continue;
                            }
                        }else{
                            break;
                        }
                    }
                    else if(elm == pointer.data){
                        //neither left nor right child
                        if(!pointer.right && !pointer.left){
                            pointer.right = null;
                            pointer.left = null;
                            break;
                        }
                        //either left or right child but not both
                        else if(!(pointer.right && pointer.left)){
                            if(pointer.right){
                                pointer.right = null;
                                break;
                            }
                            else if(pointer.left){
                                pointer.right = null;
                                break;
                            }
                        }
                        //both left and right children
                        else if(pointer.right && pointer.left){
                            //left child has  right  child
                            if(pointer.left.right){
                                var rNode = findRightReplacementNode(pointer.left);
                                pointer.data = rNode;
                                break;
                            }
                            //right child has left child
                            else if(pointer.right.left){
                                var rNode = findLeftReplacementNode(pointer.right);
                                pointer.data = rNode;
                                break;
                            } else {
                                pointer.right = null;
                                pointer.left = null;
                                break;
                            }
                        }
                    }
                    else{
                        break;
                    }
                }
            }
        }
    }
    function createBST(input){
        if(input && input.length){
            for (var i = 0; i < input.length; i++) {
                this.insertNode(input[i]);
            }
        }
    }
    function createNode(elm) {
        let obj = new Object();
        obj.left = null;
        obj.right = null;
        obj.data = elm;
        return obj;
    }
    function recursiveSearchBST(tree,elm) {
        if (!(tree&&elm)) return false;
        if (elm < tree.data) {
            return recursiveSearchBST(tree.left, elm)
        } else if (elm > tree.data) {
            return recursiveSearchBST(tree.right, elm)
        } else if (elm == tree.data) {
            return tree;
        } else {
            return false;
        }
    }
    function minimumInBST(tree) {
        if (!tree.left) return tree.data;
        else return minimumInBST(tree.left);
    }
    function maximumInBST(tree) {
        if (!tree.right) return tree.data;
        else return maximumInBST(tree.right);
    }
    function findRightReplacementNode(tree) {
        var pointer = tree;
        while(true){
            if(pointer.right.right){
                pointer = pointer.right;
            }else{
                temp =pointer.right.data;
                pointer.right = null;
                break;
            }
        }
        return temp;
    }
    function findLeftReplacementNode(tree) {
        var pointer = tree;
        var temp;
        while(true){
            if(pointer.left.left){
                pointer = pointer.left;
            }else{
                temp =pointer.left.data;
                pointer.left = null;
                break;
            }
        }
        return temp;
    }
    window.BST = BST;
})();
var ref  = new BST([3,8,5,11,10,2]);
var ref2 = new BST();
ref2.insertNode(3);
ref2.insertNode(5);
ref2.insertNode(8);
ref2.insertNode(1);
ref2.insertNode(7);
ref2.insertNode(9);
ref2.insertNode();
ref.insertNode(2);
console.log(ref);
console.log(ref2);
console.log(ref.search(3));
console.log(ref2.recursiveSearch(3));
console.log(ref.minimum());
console.log(ref.maximum());
ref.deleteNode(8);
console.log(ref);
ref.deleteNode(1);
ref.deleteNode(2);
ref.deleteNode(5);
console.log(ref)

var ref3  = new BST([4,7,9,6,2,3,1]);
ref3.deleteNode(7); // delete node with both children
ref3.deleteNode(1); // delete  node with no children
ref3.deleteNode(2); // delete node with 1 child
console.log(ref3);


var ref4  = new BST([2,1,7,8,4,3,6,5]);
ref4.deleteNode(3); // delete  node with no children
ref4.deleteNode(6); // delete node with 1 child
ref4.deleteNode(4); // delete node with both children
ref4.deleteNode(2); //delete root node
console.log(ref4);





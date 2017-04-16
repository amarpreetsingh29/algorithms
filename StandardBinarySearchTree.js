/**
 * Created by samarpreet on 15/04/17.
 */

function BST(input) {
    this.tree = null;
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
    BST.prototype.deleteNode = function () {
        //To-Do
    }

    createBST.call(this,input);
    function createBST(input){
        var pointer;
        if(input && input.length){
            //this.tree = new Object();
            for (var i = 0; i < input.length; i++) {
                /*pointer = this.tree;
                if (Object.keys(this.tree).length) {
                    while (true) {
                        //less
                        if (input[i] < pointer.data) {
                            if (pointer.left) {
                                pointer = pointer.left;  // reducing
                                continue;
                            } else {
                                pointer.left = createNode(input[i]);
                                break;
                            }
                        } //more
                        else if (input[i] > pointer.data) {
                            if (pointer.right) {
                                pointer = pointer.right;  //reducing
                                continue;
                            } else {
                                pointer.right = createNode(input[i]);
                                break;
                            }
                        } //invalid value
                        else {
                            break;
                        }
                    }
                } else {
                    this.tree = createNode(input[i]);
                    pointer = this.tree;
                }*/
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

};
var ref  = new BST([3,5,8,1,9,2]);
var ref2 = new BST();
ref2.insertNode(3);
ref2.insertNode(5);
ref2.insertNode(8);
ref2.insertNode(1);
ref2.insertNode(9);
ref2.insertNode();
ref.insertNode(2);
console.log(ref);
console.log(ref2);
console.log(ref.search(3));
console.log(ref2.recursiveSearch(3));
console.log(ref.minimum());
console.log(ref.maximum());


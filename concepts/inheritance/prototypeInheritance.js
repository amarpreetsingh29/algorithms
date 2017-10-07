
/**
 * Object.setPrototypeOf
 */
var parent = {
    a: 1,
    b: 2
};
var child = {
    c: 3,
    d: 4
}

/**
 * under the hood it sets child.__proto__ = parent;
 */
Object.setPrototypeOf(child, parent);

/**
 * Object.create
 */

var temp1 = {
    a: 1,
    b: 2
}

/**
 * Object.create creates a new blank object on heap,
 * sets __proto__ of new object to the given object,
 * finally returns the address of new object 
 * to which identifier child points.
 */
var child = Object.create(temp1);


/**
 * Function Constructor
 */

function base() {
    this.message = "hello";
}
base.prototype.greet = function () {
    console.log(this.message);
}
/**
 * Execution of base with new prefix, 
 * allocates memory for new object on heap,
 * makes this refer to the new object,
 * properties/methods are added to this, also
 * this.__proto__ = base.prototype is set(for implicit delegation)
 * this.__proto__ stores address of base.prototype
 * and finally this is returned and identifier obj now points to it.
 */
var obj = new base();
//message property exists  on obj 
console.log(obj.message);

/**
 * greet is accessible on obj as,
 *  __proto__ of obj points to/stores address of base.prototype
 * and JS compiler due to implicit delegation i.e
 * It does derefrence of greet.__proto__(which stores address of base.prototype)
 * results in access to base.prototype object in heap, 
 * hence, able to resolve property greet on obj.
 * and since it is a method call,
 * the js engine while preparing execution context, 
 * makes this point to obj
 * and logs this.message => obj.message => hello.
 */
obj.greet();

/**
 * Promise implementation 
 * as per guidelines by
 * https://promisesaplus.com/
 */

function promise() {
    var __state__ = "Pending";
    var responseData = undefined;
    var observer = { progressCallbacks: [], doneCallbacks: [], failCallbacks: [] };
    var __temp__;
    function setState(newState) {
        return __state__ = newState ? newState : __state__;
    }
    function setResponseData(newResponse) {
        responseData = newResponse;
    }

    function then(success, fail, progress) {
        __temp__ = new promise();
        if (success && success instanceof Function) observer.doneCallbacks.push(success);
        if (progress && progress instanceof Function) observer.progressCallbacks.push(progress);
        if (fail && fail instanceof Function) observer.failCallbacks.push(fail);
        if (__state__ === 'Resolved') {
            observer.doneCallbacks.forEach(
                (cb) => {
                    try {
                        var retVal = cb(responseData);
                        if (retVal.then && retVal.then instanceof Function) {
                           retVal.then(__temp__.resolve,__temp__.reject);
                        } else {
                            __temp__.resolve(retVal);
                        }
                    }
                    catch (e) {
                        __temp__.reject(e);
                    }
                }
            );
        } else if (__state__ === 'Rejected') {
            observer.doneCallbacks.forEach(
                (cb) => {
                    try {
                        var retVal = cb(responseData);
                        __temp__.resolve(retVal);
                    }
                    catch (e) {
                        __temp__.reject(e);
                    }
                }
            );
        }
        return __temp__;
    }
    function resolve(responseData) {
        if (__state__ === 'Pending') {
            setState("Resolved");
            setResponseData(responseData);
            observer.doneCallbacks.forEach(
                (cb) => {
                    try {
                        var retVal = cb(responseData);
                        if (retVal.then) {
                            retVal.then(__temp__.resolve,__temp__.reject);
                        } else {
                            __temp__.resolve(retVal);
                        }
                    }
                    catch (e) {
                        __temp__.reject(e);
                    }
                }
            );
        }
    }
    function reject(responseData) {
        if (__state__ === 'Pending') {
            setState("Rejected");
            setResponseData(responseData);
            observer.doneCallbacks.forEach(
                (cb) => {
                    try {
                        var retVal = cb(responseData);
                        __temp__.resolve(retVal);
                    }
                    catch (e) {
                        __temp__.reject(e);
                    }
                }
            );
        }
    }
    return {
        then: then,
        resolve: resolve,
        reject: reject
    }
}

var p1 = new promise();
//p1.resolve("resolved p1"); //already resolved promise and then chained

var p2 = p1.then(function (val) {
    console.log(val);
    return val + ' resolved p2';
})
var p3 = p2.then(function (val) {
    console.log(val);
    var temp = new promise();
    setTimeout(function () {
        temp.resolve(`${val} resolved p3`);
    }, 1000);
   
    return temp;
}).then(function (val) {
        console.log(val);
});

p1.resolve("resolved p1"); //promise resolved after chaining

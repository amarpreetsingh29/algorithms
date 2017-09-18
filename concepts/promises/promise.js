
//Created by samarpreet on 13/09/17.

/**
 * Implementation as per guidelines by
 * https://promisesaplus.com/
 */

var promise = (function () {

    function promise() {
        this._state = "Pending";
        this.responseData = undefined;
        this.observer = { progressCallbacks: [], doneCallbacks: [], failCallbacks: [] };
    }

    function setResponseData(newResponse) {
        this.responseData = newResponse;
    }

    promise.prototype.state = function (newState) {
        return this._state = newState ? newState :this._state;
    }

    promise.prototype.then = function (success, fail, progress) {
        var temp = new promise();
        if (success && success instanceof Function) this.observer.doneCallbacks.push(success);
        if (progress && progress instanceof Function) this.observer.progressCallbacks.push(progress);
        if (fail && fail instanceof Function) this.observer.failCallbacks.push(fail);
        if (this._state === 'Resolved') {
            this.observer.doneCallbacks.forEach(
                (cb) => {
                    try {
                        var x = cb(this.responseData);
                        if (x instanceof promise) {
                            temp = x;
                        }else{
                             temp.resolve(x);
                        }
                    }
                    catch (e) {
                        temp.reject(e);
                    }
                }
            );
        } else if (this._state === 'Rejected') {
            this.observer.doneCallbacks.forEach(
                (cb) => {
                    try {
                        var x = cb(this.responseData);
                        temp.resolve(x);
                    }
                    catch (e) {
                        temp.reject(e);
                    }
                }
            );
        }
        return temp;
    }

    promise.prototype.resolve = function (responseData) {
        if (this._state === 'Pending') {
            this.state("Resolved");
            setResponseData.call(this, responseData);
            this.observer.doneCallbacks.forEach(cb => cb.call(this, this.responseData));
        }
    }

    promise.prototype.reject = function (responseData) {
        if (this._state=== 'Pending') {
            this.state("Rejected");
            setResponseData.call(this, responseData);
            this.observer.failCallbacks.forEach(cb => cb.call(this, this.responseData));
        }
    }
    return promise;
})();

var p = new promise();
p.resolve("resolved 1");
p.then(function (val) {
    var p2=new promise();
    setTimeout(()=>{
 p2.resolve(`${val}`+"resolved p2");
    },2000)
    return p2;
}).then(function (val) {
    return val;
}).then(val=>console.log(val));





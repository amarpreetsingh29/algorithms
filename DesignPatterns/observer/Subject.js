module.exports = (function () {
    function Subject() {
        this.events = {};
    }
    function RemoveAllEvents() {
        this.events = {};
    }
    Subject.prototype.on = function (evt, cb, listener) {
        this.events[evt] = this.events[evt] || [];
        this.events[evt].push({
            method: cb,
            listener: listener || null
        });
    }

    // listener, acts as a context object, is an optional argument
    Subject.prototype.off = function (evt, cb, listener) {
        //event, cb, listener
        if (evt && cb && listener) {
            if (this.events[evt]) {
                this.events[evt] = this.events[evt].filter(function (element) {
                    return !(element.listener === listener && element.method === cb);
                }, this);
            }
        }
        //event and listener
        else if (evt && listener) {
            if (this.events[evt]) {
                this.events[evt] = this.events[evt].filter(function (element) {
                    return element.listener !== listener;
                }, this);
            }

        }
        //event and callback
        else if (evt && cb) {
            if (this.events[evt]) {
                this.events[evt] = this.events[evt].filter(function (element) {
                    return element.method !== cb;
                }, this);
            }

        }
        //event 
        else if (evt) {
            delete this.events[evt]
        }
        //only listener
        else if (listener) {
            for (var evt in this.events) {
                this.events[evt] = this.events[evt].filter(function (element) {
                    return element.listener !== listener;
                }, this);

                // remove event from map, if no listeners exist
                if (!this.events[evt].length) {
                    delete this.events[evt]
                }
            }
        }

        // remove event from map, if no listeners exist
        if (evt && this.events[evt] && !this.events[evt].length) {
            delete this.events[evt]
        }
    }

    Subject.prototype.trigger = function (evt) {
        this.events[evt] && this.events[evt].forEach(function (element) {
            element.listener ? element.method.call(element.listener) : element.method()
        }, this);
    }
    return Subject;
})();



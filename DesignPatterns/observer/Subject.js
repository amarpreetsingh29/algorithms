module.exports = (function(){
function Subject() {
    this.events = {};
}
function RemoveAllEvents(){
    this.events={};
}
Subject.prototype.on = function (evt, cb, listener) {
    this.events[evt] = this.events[evt] || [];
    this.events[evt].push({
        method: cb,
        listener: listener
    });
}

Subject.prototype.off = function (evt, cb, listener) {
    //event, cb, listener
    if (evt && cb && listener) {
         this.events[evt] = this.events[evt].filter(function (element) {
            return !(element.listener === listener && element.method === cb);
        }, this); 
    }
    //event and listener
    else if (evt && listener) {
        this.events[evt] = this.events[evt].filter(function (element) {
            return element.listener !== listener;
        }, this);
    }
    //only listener
    else if (listener) {
        for (var evt in this.events) {
            this.events[evt] = this.events[evt].filter(function (element) {
                return element.listener !== listener;
            }, this);
        }
    }
}

Subject.prototype.trigger = function (evt) {
    this.events[evt] && this.events[evt].forEach(function (element) {
        element.method.call(element.listener)
    }, this);
}
return Subject;
})();



function Observer(){
    this.events={};
}
Observer.prototype.listenTo = function(publisher, evt, cb){
    publisher.on(evt,cb,this);
}
Observer.prototype.stopListening = function(publisher,evt, cb){
    publisher.off(evt,cb,this);
}
module.exports = Observer;


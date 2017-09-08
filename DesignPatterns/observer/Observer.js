module.exports = (function(){
function Observer(){
    this.events={};
}
Observer.prototype.listenTo = function(subject, evt, cb){
    subject.on(evt,cb,this);
}
Observer.prototype.stopListening = function(subject,evt, cb){
    subject.off(evt,cb,this);
}
return Observer;
})();



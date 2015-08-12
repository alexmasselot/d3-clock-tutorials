var getNow = function(){
    var t = new Date();
    return {
        hours: t.getHours(),
        minutes: t.getMinutes(),
        seconds: t.getSeconds()
    };
};

var getNowArray = function(){
    var t = new Date();
    return [t.getHours(),t.getMinutes(),t.getSeconds()];
};
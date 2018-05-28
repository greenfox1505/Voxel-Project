module.exports = class MessagingService { 
    constructor(){
        this.msgCallbacks  == {}
    }
}

render.setCallback("msg",function(payload){

})


render.send("update", {
    
})

render.send = function(type,payload){
    if ( typeof this.msgCallbacks[type]  === "function"){

    }
    throw "message type not defined!"
}
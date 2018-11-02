var socket = "";
export default class websocket{
    static init = () => {
        var host = "ws://192.168.0.250:81/WS/";
        try{
            socket = new WebSocket(host);
            socket.onopen    = function(msg){ 
                console.log("socket session create sucess!"); 
            };
            socket.onmessage = function(msg){ 
                console.log("message Sucess"); 
                return msg;
            };
            socket.onclose   = function(msg){ console.log("close Sucess");};
            socket.onerror   = function(msg){ console.log("Error!"); };
        }catch(ex){
            console.log(ex);
        }
    }

    static send = (msg) => {
        console.log("message is", msg)
        if(!msg){ 
            alert("Message can not be empty"); 
            return;
        }
        try{ 
            socket.send(msg);
        }catch(ex){
            console.log(ex);
        }
    }

    onbeforeunload = () => {
        try{ 
            socket.send('quit'); 
            socket.close();
            socket=null;
        }catch(ex){ 
            console.log(ex);
        }
    };

}
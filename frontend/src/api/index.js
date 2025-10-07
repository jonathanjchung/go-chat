var socket = new WebSocket("ws://localhost:8080/ws");

let connect = cb => {
    console.log("connecting...");

    socket.onopen = () => {
        console.log("connected!");
    };

    socket.onmessage = msg => {
        console.log(msg);
        cb(msg)
    };

    socket.onclose = event => {
        console.log("socket closed: ", event);
    };

    socket.onerror = error => {
        console.log("socket error: ", error);
    };
};

let sendMsg = msg => {
        console.log("sending msg: ", msg);
        socket.send(msg);
    };

export { connect, sendMsg };
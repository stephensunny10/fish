    var port = process.env.PORT || 3004,
    io = require('socket.io')(port),
    gameSocket = null;

    gameSocket = io.on('connection', function(socket){
    console.log('socket connected: ' + socket.id);

    socket.on('disconnect', function(){
        console.log('socket disconnected: ' + socket.id);
    });


    socket.on('message', function(data){
        console.log(JSON.stringify(data));
        socket.emit('message',data)
    });

});

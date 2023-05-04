const server = require("http").createServer();

const io = require("socket.io")(server)


io.on("connection", (socket) => {

    console.log("This is consoled in the socket logic!!")

    socket.on("room", (room) => {
        console.log(`this is the room id requested from the client ------> ${room}` )
        // this will be a new room 
        socket.join(room)
    })

    setTimeout(() => {
        io.to("room1").emit("message", "connected to room1")
    }, 3000)
    
});

server.listen(4321, () => {
    console.log("running on 4321")
})

const http = require("http");
const mongodb = require('mongodb');
let db;

const url = "mongodb+srv://Shukhratbek_Shawn:shawn12354@shawn.qcf2pnz.mongodb.net/Reja?authSource=admin&authMechanism=DEFAULT";

mongodb.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err, client) => {
    if(err){
        console.log("Error:", err);
    }
    else{
        module.exports = client;
        const app = require('./app');
        console.log("Connected to MongoDB");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, () => {
            console.log(`The server is running seccesfully on port: ${PORT}, http://localhost:${PORT}`);    
        });
    }
});
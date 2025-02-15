const http = require('http');
const app = require('./src/app');
const dbConnect = require('./src/db/dbConnect');
const port = process.env.PORT

const server = http.createServer(app);


dbConnect()
.then(() => {
    server.listen(port, () =>{
    console.log(`Server is listening at port ${port}`)
    })
})
.catch((err) => {
    console.log(err);
})

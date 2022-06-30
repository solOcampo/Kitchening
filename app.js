const livereload = require("livereload");
const liveReloadServer = livereload.createServer();

const express = require('express')
const connectLivereload = require("connect-livereload");
const path = require('path')
const app = express()
const port = 3010

app.use(express.static(path.resolve(__dirname,'public')));

liveReloadServer.watch(path.join(__dirname, 'public'));
app.use(connectLivereload());


app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

app.listen(port,() => console.log(`se levanto el servidor http://localhost:${port}`))
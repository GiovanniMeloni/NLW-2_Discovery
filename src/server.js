//Imports
const path = require("path")
const express = require("express")
const server = express()
const nunjucks = require("nunjucks")
const { pageLanding, pageStudy, pageGiveClasses } = require("./pages")

//Nunjucks configure
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Server
server
//configurar arquivos estaticos
.use(express.static("public"))
//rotas da app
.get("/", pageLanding)  
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start so server
.listen(5000)
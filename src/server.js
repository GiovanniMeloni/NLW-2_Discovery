//Imports
const path = require("path")
const express = require("express")
const server = express()
const nunjucks = require("nunjucks")
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require("./pages")

//Nunjucks configure
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Server
server
//receber os dados do req body
.use(express.urlencoded( {extended:true} ) )
//configurar arquivos estaticos
.use(express.static("public"))
//rotas da app
.get("/", pageLanding)  
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start so server
.listen(5000)
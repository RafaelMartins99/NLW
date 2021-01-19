const proffys = [
        { name:"Diego Fernandes",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatssap:"89997070", 
        bio:"Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões", 
        subject:"Química", 
        cost:"20", 
        weekday:[0], 
        time_from: [720], 
        time_to:[1200]
    },
    {    name:"Mayk Brito",
        avatar:"https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
        whatssap:"89997070", 
        bio:"Instrutor de programação web para iniciantes, minha missão de vida é levar ensino e contribuir para o crescimento de quem se interessar 💜🚀", 
        subject:"Front End Developer", 
        cost:"20", 
        weekday:[1], 
        time_from: [720], 
        time_to:[1200]

    },
    {    name:"Gustavo Guanabara",
        avatar:"https://avatars0.githubusercontent.com/u/8683378?s=400&u=01b06a154f04dadaa4e4131497fa2442e6323cbc&v=4", 
        whatssap:"89997070", 
        bio:"Nerd por natureza. Professor por vocação.", 
        subject:"Founder CursoemVideo ", 
        cost:"20", 
        weekday:[1], 
        time_from: [720], 
        time_to:[1200]
    }



]

const subjects = [

    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]


const weekdays = [

    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}


function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    //se tiver dados, adicionar
    if (isNotEmpty) {
        
        data.subject = getSubject(data.subject)
    
        proffys.push(data)
        //se não tiver dados, não adicionar
        return res.redirect("/study")
    }
    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()



const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    
    express: server,
    noCache: true,
})


server
.use(express.static("public"))
.get("/", pageLanding) 
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses) 
    

.listen(5500)


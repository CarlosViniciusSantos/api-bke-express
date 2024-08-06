import express from 'express'

const app = express()

app.post('/auth/signup', (req, res) =>{
    res.json({message: "Rota de POST Auth/singup"})
})
app.post('/auth/login', (req, res) =>{
    res.json({message: "Rota de POST Auth/login"})
})
app.post('/auth/logout', (req, res) =>{
    res.json({message: "Rota de POST Auth/logout"})
})

app.post('/account', (req, res) =>{
    res.json({message: "Rota de POST account"})
})
app.get('/account/list', (req, res) =>{
    res.json({message: "Rota de GET account/list"})
})
app.get('/account/:id', (req, res) =>{
    res.json({message: "Rota de GET account/:ID"})
})
app.put('/account/:id', (req, res) =>{
    res.json({message: "Rota de PUT account/:ID"})
})
app.delete('/account/:id', (req, res) =>{
    res.json({message: "Rota de DELETE account/:ID"})
})

app.listen(3000,() => {
    console.log('Servidor rodando em http://localhost:3000')
})
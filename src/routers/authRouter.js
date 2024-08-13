import express from 'express'

const router = express.Router()

router.post('/signup', (req, res) =>{
    res.json({message: "Rota de POST Auth/singup"})
})
router.post('/login', (req, res) =>{
    res.json({message: "Rota de POST Auth/login"})
})
router.post('/logout', (req, res) =>{
    res.json({message: "Rota de POST Auth/logout"})
})

export default router
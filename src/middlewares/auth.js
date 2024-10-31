import jwt from 'jsonwebtoken'

export const auth = (req, res, next) => {
    const authorization = req.headers.authorization

    if (!authorization) {
        return res.status(403).json({ error: "Não Autorizado, AccessToken não informado!!!" })
    }
    const accessToken = authorization.split(' ')[1]

    if (!accessToken) {
        return res.status(403).json({ error: "Não Autorizado, Bearer com AccessToken não informado!!!" })
    }

    try {
        const result = jwt.verify(accessToken, SECRET_KEY)
        console.log(result)
    } catch (error) {
        console.log(error?.name)
    }

    return res.json({ teste: "ok" })

}
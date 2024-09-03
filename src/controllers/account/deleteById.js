import { deleteAccount } from "../../models/accountModel.js"

const remove = async (req, res) =>{
    const {id} = req.params
    const account = await deleteAccount(+id)

    if (!account)
        return res.status(404).json({
            error: `Conta com id ${id}, não existente!`
        })

    return res.json({
        message: "Conta deletada com sucesso",
        account
    })
}

export default remove
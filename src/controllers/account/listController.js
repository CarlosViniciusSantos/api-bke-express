import { listAccounts } from "../../models/accountModel.js"

const list =  async (req, res) =>{
    const accounts = await listAccounts()
    return res.json({
        message: "Contas Listasdas com sucesso!",
        accounts
    })
}

export default list
import express from 'express'
import createController from '../controllers/account/createController.js'
import listController from '../controllers/account/listController.js'
import getByIdController from '../controllers/account/getByIdController.js'
import updateByIdController from '../controllers/account/updateById.js'
import deleteByIdController from '../controllers/account/deleteById.js'
import { auth } from '../middlewares/auth.js'


const router = express.Router()

router.post('/', auth , createController)
router.get('/list',listController)
router.get('/:id',getByIdController)
router.put('/:id',updateByIdController)
router.delete('/:id',deleteByIdController)

export default router
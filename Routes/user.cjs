const Router= require('express')
const userController = require('../Controllers/userController.cjs')
const router= Router.Router()


router.post("/api/usres/register" ,userController.register)
router.post("/api/usres/login" ,userController.login)

module.exports= router 
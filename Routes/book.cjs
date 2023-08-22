const Router= require('express')
const bookController = require('../Controllers/bookController.cjs')
const authMiddleWare = require('../middleware/auth.cjs')
const router= Router.Router()


router.get("/api/books" , bookController.getAllBooks )
router.get("/api/books/:id"  , bookController.getoneBook)
router.post("/api/books" , authMiddleWare, bookController.addNewBook)
router.put("/api/books/:id" ,authMiddleWare , bookController.updateBook)
router.delete("/api/books/:id" ,authMiddleWare , bookController.deleteBook)

module.exports= router 
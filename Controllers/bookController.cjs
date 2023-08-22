const bookModel = require('../Models/Books.cjs')



exports.getAllBooks = async function ( req,res){
try{  
 const Books = await bookModel.find()
 return res.json({"message":"Done",data:Books})
} catch (err) {
  return res.status(400).send({message:err})
}
}
exports.getoneBook = async function ( req,res){
try{
const book = await bookModel.findOne({_id: req.params.id})
return res.json({"Message":"Get the book successfully",data:book})
} catch (err) {
    return res.status(400).send({message:err})
}
}
exports.addNewBook = async function ( req,res){
    try{
    const createBook = await bookModel.create(req.body)
    return res.json({"Message":"Book added successfully", data:createBook})
    } catch (err) {
        return res.status(400).send({message:err})
    }
    }
exports.updateBook = async function ( req,res){
try{
 await bookModel.findByIdAndUpdate(req.params.id,req.body)
 return res.json({"Message":"Book updated successfully",data:[]})

} catch (err) {
    return res.status(400).send({message:err})
}
}
exports.deleteBook = async function ( req,res){
try{
    await bookModel.findByIdAndDelete(req.params.id)
    return res.json({"Message":"Book deleted successfully", data:[]})
} catch (err) {
    return res.status(400).send({message:err})
}
    }
   
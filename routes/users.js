const express= require('express')
const router=express.Router()
router.use(logger)
router.get("/", (req, res) =>{
    res.send("user List")
})
router.get("/new", (req, res) =>{
    res.render("users/new")
})

router.post("/",(req,res)=>{
    res.send("create user")
})
router.route("/:id")
.get((req,res)=>{
    res.send(`GET USER WITH ID ${req.params.id}`)
})
.put((req,res)=>{ 
    res.send(`UPDATE USER WITH ID ${req.params.id}`)
})
.delete((req,res)=>{
    res.send(`DELETE USER WITH ID ${req.params.id}`)
})
const users=[{name:"kayle"},{name: "sally"}]
router.param("id" , (req, res, next, id) => {
    req.user=users[id]
    next()
})
function logger(req,res,next){
    console.log(req.originalURL)
    next()
}
module.exports=router
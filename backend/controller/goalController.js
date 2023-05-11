const asyncHandler=require('express-async-handler')

const Goal =require('../model/goalModel')
const User=require('../model/userModal')


//@disc get goals 
// @route GET/api/goals
// @access private
const getGoal=asyncHandler(async (req,res)=>{
    const goals=await Goal.find({user:req.user.id});
    res.status(200).json(goals);
    console.log("get fucking goals !!!".yellow)
})

//@disc set goals 
// @route POST/api/goals
// @access private
const setGoal= asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400);
        throw new Error('please add atext filed')

    }
    const goals = await Goal.create({
        text:req.body.text,
        user:req.user.id
    })
    console.log(req.body) 
    res.json(goals)

})

//@disc update goals 
// @route put/api/goals/id
// @access private
const updateGoal=asyncHandler(async(req,res)=>{
    const goals=await Goal.findById(req.params.id);
    if(!goals){
        res.status(400)
        throw new Error('goal not found!')
    }

    // const user=await User.findById(req.user.id)
    if(!req.user){
        res.status(911)
        throw new Error('user doesnt exist!')
    }

    //make sure the loged in user matchs the goals user
    if(goals.user.toString()!==req.user.id){
        res.status(911)
        throw new Error('user not authorized!')
    }

    const updatedGoal=await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedGoal)
   
})
//@disc delte goals 
// @route delte/api/goals/id
// @access private
const deleteGoal=asyncHandler(async(req,res)=>{
    const goals=await Goal.findById(req.params.id);
    if(!goals){
        res.status(400)
        throw new Error('goal not found!')
    }

    // const user=await User.findById(req.user.id)
    if(!req.user){
        res.status(911)
        throw new Error('user doesnt exist!')
    }

    //make sure the loged in user matchs the goals user
    if(goals.user.toString()!==req.user.id){
        res.status(911)
        throw new Error('user not authorized!')
    }
// await goals.remove()
  await Goal.findByIdAndDelete(req.params.id)

    res.status(400).json({id:req.params.id})
})


module.exports={
    getGoal ,setGoal,updateGoal,deleteGoal
}
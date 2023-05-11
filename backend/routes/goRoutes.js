const express = require('express')
const router =express.Router();
const {
    getGoal,
    deleteGoal,
    updateGoal,
    setGoal,

    }=require('../controller/goalController');
const { protect } = require('../middleware/userMiddware');


router.route('/').get(protect,getGoal).post(protect,setGoal);
router.route('/:id').delete(protect,deleteGoal).put(protect,updateGoal)
// router.route('/date/').get(protect,deleteGoal).post(protect,updateGoal)



//! you can use this too 

// router.get('/',getGoal)
// router.post('/',setGoal)
// router.put('/:id',updateGoal)
// router.delete('/:id',deleteGoal)




 module.exports = router

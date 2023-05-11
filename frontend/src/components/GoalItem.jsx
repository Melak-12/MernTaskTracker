import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'

const GoalItem = ({goal}) => {
    const dispatch=useDispatch()
  return (
   
      <div className="goal">
        <div>
            {new Date(goal.createdAt).toLocaleString('en-US')}
            <h2 style={{color:'#075a55'}}>{goal.text}</h2>
            <button onClick={()=>dispatch(deleteGoal(goal._id))} className='close' color='primary'>X</button>
        </div>
      </div>
    
  )
}

export default GoalItem

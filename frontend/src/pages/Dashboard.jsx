import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner';
import GoalForm from '../components/GoalForm';
import { getGoals, reset } from '../features/goals/goalSlice';
import GoalItem from '../components/GoalItem';


const Dashboard = () => {

  const dispatch=useDispatch()
  const navigate=useNavigate();

  const {user}=useSelector((state)=>state.auth)
  const {goals,isLoading,isError,message}=useSelector((state) =>state.goals)

  // const user1=localStorage.getItem('user')
  // console.log("user1u"+JSON.parse(user1))


  useEffect(()=>{

    if(isError){
      console.log(message)
          }
    
   if(!user){
    navigate('/login')
   }
   else{
    dispatch(getGoals())
   }
    return ()=>{
     dispatch(reset())
    }

  },[user,navigate,isError,message,dispatch])

  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
    <section className='heading'>
      <h1>Welcome {user&&user.name}</h1>
      <p>Tasks Dashboard</p>
    </section>
    <GoalForm/>
    <section className="content">
      {goals.length > 0?(
        <div className="goals">
         { goals.map((goal)=>(
          <GoalItem key={goal._id} goal={goal}/>
         ))}
        </div>
        ):(
        <h3>you have not set any goal</h3>

      )}
    </section>
    
    </>
  )
  }
  export default Dashboard
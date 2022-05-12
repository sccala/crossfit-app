import { useEffect, useState } from 'react'
import { getAllWorkouts } from '../../../server/src/database/Workout'

export const Hello = () => {
    const [initialState, setInitialState]=useState([])
    useEffect(()=>{
        fetch('/api/v1/workouts')
          .then(res => {
            if (res.ok) {
              return <h1>Hello</h1>
            }
          })
         
    },[])
  return <h1>Hello</h1>
}

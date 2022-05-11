const Workout = require('../database/Workout')
const { v4: uuid } = require('uuid')

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts()
  return allWorkouts
}
const getOneWorkout = () => {
  return
}
const createNewWorkout = newWorkout => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleDateString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleDateString('en-US', { timeZone: 'UTC' }),
  }
  const createdWorkout = Workout.createNewWorkout(workoutToInsert)
  return createdWorkout
}
const updateOneWorkout = (workoutId, changes) => {
  const updatedWorkout = Workout.updateOneWorkout(workoutId, changes)
  return updatedWorkout
}
const deleteOneWorkout = workoutId => {
  Workout.deleteOneWorkout(workoutId)
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}

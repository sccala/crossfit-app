const express = require('express')
const bodyParser = require('body-parser')
const v1WorkoutRouter = require('./v1/routes/workoutRoutes')

const app = express()
const cache = apicache.middleware
const PORT = process.env.PORT || 3000
const apicache = require('apicache')


// app.get('/', (req, res)=> {
//     res.send('<h1>its working</h1>')
// })
app.use(bodyParser.json())
app.use(cache('2 minutes'))
app.use('/api/v1/workouts', v1WorkoutRouter)

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`)
})

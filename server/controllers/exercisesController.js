const Exercise = require('../db/config/models/exercise');
const User = require('../db/config/models/user');


const getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find()
    res.status(200).json({exercises})
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const createExercise = async (req, res) => {
  try {
    const exercise = new Exercise(req.body)
    await exercise.save()
    const user = await User.findById({ _id: req.body.userId})
    await user.exercises.push(exercise._id)
    await (await user).save();
    res.status(200).json({ exercise});
  } catch (error) {
    res.status(400).json({ error: error.message })

  }
}


module.exports = { getAllExercises, createExercise } ;
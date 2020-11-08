const router = require('express').Router();
const { getAllExercises, createExercise } = require('../controllers/exercisesController');

router.get('/', getAllExercises);
router.post('/:id', createExercise)

module.exports = router;
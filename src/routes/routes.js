const { Router } = require('express');

const router = Router();

const {
  getAllJobs
} = require('../controllers/jobController')

router.get('/', getAllJobs)

module.exports = router;
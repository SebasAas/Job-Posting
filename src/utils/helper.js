const data = require('./data.json');

// Job
const Job = require('../models/jobModel');

data.map(job => {
  const newJob = new Job({
    company: job.company,
    logo: job.logo,
    new: job.new,
    featured: job.featured,
    position: job.position,
    role: job.role,
    level: job.level,
    postedAt: Date.now(),
    contract: job.contract,
    location: job.location,
    languages: job.languages,
    tools: job.tools
  })

  newJob.save((err, job) => {
    if (err) {
      return console.log(err);
    }
    return console.log(job);
  });
})
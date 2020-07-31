const jobController = {};

// Model
const Job = require('../models/jobModel');

// Find Users
jobController.getAllJobs = async (req, res) => {
  await Job
    .find({})
    .sort({ postedAt: 'desc' })
    .then(jobs => {
      res.send(jobs)
    })
    .catch(err => {
      console.log(err)
    })
};

// Find User by Document
jobController.findOneJob = async (req, res) => {
  // let searchByParam = {};
  // const { params: { data } } = req;
  // const isNumber = /^\d+$/.test(data);

  // if (isNumber) {
  //   searchByParam = { document: data };
  // } else {
  //   searchByParam = { email: data };
  // }

  // await User.findOne(searchByParam, (err, usuario) => {
  //   if (err) return res.send('No existe ningun usuario con ese dato');
  //   return res.send(usuario);
  // });
};

// Crear Usuario
jobController.addJob = async (req, res) => {
  // const {
  //   name, lastname, document, email, password,
  // } = req.body;

  // if (password.length < 8) return res.status(400).send('La contraseña tiene menos de 8 caracteres.');

  // User.findOne({
  //   $or:
  //     [
  //       { document },
  //       { email },
  //     ],
  // }, (err, usuario) => {
  //   if (usuario !== null) return res.status(400).send('documento o email ya registrado');
  // });

  // const newUser = new User({
  //   name, lastname, document, email, password,
  // });

  // newUser.save((err, user) => {
  //   if (err) {
  //     return res.status(400).json({ error: err });
  //   }
  //   return res.status(201).send(`${user.email}`);
  // });
};

// // Logear usuario
// jobController.loginUser = passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash: false,
//   // successFlash: 'Welcome!',
// });

// Actualizar Usuario
jobController.updateJob = (req, res) => {
  res.send('Usuario actualizado');
};

// Borrar Usuario
jobController.deleteJob = (req, res) => {
  res.send('Usuario eliminado');
};

module.exports = jobController;

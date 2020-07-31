const { Schema, model } = require('mongoose')

const JobSchema = new Schema({
  company: {
    type: String,
    required: [true, 'La compañia es requerida'],
    trim: true
  },
  logo: {
    type: String,
    required: false,
  },
  new: {
    type: Boolean,
    required: true,
    default: false
  },
  featured: {
    type: Boolean,
    required: true,
    default: false
  },
  position: {
    type: String,
    required: [true, 'La posicion es requerida'],
    trim: true
  },
  role: {
    type: String,
    required: [true, 'El rol es requerido'],
    trim: true
  },
  level: {
    type: String,
    required: [true, 'El nivel es requerido'],
    trim: true
  },
  postedAt: {
    type: Date,
    required: true,
    trim: true,
    default: Date.now
  },
  contract: {
    type: String,
    required: [true, 'El tipo de contrato es requerido'],
    trim: true
  },
  location: {
    type: String,
    required: [true, 'La localizacion es requerida'],
    trim: true
  },
  languages: {
    type: Array,
    required: [true, 'El lenguaje es requerido'],
    trim: true
  },
  tools: {
    type: Array,
    required: false,
    trim: true
  }
})

module.exports = model('Job', JobSchema, 'Jobs');
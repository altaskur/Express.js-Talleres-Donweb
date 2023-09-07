const mongoose = require('mongoose');
const { hashPassword, comparePassword } = require('../auth/auth');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'El email es obligatorio'],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
    trim: true,
  },
}, {
  collection: 'users',
  database: 'blog',
});

userSchema.pre('save', hashPassword);

userSchema.methods.comparePassword = comparePassword;

const Users = mongoose.model('Users', userSchema);

module.exports = Users;

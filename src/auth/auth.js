const bcrypt = require('bcrypt');

async function hashPassword(next) {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
}

async function comparePassword(password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error('Error al comparar las contraseñas');
  }
}
module.exports = { hashPassword, comparePassword };

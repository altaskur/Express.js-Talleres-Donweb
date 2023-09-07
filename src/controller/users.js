const { generateToken } = require('../jwt/jwt');
const Users = require('../models/users');

const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Ocurrió un error durante la solicitud' });
  }
};

const singUpUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new Users({ name, email, password });
    await user.save();

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Ocurrió un error durante la solicitud' });
  }
};

const singInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ error: 'Contraseña incorrecta' });

    const token = generateToken(user.email, user.name);
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Ocurrió un error durante la solicitud' });
  }
};

module.exports = { getUsers, singUpUser, singInUser };

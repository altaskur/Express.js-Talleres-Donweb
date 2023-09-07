const mongoose = require('mongoose');

require('dotenv').config();

const dbConnection = async () => {
  console.log('conectado a la base de datos');
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'blog',
    });
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.log(error);
    throw new Error('Error a la hora de iniciar la base de datos');
  }
};

module.exports = { dbConnection };

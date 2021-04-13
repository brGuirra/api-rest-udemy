import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

// Array contendo os models
const models = [Aluno, User, Foto];

// Cria uma connections com as configurações do db
const connection = new Sequelize(databaseConfig);

// Inicia a conexão com o db para cada model
models.forEach((model) => model.init(connection));

// Associa as chaves dos models
models.forEach((model) => model.associate && model.associate(connection.models));

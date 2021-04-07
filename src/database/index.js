import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

// Array contendo os models
const models = [Aluno, User];

// Cria uma connections com as configurações do db
const connection = new Sequelize(databaseConfig);

// Inicia a conexão com o db para cada model
models.forEach((model) => model.init(connection));

import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';

// Array contendo os models
const models = [Aluno];

// Cria uma connections com as configurações do db
const connection = new Sequelize(databaseConfig);

// Inicia a conexão com o db para cada model
models.forEach((model) => model.init(connection));

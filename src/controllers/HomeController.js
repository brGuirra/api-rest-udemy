import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Larissa',
      sobrenome: 'Pereira',
      email: 'larissa@gmail.com',
      idade: 26,
      peso: 60,
      altura: 1.70,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();

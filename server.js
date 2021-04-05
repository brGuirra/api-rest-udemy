import App from './app';

const port = 3001;

App.listen(port, () => {
  console.log();
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`CRTL + click em http://localhost:${port}`);
});

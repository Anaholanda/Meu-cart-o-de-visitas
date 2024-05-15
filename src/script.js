const infos = {
  nome: 'Ana Kelly Holanda',
  cargo: 'Engenheira de testes e qualidade de software',
  imagem: 'https://github.com/Anaholanda.png',
  minibio: 'Engenheira de testes de software, íma para mulheres na TI, vonluntária de ações socias, e amadora de dados nas horas vagas',
  github: 'https://github.com/Anaholanda',
  linkedin: 'https://www.linkedin.com/feed/',
  Email: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new',
};

document.getElementById('imagem').src = infos.imagem;
document.getElementById('nome').innerHTML = infos.nome;
document.getElementById('cargo').innerHTML = infos.cargo;

document.getElementById('github').href = infos.github;
document.getElementById('linkedin').href = infos.linkedin;
document.getElementById('email').href = infos.email;

document.getElementById('minibio').innerHTML = infos.minibio;
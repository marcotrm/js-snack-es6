//Array di squadre di calcio
const teams = [
    { nome: 'Napoli', punti: 0, falliSubiti: 0 },
    { nome: 'Milan', punti: 0, falliSubiti: 0 },
    { nome: 'Inter', punti: 0, falliSubiti: 0 },
    { nome: 'Juventus', punti: 0, falliSubiti: 0 },
  ];
  
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  teams.forEach(team => {
    team.punti = getRandomNumber(0, 100);
    team.falliSubiti = getRandomNumber(0, 50);
  });
  
  //nuovo array con nomi e falli subiti
  const teamStats = teams.map(team => {
    return { nome: team.nome, falliSubiti: team.falliSubiti };
  });

  console.log('Teams aggiornati:', teams);
  console.log('Nuovo array con nomi e falli subiti:', teamStats);
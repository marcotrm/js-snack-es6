//Array di bici
const bikes = [
    { nome: 'Marzano', peso: 8.5 },
    { nome: 'Zagato', peso: 7.8 },
    { nome: 'Dellagiusta', peso: 9.0 },
    { nome: 'Cinquegrana', peso: 7.5 },
  ];
  
  //bici con peso minore
  let lightestBike = bikes[0];
  for (let i = 1; i < bikes.length; i++) {
    if (bikes[i].peso < lightestBike.peso) {
      lightestBike = bikes[i];
    }
  }
  
  console.log(`La bici più leggera è la ${lightestBike.nome} con un peso di ${lightestBike.peso} kg.`);
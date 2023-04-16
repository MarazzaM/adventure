export const gameData = [
  {
    title: '¿Estás listo?',
    text: '¿Estás listo para jugar al juego?',
    options: [
      {
        text: 'Listo',
        nextMessageIndex: 1,
        score: 25,
      },
    ],
  },
  {
    title: '¡Bienvenido!',
    text: 'Despiertas en una habitación oscura sin recordar cómo llegaste allí. ¿Qué haces?',
    options: [
      {
        text: 'Buscar una salida',
        nextMessageIndex: 2,
        score: 25,
      },
      {
        text: 'Volver a dormir',
        nextMessageIndex: 3,
        score: -10,
        advice: 'Deberías intentar mantenerte despierto y encontrar una forma de salir de la habitación.',
      },
    ],
  },
  {
    title: 'Encuentra la llave',
    text: 'Encuentras una llave en el suelo. ¿Qué haces?',
    options: [
      {
        text: 'Usar la llave para intentar abrir la puerta',
        nextMessageIndex: 4,
        score: 50,
      },
      {
        text: 'Guardar la llave en caso de que la necesites más tarde',
        nextMessageIndex: 5,
        score: -10,
        advice: 'Necesitas usar la llave ahora!',
      },
    ],
  },
  {
    title: 'Juego terminado',
    text: 'Te vuelves a dormir y nunca vuelves a despertar.',
    options: [{nextMessageIndex: -1}],
  },
  {
    title: '¡Escapa!',
    text: 'Desbloqueas con éxito la puerta y escapas de la habitación. ¡Felicidades!',
    options: [{nextMessageIndex: -1}],
  },
  {
    title: 'Camino sin salida',
    text: 'Llegas a un callejón sin salida y tienes que regresar.',
    options: [
      {
        text: 'Volver a la habitación principal',
        nextMessageIndex: 1,
        score: 0,
      },
    ],
  },
];

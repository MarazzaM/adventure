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
    title: 'La isla misteriosa',
    text: 'Te despiertas en una playa desconocida rodeado de palmeras y rocas. No tienes idea de cómo llegaste allí. ¿Qué haces? Te despiertas en una playa desconocida rodeado de palmeras y rocas. No tienes idea de cómo llegaste allí. ¿Qué haces?',
    options: [
      {
        text: 'Explorar la isla',
        nextMessageIndex: 2,
        score: 25,
      },
      {
        text: 'Esperar a que alguien te encuentre',
        nextMessageIndex: 3,
        score: -10,
        advice: 'Es poco probable que alguien te encuentre aquí. Deberías intentar buscar una forma de salir de la isla.Te despiertas en una playa desconocida rodeado de palmeras y rocas. No tienes idea de cómo llegaste allí. ¿Qué haces?',
      },
    ],
  },
  {
    title: 'En busca de comida',
    text: 'Te das cuenta de que tienes hambre y necesitas encontrar comida. Ves una fruta extraña en un árbol cercano. ¿Qué haces?Te despiertas en una playa desconocida rodeado de palmeras y rocas. No tienes idea de cómo llegaste allí. ¿Qué haces?',
    options: [
      {
        text: 'Comer la fruta',
        nextMessageIndex: 4,
        score: 10,
      },
      {
        text: 'Buscar otra fuente de comida',
        nextMessageIndex: 5,
        score: 20,
        advice: 'Podría ser peligroso comer una fruta desconocida. Deberías buscar otra fuente de alimento.Te despiertas en una playa desconocida rodeado de palmeras y rocas. No tienes idea de cómo llegaste allí. ¿Qué haces?',
      },
    ],
  },
  {
    title: 'La fruta envenenada',
    text: 'La fruta resulta ser venenosa y te enfermas. ¿Qué haces? Podría ser peligroso comer una fruta desconocida. Deberías buscar otra fuente de alimento.Te despiertas en una playa',
    options: [
      {
        text: 'Intentar encontrar un antídoto en la isla',
        nextMessageIndex: 6,
        score: 30,
      },
      {
        text: 'Esperar a que la enfermedad pase',
        nextMessageIndex: 7,
        score: -20,
        advice: 'Es poco probable que la enfermedad pase por sí sola. Deberías intentar encontrar un antídoto. Podría ser peligroso comer una fruta desconocida. Deberías buscar otra fuente de alimento.Te despiertas en una playa',
      },
    ],
  },
  {
    title: 'El antídoto',
    text: 'Encuentras un antídoto en una planta cercana y te curas. ¿Qué haces ahora?',
    options: [
      {
        text: 'Seguir explorando la isla',
        nextMessageIndex: 8,
        score: 25,
      },
      {
        text: 'Intentar construir una balsa para escapar',
        nextMessageIndex: 9,
        score: 50,
      },
    ],
  },
  {
    title: 'Juego terminado',
    text: 'Decides esperar a que alguien te rescate, pero nunca llega nadie. Mueres de hambre y sed.',
    options: [{nextMessageIndex: -1}],
  },
  {
    title: 'Explorando la isla',
    text: 'Descubres una cueva en la ladera de una montaña. ¿Qué haces?',
    options: [
      {
        text: 'Entrar en la cueva',
        nextMessageIndex: 10,
        score: 30,
      },
      {
        text: 'Continuar explorando la costa',
        nextMessageIndex: 11,
        score: 20,
        },
        ],
        },
        {
        title: 'Construyendo la balsa',
        text: 'Reúnes troncos y ramas para construir una balsa. Después de varios días de trabajo, finalmente la terminas. ¿Qué haces ahora?',
        options: [
        {
        text: 'Lanzarte al mar con la balsa',
        nextMessageIndex: 12,
        score: 50,
        },
        {
        text: 'Continuar explorando la isla',
        nextMessageIndex: 11,
        score: 20,
        },
        ],
        },
        {
        title: 'La cueva misteriosa',
        text: 'Exploras la cueva y encuentras un mapa antiguo. ¿Qué haces?',
        options: [
        {
        text: 'Seguir explorando la cueva',
        nextMessageIndex: 13,
        score: 20,
        },
        {
        text: 'Intentar seguir el mapa',
        nextMessageIndex: 14,
        score: 30,
        },
        ],
        },
        {
        title: 'Un callejón sin salida',
        text: 'La cueva termina en un callejón sin salida. Debes volver atrás. ¿Qué haces?',
        options: [
        {
        text: 'Volver a la entrada de la cueva',
        nextMessageIndex: 11,
        score: 10,
        },
        {
        text: 'Buscar una salida en otra dirección',
        nextMessageIndex: 15,
        score: 20,
        },
        ],
        },
        {
        title: 'El barco abandonado',
        text: 'Finalmente llegas a la costa opuesta de la isla y encuentras un barco abandonado. ¿Qué haces?',
        options: [
        {
        text: 'Intentar arreglar el barco y escapar de la isla',
        nextMessageIndex: 11,
        score: 50,
        },
        {
        text: 'Continuar explorando la isla',
        nextMessageIndex: 11,
        score: 20,
        },
        ],
        },
        {
        title: 'La tormenta',
        text: 'Mientras intentas arreglar el barco, una tormenta se acerca. ¿Qué haces?',
        options: [
        {
        text: 'Intentar terminar de arreglar el barco antes de que llegue la tormenta',
        nextMessageIndex: 17,
        score: 20,
        },
        {
        text: 'Refugiarte en la cueva',
        nextMessageIndex: 11,
        score: 30,
        },
        ],
        },
        {
        title: 'El escape',
        text: 'Logras arreglar el barco justo a tiempo y escapar de la isla. ¡Felicidades, has ganado el juego!',
        options: [{nextMessageIndex: -1}],
        },
        {
        title: 'Atrapado en la cueva',
        text: 'Te pierdes en la cueva y no puedes encontrar la salida. Mueres de hambre y sed.',
        options: [{nextMessageIndex: -1}],
        },
        ];
        
        // End of game data.

export const gameData = [
  {
    title: 'Inicio',
    text: 'Inicio del juego',
    options: [
      {
        text: 'Listo',
        nextMessageIndex: 1,
        score: 25,
      },
    ],
  },
  {
    title: 'Primer mensaje',
    text: 'Este es el texto del primer mensaje.',
    options: [
      {
        text: 'Opción correcta',
        nextMessageIndex: 2,
        score: 25,
      },
      {
        text: 'Opción errónea con consejo',
        nextMessageIndex: 2,
        score: -10,
        advice: 'Es poco probable que alguien te encuentre aquí. Deberías intentar buscar una forma de salir de la isla.Te despiertas en una playa desconocida rodeado de palmeras y rocas. No tienes idea de cómo llegaste allí. ¿Qué haces?',
      },
    ],
  },
  {
    title: 'Segundo Mensaje',
    text: 'Este es el texto del segundo mensaje.',
    options: [
      {
        text: 'Opción correcta.',
        nextMessageIndex: 3,
        score: 10,
      },
      {
        text: 'Opción errónea.',
        nextMessageIndex: 3,
        score: -20,
        advice: 'Podría ser peligroso comer una fruta desconocida. Deberías buscar otra fuente de alimento.Te despiertas en una playa desconocida rodeado de palmeras y rocas. No tienes idea de cómo llegaste allí. ¿Qué haces?',
      },
    ],
  },
  {
    title: 'Tercer mensaje',
    text: 'Texto tercer mensaje',
    options: [
      {
        text: 'Opción correcta',
        nextMessageIndex: 4,
        score: 30,
      },
      {
        text: 'Opción errónea',
        nextMessageIndex: 4,
        score: -20,
        advice: 'Consejo tercer mensaje',
      },
    ],
  },
  {
    title: 'Cuarto mensaje',
    text: 'Texto del cuarto mensaje',
    options: [
      {
        text: 'Opción correcta',
        nextMessageIndex: 5,
        score: 25,
      },
      {
        text: 'Opción errónea',
        nextMessageIndex: 5,
        score: -50,
        advice: 'Es poco probable que alguien te encuentre aquí. Deberías intentar buscar una forma de salir de la isla.Te despiertas en una playa desconocida rodeado de palmeras y rocas. No tienes idea de cómo llegaste allí. ¿Qué haces?',
      },
    ],
  },
  {
    title: 'Juego terminado',
    text: 'Decides esperar a que alguien te rescate, pero nunca llega nadie. Mueres de hambre y sed.',
    options: [{nextMessageIndex: -1}],
  },
        ];
        
        // End of game data.

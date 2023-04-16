export const gameData = [
  {
    title: 'Welcome!',
    text: 'You wake up in a dark room with no memory of how you got there. What do you do?',
    options: [
      {
        text: 'Look for a way out',
        nextMessageIndex: 1,
        score: 10,
      },
      {
        text: 'Go back to sleep',
        nextMessageIndex: 2,
        score: -5,
        advice: 'You should try to stay awake and find a way out of the room.',
      },
    ],
  },
  {
    title: 'Find the key',
    text: 'You find a key on the ground. What do you do?',
    options: [
      {
        text: 'Use the key to try to unlock the door',
        nextMessageIndex: 3,
        score: 20,
      },
      {
        text: 'Keep the key in case you find another use for it',
        nextMessageIndex: 4,
        score: -5,
        advice: 'Life advice',
      },
    ],
  },
  {
    title: 'Game over',
    text: 'You fall back asleep and never wake up again.',
    options: [{nextMessageIndex: -1}],
  },
  {
    title: 'Escape!',
    text: 'You successfully unlock the door and escape the room. Congratulations!',
    options: [{nextMessageIndex: -1}],
  },
  {
    title: 'Dead end',
    text: 'You reach a dead end and have to turn back.',
    options: [
      {
        text: 'Go back to the main room',
        nextMessageIndex: 0,
        score: 0,
      },
    ],
  },
];

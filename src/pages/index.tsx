import { useState, useEffect } from 'react';
import { gameData } from '../gameData';
import Swal from 'sweetalert2';
import { Chivo_Mono } from 'next/font/google'

const inter = Chivo_Mono({ subsets: ['latin'] })



function ChatBox() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [negativeScoreIndices, setNegativeScoreIndices] = useState([]);
  const [negativeScoreAdvices, setNegativeScoreAdvices] = useState([]);
  const [adviceIndex, setAdviceIndex] = useState(0);
  const [showingAdvice, setShowingAdvice] = useState(false);

  const currentMessage = gameData[currentMessageIndex];

  const handleOptionClick = (option) => {
    const nextMessageIndex = option.nextMessageIndex;
    const scoreDelta = option.score || 0;
  
    if (nextMessageIndex === -1) {
      setGameOver(true);
    } else {
      setCurrentMessageIndex(nextMessageIndex);
      setScore(score + scoreDelta);
      if (scoreDelta < 0 && option.advice && !negativeScoreIndices.includes(currentMessageIndex)) {
        setNegativeScoreIndices([...negativeScoreIndices, currentMessageIndex]);
        setNegativeScoreAdvices([...negativeScoreAdvices, option.advice]);
      }
    }
  };
  


  function AdviceModal({ adviceText, onDismiss }) {
    useEffect(() => {
      Swal.fire({
        title: 'Consejo',
        text: adviceText,
        icon: 'warning',
        confirmButtonText: 'Next',
        allowOutsideClick: false,
      }).then(() => {
        onDismiss()
      })
    }, [adviceText, onDismiss])

    return null
  }


  const handleRestartClick = () => {
    setCurrentMessageIndex(0);
    setScore(0);
    setGameOver(false);
    setNegativeScoreIndices([]);
    setNegativeScoreAdvices([]);
  };
  const handleShowResultsClick = () => {
    if (negativeScoreAdvices.length > 0) {
      setShowingAdvice(true)
      setAdviceIndex(0)
    } else {
      Swal.fire({
        title: 'Sabes navegar en la web!',
        icon: 'success',
        text: 'Parece que conoces las mejores prácticas!'
      })
    }
  }

  const handleNextAdviceClick = () => {
    if (adviceIndex < negativeScoreAdvices.length - 1) {
      setAdviceIndex(adviceIndex + 1)
    } else {
      setShowingAdvice(false)
    }
  }

  if (showingAdvice) {
    const advice = negativeScoreAdvices[adviceIndex]
    Swal.fire({
      title: advice.title,
      text: advice.text,
      icon: 'warning',
      confirmButtonText: 'Entendido',
      showCancelButton: false,
      showCloseButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then((result) => {
      if (result.isConfirmed) {
        handleNextAdviceClick()
      }
    })
  }

  return (
    <div className={inter.className}>

    <div className="grid  grid-cols-1	 grid-rows-1 justify-items-center		 place-items-center	 	min-h-screen  bg-[url('/44.webp')] bg-cover	bg-center	">
      <div className="grid  grid-cols-1	 grid-rows-1 justify-items-center		 place-items-center	 w-2/3 min-h-[75%] text-center ">
        <div className="w-full  p-4 mb-2 min-h-full grid  grid-cols-1	 grid-rows-1 justify-items-center	 place-items-center	bg-red-700 rounded text-center ">
        <div className="text-gray-900 text-3xl w-full h-full bg-[url('/back.jpg')] bg-cover bg-center grid grid-cols-1 grid-rows-1 justify-items-center place-items-center transition-opacity">
  {currentMessage.text}
</div>
          {currentMessage.options.map((option, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 my-2 cursor-pointer transition-all	text-xl min-w-[50%]"
              onClick={() => handleOptionClick(option)}
            >
              {option?.text || (
                <div
                  className="w-full h-full p-3"
                  onClick={handleShowResultsClick}
                >
                  Mostrar resultados
                </div>
              )}
            </div>
          ))}
        </div>
        {gameOver ? (
          <div className="bg-gray-300 p-2 rounded-lg text-gray-900 ">
            <span className="font-medium">Game Over! Final score:</span> {score}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 ml-4 cursor-pointer "
              onClick={handleRestartClick}
            >
              Play Again
            </button>
          </div>
        ) : (<div></div>
          // <div className="bg-gray-300 p-2 rounded-lg text-gray-900">
          //   <span className="font-medium">Score:</span> {score}
          // </div>
        )}
      </div>

      {showingAdvice && (
        <AdviceModal
          adviceText={negativeScoreAdvices[adviceIndex]}
          onDismiss={handleNextAdviceClick}
        />
      )}
    </div>
    </div>

  );
}

export default ChatBox

import { useState, useEffect } from 'react';
import { gameData } from '../gameData';
import Swal from 'sweetalert2';

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
      if (scoreDelta < 0 && option.advice) {
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
        text:'Parece que conoces las mejores prácticas!'
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
      confirmButtonText: 'Next',
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
    <div className="flex flex-col h-screen justify-end items-center bg-gray-200">
      <div className="flex flex-col items-center max-w-2xl">
        <div className="w-full bg-white rounded-lg p-4 mb-2">
          <div className="text-gray-900">{currentMessage.text}</div>
          {currentMessage.options.map((option, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 my-2 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option?.text || (
                <div
                  className="w-full h-full "
                  onClick={handleShowResultsClick}
                >
                  Mostrar resultados
                </div>
              )}
            </div>
          ))}
        </div>
        {gameOver ? (
          <div className="bg-gray-300 p-2 rounded-lg text-gray-900">
            <span className="font-medium">Game Over! Final score:</span> {score}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 ml-4 cursor-pointer"
              onClick={handleRestartClick}
            >
              Play Again
            </button>
          </div>
        ) : (
          <div className="bg-gray-300 p-2 rounded-lg text-gray-900">
            <span className="font-medium">Score:</span> {score}
          </div>
        )}
      </div>
  
      {showingAdvice && (
        <AdviceModal
          adviceText={negativeScoreAdvices[adviceIndex]}
          onDismiss={handleNextAdviceClick}
        />
      )}
    </div>
  );
}

export default ChatBox

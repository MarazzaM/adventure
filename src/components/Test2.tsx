import { useState, useEffect } from 'react';
import { gameData } from '../gameData';
import Swal from 'sweetalert2';
import { FaVideo, FaPhone, FaEllipsisV, FaArrowLeft } from "react-icons/fa";
import { GoVerified } from "react-icons/go";




function Test2() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [negativeScoreIndices, setNegativeScoreIndices] = useState([]);
  const [negativeScoreAdvices, setNegativeScoreAdvices] = useState([]);
  const [adviceIndex, setAdviceIndex] = useState(0);
  const [showingAdvice, setShowingAdvice] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const currentMessage = gameData[currentMessageIndex];

  const handleOptionClick = (option) => {
    const nextMessageIndex = option.nextMessageIndex;
    const scoreDelta = option.score || 0;
  
    if (nextMessageIndex === -1) {
      setGameOver(true);
    } else {
      const currentChat = {
        message: currentMessage.text,
        optionSelected: option.text,
      };
      setChatHistory([...chatHistory, currentChat]);
      setCurrentMessageIndex(nextMessageIndex);
      setScore(score + scoreDelta);
      if (
        scoreDelta < 0 &&
        option.advice &&
        !negativeScoreIndices.includes(currentMessageIndex)
      ) {
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
    <div className='max-h-screen'>
<div className=" flex flex-col justify-center items-center flex-grow overflow-y-auto">
  <div className="max-w-lg rounded-2xl shadow-lg bg-gray-100 w-full flex-grow flex flex-col">
    <div className="bg-[#075E54] p-3 flex items-center justify-between rounded-t-2xl">
          <div className="flex flex-row justify-center items-center">
          <FaArrowLeft className="h-6 w-6 text-white p-1" />
          <img
                className="h-8 w-8 rounded-full"
                src="/back.jpg"
                alt="Avatar 1"
              />
          </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl text-white font-bold">WhatsApp</span>
              <GoVerified className="h-6 w-6 text-[#25D366]" />
            </div>
            <div className="flex items-center space-x-2">
              
              <FaVideo className="h-6 w-6 text-white" />
              <FaPhone className="h-6 w-6 text-white" />
              <FaEllipsisV className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="flex-grow overflow-y-auto h-[80vh]">
  {/* Chat messages here */}
  <div className="flex flex-col flex-grow p-4">
  <div className="flex items-center self-start space-x-2">
    <img
      class="h-8 w-8 rounded-full"
      src="/back.jpg"
      alt="Avatar 1"
    />
    <div className="bg-white rounded-lg p-2">
      {currentMessage?.text}
    </div>
  </div>
  <div className="flex items-center self-end space-x-2">
    <div className="bg-green-500 rounded-lg p-2">
      {currentMessage?.options?.map((option, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 my-2 cursor-pointer transition-all text-xl min-w-[50%]"
          onClick={() => handleOptionClick(option)}
        >
          {option.text}
        </div>
      ))}
    </div>
  </div>
</div>

</div>

          <div className="flex items-center justify-center bg-gray-200 p-4">
            <input
              className="rounded-full px-4 py-2 w-full max-w-lg border-2 border-gray-300 focus:outline-none"
              type="text"
              placeholder="Type a message..."
            />
          </div>
        </div>
      </div>
      </div>

  );
}

export default Test2

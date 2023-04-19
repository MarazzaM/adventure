import { useState, useEffect, useRef } from 'react';
import { gameData } from '../gameData';
import Swal from 'sweetalert2';
import { FaVideo, FaPhone, FaEllipsisV, FaArrowLeft } from "react-icons/fa";
import { GoVerified } from "react-icons/go";




function Test3() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [negativeScoreIndices, setNegativeScoreIndices] = useState([]);
  const [negativeScoreAdvices, setNegativeScoreAdvices] = useState([]);
  const [adviceIndex, setAdviceIndex] = useState(0);
  const [showingAdvice, setShowingAdvice] = useState(false);
  const chatHistoryRef = useRef(null); // create a reference to the chat history div

  const [chatHistory, setChatHistory] = useState([]);

  // scroll to the bottom of the chat history whenever the chat history is updated
  useEffect(() => {
    const chatHistoryElement = chatHistoryRef.current;
    chatHistoryElement.scrollTop = chatHistoryElement.scrollHeight - chatHistoryElement.clientHeight;
  }, [chatHistory]);
  const renderChatHistory = () => {
    return chatHistory.map((chat, index) => {
      return (
        <div key={index} className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <img
              className="h-8 w-8 rounded-full"
              src="/back.jpg"
              alt="Avatar 1"
            />
            <div className="bg-white rounded-lg p-2">
              {chat.message}
            </div>
          </div>
          <div className="flex items-center self-end space-x-2">
            <div className="text-white font-bold rounded-md py-2 px-4 my-2 bg-green-700">
              {chat.optionSelected}
            </div>
          </div>
        </div>
      );
    });
  };
  

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
      if (scoreDelta < 0 && option.advice) {
        Swal.fire({
          title: "Cuidado",
          text: option.advice,
          icon: "warning",
          confirmButtonText: "Entendido",
          allowOutsideClick: false,
        }).then(() => {
          setNegativeScoreIndices([...negativeScoreIndices, currentMessageIndex]);
          setNegativeScoreAdvices([...negativeScoreAdvices, option.advice]);
        });
      } else {
        setNegativeScoreIndices([...negativeScoreIndices, currentMessageIndex]);
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
    setChatHistory([]);
  };
  const handleShowResultsClick = () => {
  
    if (score === 100) {
      Swal.fire({
        title: '¡Excelente!',
        icon: 'success',
        text: 'Has respondido todas las preguntas correctamente. ¡Eres un experto en navegación web!',
      });
    } else if (score >= 80) {
      Swal.fire({
        title: '¡Muy bien!',
        icon: 'success',
        text: `Has respondido la mayoría correctamente y has obtenido ${score} puntos. ¡Sigues las mejores prácticas de navegación web!`,
      });
    } else if (score >= 50) {
      Swal.fire({
        title: '¡Bien!',
        icon: 'success',
        text: `Has respondido correctamente una gran parte de las preguntas y obtuviste ${score} puntos. Aún puedes mejorar tu conocimiento de las mejores prácticas de navegación web.`,
      });
    } else {
      Swal.fire({
        title: '¡Ups!',
        icon: 'warning',
        text: `No has obtenido puntos esta ronda. Te recomendamos que repases las mejores prácticas de navegación web.`,
      });
    }
  };
  

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
    <div className="max-h-screen">
      <div className="flex flex-col justify-center items-center flex-grow overflow-y-auto">
      <div className="marvel-device iphone8plus black">
    <div className="top-bar"></div>
    <div className="sleep"></div>
    <div className="volume"></div>
    <div className="camera"></div>
    <div className="sensor"></div>
    <div className="speaker"></div>
    <div className="screen">
    <div className="max-w-lg rounded-2xl shadow-lg bg-gray-100 w-full flex-grow flex flex-col h-full">
        <div className="bg-[#075E54] p-4 flex items-center justify-between ">
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
          <div
          ref={chatHistoryRef} // attach the reference to the chat history div
          className="flex-grow overflow-y-auto h-full scroll-smooth"
        >
            <div className="flex flex-col flex-grow p-4 h-full">
              {renderChatHistory()}
              <div className="flex items-center self-start space-x-2">
                <img
                  className="h-8 w-8 rounded-full"
                  src="/back.jpg"
                  alt="Avatar 1"
                />
                <div className="bg-white rounded-lg p-2">
                  {currentMessage?.text}
                </div>
              </div>
              <div className="flex items-end self-end space-x-2">
                <div className="bg-green-500 rounded-lg p-2 my-2">
                  {currentMessage?.options?.map((option, index) => (
                    <button
                      key={index}
                      className="text-white font-bold rounded-md py-2 px-4 bg-green-500 hover:bg-green-700 text-right w-full"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option?.text || (
                <div
                  className="w-full h-full p-5 py-8"
                  onClick={handleShowResultsClick} 
                >
                  Mostrar resultados
                </div>
              )}
                    </button>
                  ))}
                
                </div>
                
              </div>    
            </div>
          </div>
        </div>
        {gameOver ? (
          <div className="bg-gray-300 p-2 rounded-lg text-gray-900  text-center">
            <span className="font-medium">Juego terminado! Puntaje final:</span> {score}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 ml-4 cursor-pointer "
              onClick={handleRestartClick}
            >
              Jugar de nuevo
            </button>
          </div>
        ) : (<div></div>
          // <div className="bg-gray-300 p-2 rounded-lg text-gray-900">
          //   <span className="font-medium">Score:</span> {score}
          // </div>
        )}
    </div>
    <div className="home"></div>
    <div className="bottom-bar"></div>
</div>

        
      </div>
    </div>
  );
}

export default Test3

import React, { useState, useEffect } from 'react';
import ChatBox from '~/components/ChatBox';
import VideoPlayer from '~/components/VideoPlayer';

const MemoizedChatBox = React.memo(ChatBox);

function App() {
  const [showChatBox, setShowChatBox] = useState(true);
  const [isIdle, setIsIdle] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    function handleUserActivity() {
      if (timer) {
        clearTimeout(timer);
      }
      setIsIdle(false);
      setTimer(
        setTimeout(() => {
          setIsIdle(true);
        }, 90000) // 90 seconds
      );
    }

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('mousedown', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);
    window.addEventListener('touchstart', handleUserActivity);

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('mousedown', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
      clearTimeout(timer);
    };
  }, [timer]);

  function handleVideoClick() {
    setShowChatBox(true);
    setIsIdle(false);
    if (timer) {
      clearTimeout(timer);
    }
  }

  return (
    <>
      {isIdle || !showChatBox ? (
        <VideoPlayer
          src="/video.mp4"
          onVideoClick={handleVideoClick}
        />
      ) : (
        <MemoizedChatBox />
      )}
    </>
  );
}

export default App;

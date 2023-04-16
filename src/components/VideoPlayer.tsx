import React, { useRef, useState, useEffect } from 'react';

function VideoPlayer(props) {
  const videoRef = useRef(null);
  const [maxWidth, setMaxWidth] = useState('100%');
  const [maxHeight, setMaxHeight] = useState('100%');

  function handleVideoClick() {
    props.onVideoClick && props.onVideoClick();
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMaxWidth(window.innerWidth + 'px');
      setMaxHeight(window.innerHeight + 'px');
    }
  }, []);

  return (
    <video
      ref={videoRef}
      onClick={handleVideoClick}
      controls={false}
      muted={true}
      autoPlay={true}
      loop={true}
      style={{
        maxWidth,
        maxHeight,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}
    >
      <source src={props.src} type="video/mp4" />
    </video>
  );
}

export default VideoPlayer;

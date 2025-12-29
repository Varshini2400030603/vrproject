// App.js - LIGHT PINK START → WHITE+BLUE IMPRESSIVE (Copy-Paste Ready)
import { useEffect, useState, useRef } from "react";
import "./App.css";

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [audio, setAudio] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // 🎵 PASTE YOUR SONG URL HERE
    const newAudio = new Audio("https://www.soundjay.com/misc/sounds/bell-ringing-05.wav");
    newAudio.loop = true;
    newAudio.volume = 0.4;
    setAudio(newAudio);
  }, []);

  const handleSurprise = () => {
    setShowContent(true);
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    triggerMassiveConfetti();
  };

  const triggerMassiveConfetti = () => {
    const emojis = ["🎉", "🎊", "🎈", "✨", "🎂", "🌟", "💖", "🎁", "🥳"];
    for (let i = 0; i < 150; i++) {
      setTimeout(() => {
        const span = document.createElement("span");
        span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        Object.assign(span.style, {
          position: "fixed",
          left: Math.random() * 100 + "vw",
          top: "-50px",
          fontSize: (25 + Math.random() * 35) + "px",
          pointerEvents: "none",
          zIndex: "9999",
          animation: `confettiFall ${3 + Math.random() * 3}s linear forwards`
        });
        document.body.appendChild(span);
        setTimeout(() => span.remove(), 7000);
      }, i * 20);
    }
  };

  return (
    <div className="App">
      <audio ref={audioRef} />
      {!showContent ? (
        // START PAGE - LIGHT PINK (ATTRACTIVE)
        <div className="hero-section-pink">
          <div className="hero-content">
            <div className="center-surprise-btn-pink" onClick={handleSurprise}>
              <span className="btn-ribbon">🎁</span>
              <h3>Click for Surprise</h3>
            </div>
          </div>
        </div>
      ) : (
        // MAIN PAGE - WHITE+BLUE (SUPER IMPRESSIVE)
        <div className="main-content">
          <div className="content-wrapper">
            <h1>🎉 HAPPY BIRTHDAY LIKITHA 🎉</h1>
            <h2>Likitha 💖</h2>
            
            <div className="premium-photo-frame">
              <div className="frame-border">
                <div className="frame-inner">
                  <img src="/happy.jpeg" alt="Happy Birthday" className="hero-photo" />
                </div>
              </div>
            </div>

            <div className="message-section">
              <p className="message">
                You are not just my sister,<br />
                you are my happiness and my best friend 🌸
              </p>
              <p className="message">
                May your 20s be filled with dreams, success,<br />
                love and endless smiles ✨
              </p>
            </div>

            <footer>— Your Sister, Varshini ❤️</footer>
          </div>
        </div>
      )}
    </div>
  );
}

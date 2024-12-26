import React, { useState } from "react";
import TypingEffect from "react-typing-effect";
import "./BirthdayCard.css";

const BirthdayCard = ({ message, onShowForm }) => {
  const paragraphs = message.split("\n\n"); // Pisahkan teks ke dalam array paragraf
  const [currentParagraph, setCurrentParagraph] = useState(0);

  const handleNextParagraph = () => {
    if (currentParagraph < paragraphs.length - 1) {
      setCurrentParagraph(currentParagraph + 1);
    }
  };

  return (
    <div className="birthday-card">
      <div className="header-sticky">Happy Birthday, Tika! 🎉</div>
      <div className="card-content">
        <TypingEffect
          text={paragraphs[currentParagraph]}
          speed={50}
          eraseDelay={9999999} // Tidak menghapus teks
          className="typing-effect"
        />
      </div>
      <div className="button-container">
        {currentParagraph < paragraphs.length - 1 ? (
          <button className="next-button" onClick={handleNextParagraph}>
            Lanjut Baca
          </button>
        ) : (
          <button className="submit-button" onClick={onShowForm}>
            ISI DOA DAN HARAPANMU
          </button>
        )}
      </div>
    </div>
  );
};

export default BirthdayCard;

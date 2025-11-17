import React from 'react';
import './Emojies.css';

const EmojiComponent = ({ showEmojis }) => {
  if (!showEmojis) return null;

  return (
    <div className="emoji-list">
      <span className="emoji">🚌</span>
      <span className="emoji">✈️</span>
      <span className="emoji">🚂</span>
      <span className="emoji">🚗</span>
    </div>
  );
};

export default EmojiComponent;
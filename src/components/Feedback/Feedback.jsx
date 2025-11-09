export const Feedback = ({ onLeaveFeedback }) => {
  return (
    <div className="feedback-box">
      <button onClick={() => onLeaveFeedback('good')} className="button">
        Good
      </button>
      <button onClick={() => onLeaveFeedback('neutral')} className="button">
        Neutral
      </button>
      <button onClick={() => onLeaveFeedback('bad')} className="button">
        Bad
      </button>
    </div>
  );
};
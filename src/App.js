// src/App.jsx
import { useState } from 'react';
import { Section } from './components/Section/Section';
import { Feedback } from './components/Feedback/Feedback';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from './components/Notification/Notification';
import './App.css';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (option) => {
    setFeedback((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = total > 0
    ? Math.round((feedback.good / total) * 100)
    : 0;

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <Feedback onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;
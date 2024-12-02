'use client';

import { useState, useEffect } from 'react';
import styles from './riddles.module.css'; // Import the CSS for styling

export default function Riddles() {
  const [riddle, setRiddle] = useState(null);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false); // State to toggle the answer visibility

  const apiKey = '74WybWsgQtt4kV2AWZIioeX8kgC3rADfC0emk9N5'; // Replace with your API key

  // Fetch riddle when the component mounts
  useEffect(() => {
    const fetchRiddle = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://api.api-ninjas.com/v1/riddles', {
          method: 'GET',
          headers: {
            'X-Api-Key': apiKey,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch riddle');
        }

        const data = await response.json();
        setRiddle(data[0]); // Assuming the response is an array, and we want the first riddle
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError('Error fetching the riddle. Please try again.');
      }
    };

    fetchRiddle();
  }, []);

  // Check the answer
  const checkAnswer = () => {
    if (riddle && answer.toLowerCase() === riddle.answer.toLowerCase()) {
      setFeedback('Correct! 🎉');
    } else {
      setFeedback('Wrong! 😔 Try again!');
    }
  };

  // Toggle the answer visibility
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  // Render the component
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Riddle Game</h1>

      {loading && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {riddle && (
        <div className={styles.riddle}>
          <p className={styles.riddleQuestion}>{riddle.question}</p>

          <input
            type="text"
            className={styles.answerInput}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer..."
          />

          <button className={styles.checkButton} onClick={checkAnswer}>
            Check Answer
          </button>

          {feedback && <p className={styles.feedback}>{feedback}</p>}

          {/* New button to show or hide the answer */}
          <button className={styles.showAnswerButton} onClick={toggleAnswer}>
            {showAnswer ? 'Hide Answer' : 'Show Answer'}
          </button>

          {/* Show the answer when the button is clicked */}
          {showAnswer && <p className={styles.answer}>Answer: {riddle.answer}</p>}

          <button className={styles.newRiddleButton} onClick={() => window.location.reload()}>
            Get New Riddle
          </button>
        </div>
      )}
    </div>
  );
}

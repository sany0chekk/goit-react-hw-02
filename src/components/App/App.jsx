import css from "./App.module.css";

import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const App = () => {
  const storedFeedback = JSON.parse(localStorage.getItem("feedback"));
  const [feedback, setFeedback] = useState(
    storedFeedback || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div className={css["wrapper"]}>
      <div className={css["modal"]}>
        <Description />
        <Options
          onUpdateFeedback={updateFeedback}
          onResetFeedback={resetFeedback}
          total={totalFeedback}
        />
        {totalFeedback > 0 ? (
          <Feedback
            results={feedback}
            total={totalFeedback}
            positive={positiveFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </div>
  );
};

export default App;

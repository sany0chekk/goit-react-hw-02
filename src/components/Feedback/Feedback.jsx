import css from "./Feedback.module.css";

const Feedback = ({ results: { good, neutral, bad }, total, positive }) => {
  return (
    <ul className={css["feedback-list"]}>
      <li className={css["feedback-item"]}>
        <p className={css["feedback-item-descr"]}>
          Good: <span>{good}</span>
        </p>
      </li>
      <li className={css["feedback-item"]}>
        <p className={css["feedback-item-descr"]}>
          Neutral: <span>{neutral}</span>
        </p>
      </li>
      <li className={css["feedback-item"]}>
        <p className={css["feedback-item-descr"]}>
          Bad: <span>{bad}</span>
        </p>
      </li>
      <li className={css["feedback-item"]}>
        <p className={css["feedback-item-descr"]}>
          Total: <span>{total}</span>
        </p>
      </li>
      <li className={css["feedback-item"]}>
        <p className={css["feedback-item-descr"]}>
          Positive: <span>{positive}%</span>
        </p>
      </li>
    </ul>
  );
};

export default Feedback;

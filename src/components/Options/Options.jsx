import css from "./Options.module.css";

const Options = ({ onUpdateFeedback, onResetFeedback, total }) => {
  return (
    <ul className={css["options-list"]}>
      <li className={css["options-item"]}>
        <button
          onClick={() => onUpdateFeedback("good")}
          className={css["options-item-btn"]}
        >
          Good
        </button>
      </li>
      <li className={css["options-item"]}>
        <button
          onClick={() => onUpdateFeedback("neutral")}
          className={css["options-item-btn"]}
        >
          Neutral
        </button>
      </li>
      <li className={css["options-item"]}>
        <button
          onClick={() => onUpdateFeedback("bad")}
          className={css["options-item-btn"]}
        >
          Bad
        </button>
      </li>
      {total > 0 && (
        <li className={css["options-item"]}>
          <button onClick={onResetFeedback} className={css["options-item-btn"]}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;

import styles from "./FeedbackForm.module.css"

export const FeedbackForm = () => {
  return (
    <form className={styles["feedback__form"]}>
      {" "}
      <textarea
        id="feedback-textarea"
        placeholder="blabla"
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">Count</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  )
}

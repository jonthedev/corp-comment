import React, { useState } from "react"
import styles from "./FeedbackForm.module.css"
import { MAX_CHARACTERS } from "../../lib/consts"

export const FeedbackForm = () => {
  const [text, setText] = useState<string>("")
  const charCount = MAX_CHARACTERS - text.length

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value
    if (newText.length > MAX_CHARACTERS) {
      return
    }
    setText(event.target.value)
  }

  return (
    <form className={styles["feedback__form"]}>
      {" "}
      <textarea
        id="feedback-textarea"
        placeholder="blabla"
        spellCheck={false}
        value={text}
        onChange={handleOnChange}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  )
}

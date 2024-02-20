import React, { useState } from "react"
import styles from "./FeedbackForm.module.css"
import { MAX_CHARACTERS } from "../../lib/consts"

type FeedbackFormProps = {
  onAddToList: (text: string) => void
}

export const FeedbackForm = ({ onAddToList }: FeedbackFormProps) => {
  const [text, setText] = useState<string>("")
  const charCount = MAX_CHARACTERS - text.length

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value
    if (newText.length > MAX_CHARACTERS) {
      return
    }
    setText(event.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onAddToList(text)
    setText("")
  }

  return (
    <form className={styles["feedback__form"]} onSubmit={handleSubmit}>
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

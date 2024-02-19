import { useEffect, useState } from "react"
import styles from "./FeedbackList.module.css"
import { FeedbackListItem } from "./FeedbackListItem"
import { URL_COMMENTS } from "../../lib/consts"

export const FeedbackList = () => {
  const [feedbackItems, setFeedbackItems] = useState([])

  useEffect(() => {
    fetch(URL_COMMENTS)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setFeedbackItems(data)
      })
  }, [])

  return (
    <ol className={styles["feedback-list"]}>
      {feedbackItems.map((feedbackItem) => (
        <FeedbackListItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  )
}

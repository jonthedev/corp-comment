import styles from "./FeedbackList.module.css"
import { FeedbackListItem } from "./FeedbackListItem"

export const FeedbackList = () => {
  return (
    <ol className={styles["feedback-list"]}>
      <FeedbackListItem />
    </ol>
  )
}

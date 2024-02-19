import styles from "./FeedbackList.module.css"
import { FeedbackListItem } from "./FeedbackListItem"

const feedbackItems = [
  {
    upVoteCount: 593,
    badgeLetter: "B",
    companyName: "Jdev",
    text: "test test test",
    daysAgo: 4
  },
  {
    upVoteCount: 222,
    badgeLetter: "S",
    companyName: "Starbucks",
    text: "lorem ipsum random text",
    daysAgo: 3
  }
]

export const FeedbackList = () => {
  return (
    <ol className={styles["feedback-list"]}>
      {feedbackItems.map((feedbackItem) => (
        <FeedbackListItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  )
}

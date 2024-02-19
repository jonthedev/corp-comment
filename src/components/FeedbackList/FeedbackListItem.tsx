import { TriangleUpIcon } from "@radix-ui/react-icons"
import styles from "./FeedbackListItem.module.css"

type FeedbackItem = {
  upVoteCount: number
  badgeLetter: string
  companyName: string
  text: string
  daysAgo: number
}

type FeedbackItemProps = {
  feedbackItem: FeedbackItem
}

export const FeedbackListItem = ({ feedbackItem }: FeedbackItemProps) => {
  const { upVoteCount, badgeLetter, companyName, text, daysAgo } = feedbackItem

  return (
    <li className={styles["feedback"]}>
      <button>
        <TriangleUpIcon />
        <span>{upVoteCount}</span>
      </button>
      <div>
        <p>{badgeLetter}</p>
      </div>

      <div>
        <p>{companyName}</p>
        <p>{text}</p>
      </div>
      <p>{daysAgo}D</p>
    </li>
  )
}

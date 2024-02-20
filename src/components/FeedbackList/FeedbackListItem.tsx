import { TriangleUpIcon } from "@radix-ui/react-icons"
import styles from "./FeedbackListItem.module.css"

export type TFeedbackItem = {
  id: number
  upVoteCount: number
  badgeLetter: string
  company: string
  text: string
  daysAgo: number
}

type FeedbackItemProps = {
  feedbackItem: TFeedbackItem
}

export const FeedbackListItem = ({ feedbackItem }: FeedbackItemProps) => {
  const { upVoteCount, badgeLetter, company, text, daysAgo } = feedbackItem

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
        <p>{company}</p>
        <p>{text}</p>
      </div>
      <p>{daysAgo}D</p>
    </li>
  )
}

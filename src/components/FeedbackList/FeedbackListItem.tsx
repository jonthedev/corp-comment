import { TriangleUpIcon } from "@radix-ui/react-icons"
import styles from "./FeedbackListItem.module.css"
import { useState } from "react"

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
  const [open, setOpen] = useState(false)

  return (
    <li
      onClick={() => setOpen(prevS => !prevS)}
      className={`${styles["feedback"]} ${
        open ? styles["feedback--expand"] : ""
      }`}
    >
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
      <p>{daysAgo === 0 ? "NEW" : `${daysAgo} d`}</p>
    </li>
  )
}

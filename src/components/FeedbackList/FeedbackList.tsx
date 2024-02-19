import { useEffect, useState } from "react"
import styles from "./FeedbackList.module.css"
import { FeedbackListItem } from "./FeedbackListItem"
import { URL_COMMENTS } from "../../lib/consts"

// const exampleFeedbackItems = [
//   {
//     upVoteCount: 593,
//     badgeLetter: "B",
//     companyName: "Jdev",
//     text: "test test test",
//     daysAgo: 4
//   },
//   {
//     upVoteCount: 222,
//     badgeLetter: "S",
//     companyName: "Starbucks",
//     text: "lorem ipsum random text",
//     daysAgo: 3
//   }
// ]

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

  console.log(feedbackItems)

  return (
    <ol className={styles["feedback-list"]}>
      {feedbackItems.map((feedbackItem) => (
        <FeedbackListItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  )
}

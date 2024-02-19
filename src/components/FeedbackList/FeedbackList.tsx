import { useEffect, useState } from "react"
import styles from "./FeedbackList.module.css"
import { type FeedbackItem, FeedbackListItem } from "./FeedbackListItem"
import { URL_COMMENTS } from "../../lib/consts"
import { Spinner } from "../Spinner/Spinner"

export const FeedbackList = () => {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(URL_COMMENTS)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setFeedbackItems(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <ol className={styles["feedback-list"]}>
      {isLoading ? <Spinner /> : null}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackListItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  )
}

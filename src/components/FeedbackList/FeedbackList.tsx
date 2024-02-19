import { useEffect, useState } from "react"
import styles from "./FeedbackList.module.css"
import { type FeedbackItem, FeedbackListItem } from "./FeedbackListItem"
import { URL_COMMENTS } from "../../lib/consts"
import { Spinner } from "../Spinner/Spinner"
import { ErrorMessage } from "../ErrorMessage/ErrorMessage"

export const FeedbackList = () => {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")

  useEffect(() => {
    setIsLoading(true)
    fetch(URL_COMMENTS)
      .then(response => {
        if (!response.ok) {
          throw new Error()
        }
        return response.json()
      })
      .then(data => {
        setFeedbackItems(data)
        setIsLoading(false)
      })
      .catch(() => {
        setErrorMessage("Something went wrong")
        setIsLoading(false)
      })
  }, [])

  return (
    <ol className={styles["feedback-list"]}>
      {isLoading && <Spinner />}
      {errorMessage ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        feedbackItems.map(feedbackItem => (
          <FeedbackListItem key={feedbackItem.id} feedbackItem={feedbackItem} />
        ))
      )}
    </ol>
  )
}

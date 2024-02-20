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
    const fetchFeedbackItems = async () => {
      setIsLoading(true)

      try {
        const response = await fetch(URL_COMMENTS)

        if (!response.ok) {
          throw new Error()
        }

        const data = await response.json()
        setFeedbackItems(data)
        setIsLoading(false)
      } catch (error) {
        setErrorMessage("Something went wrong")
      }
      setIsLoading(false)
    }
    fetchFeedbackItems()
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

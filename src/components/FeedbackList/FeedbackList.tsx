import styles from "./FeedbackList.module.css"
import { FeedbackListItem, type TFeedbackItem } from "./FeedbackListItem"
import { Spinner } from "../Spinner/Spinner"
import { ErrorMessage } from "../ErrorMessage/ErrorMessage"

type FeedbackListProps = {
  isLoading: boolean
  errorMessage: string
  feedbackItems: TFeedbackItem[]
}

export const FeedbackList = ({
  isLoading,
  errorMessage,
  feedbackItems
}: FeedbackListProps) => {
  return (
    <ol className={styles["feedback-list"]}>
      {isLoading && <Spinner />}
      {errorMessage ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        feedbackItems.map((feedbackItem: TFeedbackItem) => (
          <FeedbackListItem key={feedbackItem.id} feedbackItem={feedbackItem} />
        ))
      )}
    </ol>
  )
}

import styles from "./FeedbackList.module.css"
import { FeedbackListItem, type TFeedbackItem } from "./FeedbackListItem"
import { Spinner } from "../Spinner/Spinner"
import { ErrorMessage } from "../ErrorMessage/ErrorMessage"
import { useFeedbackItemsContext } from "../../context/FeedbackItems/utils"

export const FeedbackList = () => {
  const { isLoading, errorMessage, filteredFeedbackItems } =
    useFeedbackItemsContext()

  return (
    <ol className={styles["feedback-list"]}>
      {isLoading && <Spinner />}
      {errorMessage ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        filteredFeedbackItems.map((feedbackItem: TFeedbackItem) => (
          <FeedbackListItem key={feedbackItem.id} feedbackItem={feedbackItem} />
        ))
      )}
    </ol>
  )
}

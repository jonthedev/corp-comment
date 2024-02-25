import { useFeedbackItemsStore } from "../../store/FeedbackItemsStore"
import { ErrorMessage } from "../ErrorMessage/ErrorMessage"
import { Spinner } from "../Spinner/Spinner"
import { FeedbackListItem } from "./FeedbackListItem"
import styles from "./FeedbackList.module.css"

export default function FeedbackList() {
  const isLoading = useFeedbackItemsStore(state => state.isLoading)
  const errorMessage = useFeedbackItemsStore(state => state.errorMessage)
  const filteredFeedbackItems = useFeedbackItemsStore(state =>
    state.getFilteredFeedbackItems()
  )

  return (
    <ol className={styles["feedback-list"]}>
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {filteredFeedbackItems.map(feedbackItem => (
        <FeedbackListItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  )
}

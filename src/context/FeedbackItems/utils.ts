import { useContext } from "react"
import { FeedbackItemsContext } from "./FeedbackItemsContextProvider"

export function useFeedbackItemsContext() {
  const context = useContext(FeedbackItemsContext)

  if (!context) {
    throw new Error(
      "FeedbackItemsContext is not defined in Feedbacklist component"
    )
  }
  return context
}

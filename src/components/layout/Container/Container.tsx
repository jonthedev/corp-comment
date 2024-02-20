import { FeedbackList } from "../../FeedbackList/FeedbackList"
import { type TFeedbackItem } from "../../FeedbackList/FeedbackListItem"
import { Header } from "../Header/Header"
import styles from "./Container.module.css"

export type ContainerProps = {
  isLoading: boolean
  errorMessage: string
  feedbackItems: TFeedbackItem[]
  handleAddToList: (text: string) => void
}

export const Container = ({
  isLoading,
  errorMessage,
  feedbackItems,
  handleAddToList
}: ContainerProps) => {
  return (
    <main className={styles["container"]}>
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        isLoading={isLoading}
        errorMessage={errorMessage}
        feedbackItems={feedbackItems}
      />
    </main>
  )
}

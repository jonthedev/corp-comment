import { FeedbackList } from "../../FeedbackList/FeedbackList"
import { Header } from "../Header/Header"
import styles from "./Container.module.css"

export const Container = () => {
  return (
    <main className={styles["container"]}>
      <Header />
      <FeedbackList />
    </main>
  )
}

import { useFeedbackItemsStore } from "../../../store/FeedbackItemsStore"
import { FeedbackForm } from "../../FeedbackForm/FeedbackForm"
import { Logo } from "../../Logo/Logo"
import { PageHeading } from "../../PageHeading/PageHeading"
import { Pattern } from "../../Pattern/Pattern"
import styles from "./Header.module.css"

export const Header = () => {
  const addItemToList = useFeedbackItemsStore(state => state.addItemToList)
  return (
    <div className={styles["header"]}>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={addItemToList} />
    </div>
  )
}

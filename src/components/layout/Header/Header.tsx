import { useFeedbackItemsContext } from "../../../context/FeedbackItems/utils"
import { FeedbackForm } from "../../FeedbackForm/FeedbackForm"
import { Logo } from "../../Logo/Logo"
import { PageHeading } from "../../PageHeading/PageHeading"
import { Pattern } from "../../Pattern/Pattern"
import styles from "./Header.module.css"

export const Header = () => {
  const { handleAddToList } = useFeedbackItemsContext()

  return (
    <div className={styles["header"]}>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={handleAddToList} />
    </div>
  )
}

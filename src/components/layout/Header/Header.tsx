import { FeedbackForm } from "../../FeedbackForm/FeedbackForm"
import { Logo } from "../../Logo/Logo"
import { PageHeading } from "../../PageHeading/PageHeading"
import { Pattern } from "../../Pattern/Pattern"
import styles from "./Header.module.css"

type HeaderProps = {
  handleAddToList: (text: string) => void
}

export const Header = ({ handleAddToList }: HeaderProps) => {
  return (
    <div className={styles["header"]}>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={handleAddToList} />
    </div>
  )
}

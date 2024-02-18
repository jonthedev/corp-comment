import { Logo } from "../../Logo/Logo"
import { PageHeading } from "../../PageHeading/PageHeading"
import { Pattern } from "../../Pattern/Pattern"
import styles from "./Header.module.css"

export const Header = () => {
  return (
    <div className={styles["header"]}>
      <Pattern />
      <Logo />
      <PageHeading />
    </div>
  )
}

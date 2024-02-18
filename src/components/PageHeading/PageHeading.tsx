import styles from "./PageHeading.module.css"

export const PageHeading = () => {
  return (
    <h1 className={styles["page-heading"]}>
      Give Feedback. <span>Publicly.</span>
    </h1>
  )
}

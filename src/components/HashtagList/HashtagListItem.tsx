import styles from "./HashtagListItem.module.css"

type HashtagListItemProps = {
  company: string
  onSelectCompany: (company: string) => void
}

export const HashtagListItem = ({
  company,
  onSelectCompany
}: HashtagListItemProps) => {
  return (
    <li className={styles["hashtags__list-item"]}>
      <button onClick={() => onSelectCompany(company)}>#{company}</button>
    </li>
  )
}

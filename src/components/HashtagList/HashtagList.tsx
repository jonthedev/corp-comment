import styles from "./HashtagList.module.css"
import { HashtagListItem } from "./HashtagListItem"

type HashtagListProps = {
  companyList: string[]
  handleSelectCompany: (company: string) => void
}

export const HashtagList = ({
  companyList,
  handleSelectCompany
}: HashtagListProps) => {
  return (
    <ul className={styles["hashtags"]}>
      {companyList.map(company => (
        <HashtagListItem
          company={company}
          key={company}
          onSelectCompany={handleSelectCompany}
        />
      ))}
    </ul>
  )
}

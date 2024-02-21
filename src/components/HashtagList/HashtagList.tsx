import { useFeedbackItemsContext } from "../../context/FeedbackItems/utils"
import styles from "./HashtagList.module.css"
import { HashtagListItem } from "./HashtagListItem"

export const HashtagList = () => {
  const { companyList } = useFeedbackItemsContext()
  const { handleSelectCompany } = useFeedbackItemsContext()

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

import { useFeedbackItemsStore } from "../../store/FeedbackItemsStore"
import styles from "./HashtagList.module.css"
import { HashtagListItem } from "./HashtagListItem"

export const HashtagList = () => {
  const companyList = useFeedbackItemsStore(state => state.getCompanyList())
  const selectCompany = useFeedbackItemsStore(state => state.selectCompany)

  return (
    <ul className={styles["hashtags"]}>
      {companyList.map(company => (
        <HashtagListItem
          key={company}
          company={company}
          onSelectCompany={selectCompany}
        />
      ))}
    </ul>
  )
}

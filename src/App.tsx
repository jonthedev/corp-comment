import styles from "./App.module.css"

import { Container } from "./components/layout/Container/Container"
import { Footer } from "./components/layout/Footer/Footer"
import { HashtagList } from "./components/HashtagList/HashtagList"
import { useEffect, useMemo, useState } from "react"
import { URL_COMMENTS } from "./lib/consts"
import { type TFeedbackItem } from "./components/FeedbackList/FeedbackListItem"

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [selectedCompany, setSelectedCompany] = useState("")

  const filteredCompanies = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            feedbackItem => feedbackItem.company === selectedCompany
          )
        : feedbackItems,
    [feedbackItems, selectedCompany]
  )

  const companyList = feedbackItems
    .map(item => item.company)
    .filter((company, index, array) => {
      return array.indexOf(company) === index
    })

  useEffect(() => {
    const fetchFeedbackItems = async () => {
      setIsLoading(true)

      try {
        const response = await fetch(URL_COMMENTS)

        if (!response.ok) {
          throw new Error()
        }

        const data = await response.json()
        setFeedbackItems(data)
        setIsLoading(false)
      } catch (error) {
        setErrorMessage("Something went wrong")
      }
      setIsLoading(false)
    }
    fetchFeedbackItems()
  }, [])

  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find(word => word.includes("#"))!
      .substring(1)

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upVoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase()
    }

    setFeedbackItems([...feedbackItems, newItem])

    await fetch(URL_COMMENTS, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
  }

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company)
  }

  return (
    <div className={styles["app"]}>
      <Footer />

      <Container
        isLoading={isLoading}
        errorMessage={errorMessage}
        feedbackItems={filteredCompanies}
        handleAddToList={handleAddToList}
      />

      <HashtagList
        companyList={companyList}
        handleSelectCompany={handleSelectCompany}
      />
    </div>
  )
}

export default App

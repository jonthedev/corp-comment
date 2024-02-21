import { createContext, useEffect, useMemo, useState } from "react"
import { type TFeedbackItem } from "../../components/FeedbackList/FeedbackListItem"
import { URL_COMMENTS } from "../../lib/consts"

type FeedbackItemsContextProviderProps = {
  children: React.ReactNode
}

type TFeedbackItemsContext = {
  feedbackItems: TFeedbackItem[]
  filteredFeedbackItems: TFeedbackItem[]
  isLoading: boolean
  errorMessage: string
  companyList: string[]
  handleSelectCompany: (company: string) => void
  handleAddToList: (text: string) => void
}

export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(
  null
)

export const FeedbackItemsContextProvider = ({
  children
}: FeedbackItemsContextProviderProps) => {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [selectedCompany, setSelectedCompany] = useState("")

  const handleSelectCompany = (company: string) => {
    console.log("handleSelect", company)

    setSelectedCompany(company)
    console.log(selectedCompany)
  }

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            feedbackItem => feedbackItem.company === selectedCompany
          )
        : feedbackItems,
    [feedbackItems, selectedCompany]
  )

  const companyList = useMemo(
    () =>
      feedbackItems
        .map(item => item.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index
        }),
    [feedbackItems]
  )

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

  return (
    <FeedbackItemsContext.Provider
      value={{
        feedbackItems,
        filteredFeedbackItems,
        isLoading,
        errorMessage,
        companyList,
        handleAddToList,
        handleSelectCompany
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  )
}

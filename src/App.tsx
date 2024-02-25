import styles from "./App.module.css"
import { Container } from "./components/layout/Container/Container"
import { Footer } from "./components/layout/Footer/Footer"
import { HashtagList } from "./components/HashtagList/HashtagList"
import { useFeedbackItemsStore } from "./store/FeedbackItemsStore"
import { useEffect } from "react"

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    state => state.fetchFeedbackItems
  )

  useEffect(() => {
    fetchFeedbackItems()
  }, [fetchFeedbackItems])

  return (
    <div className={styles["app"]}>
      <Footer />
      <Container />
      <HashtagList />
    </div>
  )
}

export default App

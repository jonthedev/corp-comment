import styles from "./App.module.css"
import { Container } from "./components/layout/Container/Container"
import { Footer } from "./components/layout/Footer/Footer"
import { HashtagList } from "./components/HashtagList/HashtagList"
import { FeedbackItemsContextProvider } from "./context/FeedbackItems/FeedbackItemsContextProvider"

function App() {
  return (
    <div className={styles["app"]}>
      <Footer />

      <FeedbackItemsContextProvider>
        <Container />
        <HashtagList />
      </FeedbackItemsContextProvider>
    </div>
  )
}

export default App

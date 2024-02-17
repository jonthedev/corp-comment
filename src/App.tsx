import styles from "./App.module.css"

import { Container } from "./components/layout/Container/Container"
import { Footer } from "./components/layout/Footer/Footer"
import { HashtagList } from "./components/HashtagList/HashtagList"

function App() {
  return (
    <div className={styles["app"]}>
      <Footer />

      <Container />

      <HashtagList />
    </div>
  )
}

export default App

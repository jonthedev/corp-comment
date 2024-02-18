import styles from "./HashtagList.module.css"

export const HashtagList = () => {
  return (
    <ul className={styles["hashtags"]}>
      <li>
        <button>#JDev</button>
      </li>
      <li>
        <button>#Nike</button>
      </li>
      <li>
        <button>#Nandos</button>
      </li>
    </ul>
  )
}

import styles from "./FeedbackList.module.css"

export const FeedbackList = () => {
  return (
    <ol className={styles["feedback-list"]}>
      <li className={styles["feedback"]}>
        <button></button>
        <div>
          <p>B</p>
        </div>

        <div>
          <p>J Dev</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            excepturi odio dicta vitae nostrum vero dignissimos quidem delectus
            fugit, officia quo iste eos.
          </p>
        </div>
        <p>4D</p>
      </li>
    </ol>
  )
}

import { TriangleUpIcon } from "@radix-ui/react-icons"
import styles from "./FeedbackListItem.module.css"

export const FeedbackListItem = () => {
  return (
    <li className={styles["feedback"]}>
      <button>
        <TriangleUpIcon />
        <span>593</span>
      </button>
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
  )
}

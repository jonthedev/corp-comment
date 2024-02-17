import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>
        <p>
          &copy; Copyright by{" "}
          <a target="_blank" href="https://j-dev.online">
            J-dev.online
          </a>{" "}
        </p>
      </small>
    </footer>
  )
}

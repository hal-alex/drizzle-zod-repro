"use client"

import styles from "./page.module.css"
import { addBlogPost } from "./actions"

export default function Home() {
  return (
    <div className={styles.page}>
      <button onClick={addBlogPost}>Click me</button>
    </div>
  )
}

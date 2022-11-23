import Link from "next/link"

import styles from "./Home.module.css"

export default function HomePage() {
  return (
    <>
      <section>
        <p>HI THERE!</p>
        <h1>I´M SEBASTIAN</h1>
        <p>SOFTWARE ENGINEER</p>
        <p>
          Este es mi portafolio, en el encontraras un poco sobre mi y sobre mi
          carrera como ingeniero en software.
        </p>
        <Link href="/about" className={styles.link}>
          MORE ABOUT ME
        </Link>
      </section>
      <picture></picture>
    </>
  )
}

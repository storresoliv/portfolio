import Link from "next/link"
import Image from "next/image"

import profilePic from '../public/img/me.jpeg'
import styles from "./Home.module.css"

export default function HomePage() {
  return (
    <section className={styles.content}>
      <section className={styles.card}>
        <p className={styles.greeting}>HI THERE!</p>
        <h1 className={styles.title}>I´M SEBASTIAN</h1>
        <p className={styles.subtitle}>SOFTWARE ENGINEER</p>
        <p className={styles.description}>
          In this project you will know about me and my career as a software engineer.
        </p>
        <Link href="/about" className={styles.link}>
          MORE ABOUT ME
        </Link>
      </section>
      <picture className={styles.picture}>
        <Image src={profilePic} alt="Picture of the author" />
      </picture>
    </section>
  )
}

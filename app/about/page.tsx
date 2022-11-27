import styles from "./About.module.css"

export default function AboutPage() {
  return (
    <section className={styles.content}>
      <h1 className={styles.title}>ABOUT ME</h1>
      <p className={styles.subtitle}>
        I'm <strong>Sebastian Torres Olivares</strong>, Software Engineer
      </p>
      <p className={styles.text}>
        Serio profesional con gran preocupación por la eficacia y seguridad,
        enfocado en la resolución de problemas, atención a los detalles, buena
        gestión del tiempo y acostumbrado a trabajar en equipo. Con más de 6
        años de experiencia en el desarrollo de productos tecnológicos bajo los
        más altos estándares de calidad, trabajando principalmente con
        Javascript y metodologías ágiles.
      </p>
      <section className={styles.career}>
        <section className={styles.road}>
          <p className={styles.roadText}>
            <strong>6+</strong>YEARS EXPERIENCE
          </p>
          <p className={styles.roadText}>
            <strong>100+</strong>PROJECTS DONE
          </p>
          <p className={styles.roadText}>
            <strong>20+</strong>HAPPY CLIENTS
          </p>
          <p className={styles.roadText}>
            <strong>45K</strong>FOLLOWERS
          </p>
        </section>
        <section className={styles.more}>
            <p>What I do?</p>
            <p>Frontend Develop</p>
            <p>about frontend develop</p>
            <p>frontend lead</p>
            <p>about frontend lead</p>
            <p>IA route map</p>
            <p>about IA</p>
        </section>
      </section>
    </section>
  )
}

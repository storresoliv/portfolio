"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import styles from "./Header.module.css"

const links = [
  {
    label: "Home",
    icon: "home",
    route: "/",
  },
  {
    label: "About me",
    icon: "person",
    route: "/about",
  },
]

export function Header() {
  const pathname = usePathname()
  const [routeActive, setRouteActive] = useState(pathname)

  useEffect(() => {
    if (pathname) {
      setRouteActive(pathname)
    }
  })

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          {links.map(({ icon, route }) => (
            <li
              className={
                routeActive === route ? styles.menuItemActive : styles.menuItem
              }
              key={route}
            >
              <Link href={route} passHref legacyBehavior>
                <a
                  className="material-icons"
                  onClick={() => {
                    setRouteActive(route)
                  }}
                >
                  {icon}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    if (router.asPath !== router.route) {
      window.scrollTo(0, 0)
    }
  }, [])

  return null
}

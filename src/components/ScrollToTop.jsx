import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Resets window scroll to the top on every route change.
 * Renders nothing — purely a side-effect component.
 * Must be placed inside <BrowserRouter> so useLocation() works.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

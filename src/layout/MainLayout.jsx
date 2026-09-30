import { Suspense } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'
import Seo from '../components/Seo'

// Renders `children` when given (used by the error page), otherwise the matched route.
// Keying the page by path replays the fade-in on every navigation.
const MainLayout = ({children}) => {
  const { pathname } = useLocation()
  useScrollReveal()

  return (
    <>
    <Seo />
    <Navbar />
    <main>
      <Suspense fallback={<div className="page-loader" />}>
        <div className="page" key={pathname}>
          {children ?? <Outlet />}
        </div>
      </Suspense>
    </main>
    <Footer />
    <ScrollRestoration />
    </>
  )
}

export default MainLayout

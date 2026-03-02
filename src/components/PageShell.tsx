import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="page-enter">{children}</main>
      <Footer />
    </>
  )
}

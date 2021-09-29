import Alert from "../components/alert"
import Footer from "../components/footer"
import Meta from "../components/meta"
import Menu from "../components/menu"

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen max-w-full overflow-hidden">
        <Menu />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

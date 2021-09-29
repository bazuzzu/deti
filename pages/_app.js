import "../styles/index.css"
import "../styles/slick.min.css"
import { ToastProvider } from "react-toast-notifications"

export default function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  )
}

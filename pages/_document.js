import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Bellota+Text:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="/assets/css/jquery-ui.css"
            rel="stylesheet"
          />		
		<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
		<script src="/assets/js/script.js"></script>
		<script src="/assets/js/jquery-ui.min.js"></script>
		<script src="/assets/js/jquery.ui.touch-punch.min.js"></script>
        </Head>
        <body className="bg-gray-100 font-fancy font-light text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
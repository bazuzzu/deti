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
		  <link
            href="/assets/css/swipeslider.css"
            rel="stylesheet"
          />	
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;0,600;1,700&display=swap" rel="stylesheet" />
		<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
		<script src="/assets/js/script.js"></script>
		<script src="/assets/js/jquery-ui.min.js"></script>
		<script src="/assets/js/jquery.ui.touch-punch.min.js"></script>
		<script src="/assets/js/swipeslider.js"></script>
		<script src="/assets/js/jspdf.umd.min.js"></script>
		<script src="/assets/js/html2canvas.min.js"></script>
		<script src="/assets/fonts/PoiretOne-Regular-normal.js"></script>		
		<script src="https://unpkg.com/cupertino-pane/dist/cupertino-pane.min.js"></script>
		
        </Head>
        <body className="bg-gray-100 darkmode font-fancy font-light text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

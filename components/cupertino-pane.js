import React from "react"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"
import { CupertinoPane } from "cupertino-pane"

class _CupertinoPane extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }
  componentDidMount() {
    let settings = {
      parentElement: "body",
      breaks: {
        top: { enabled: true, height: 3000, bounce: true },
        middle: { enabled: false, height: 400, bounce: true },
        bottom: { enabled: true, height: 100 },
      },
      initialBreak: 'top',
	  bottomClose: true,
	  fastSwipeClose: true,
	  simulateTouch: false,
	  topperOverflow: true,	
      //onDidPresent: _ =>
        //disableBodyScroll(document.querySelector(".cupertino-pane .container")),
      onWillDismiss: _ => {
        this.props.onCloseClick && this.props.onCloseClick()
        clearAllBodyScrollLocks()
        //enableBodyScroll(this.ref.current)
        false
      },
      ...this.props.settings,
    }
    if (this.ref) {
      let myPane = new CupertinoPane(this.ref.current, settings)

      myPane.present({ animate: true })
      this.pane = myPane
    }
  }
  componentWillUnmount() {
    this.pane && this.pane.destroy()
    clearAllBodyScrollLocks()
  }
  render() {
    return (
      <div>
        <div ref={this.ref} className="cupertino-pane">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default _CupertinoPane

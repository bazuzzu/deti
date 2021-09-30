import classnames from "classnames"

const Logo = ({ className, dark }) => (
  <div className={classnames("logo", className)}>
    <div className="font-fancy text-3xl relative inline-block blacklogo">
    </div>
  </div>
)

export default Logo

import classnames from "classnames"

export const Link = ({ children, className, ...rest }) => (
  <a
    className={classnames(
      "font-sans font-bold hover:text-yellow-500",
      className
    )}
    {...rest}
  >
    {children}
  </a>
)

export const Row = ({ children }) => (
  <div className="flex flex-col md:flex-row font-light text-xl lg:text-2xl justify-center mb-8">
    {children}
  </div>
)
export const ColLeft = ({ children, background }) => (
  <div
    style={{
      background: `center / cover no-repeat url(${background})`,
      minHeight: "30rem",
    }}
    className="font-light font-fancy md:text-right align-top md:mr-10 lg:mr-20 text-gray-600 mb-2 md:w-5/12 fadein-left relative"
  >
    {children}
  </div>
)
export const ColRight = ({ children }) => (
  <div className="font-light font-fancy mr-2 align-top md:pr-4 md:w-7/12 fadein">
    {children}
  </div>
)

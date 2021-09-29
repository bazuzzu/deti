import classnames from "classnames"

export default function Container({ children, id, className }) {
  return (
    <div className={classnames("container mx-auto px-5", className)} id={id}>
      {children}
    </div>
  )
}

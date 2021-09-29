const Button = ({ children, className, ...props }) => (
  <a
    className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-150 transition-colors mb-6 lg:mb-0"
    {...props}
  >
    {children}
  </a>
)
export default Button

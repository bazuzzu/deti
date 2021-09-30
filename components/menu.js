import Logo from "./logo"
import { RiFacebookCircleLine, RiInstagramLine } from "react-icons/ri"
import VkIcon from "../components/vk-icon"
import Button from "./button"
import classnames from "classnames"

const Link = ({ children, className, ...rest }) => (
  <a
    className={classnames(
      "mr-3 text-4xl block text-white pb-0 pr-6 pl-0 transition-all duration-200 mb-2 font-sans font-light text-left menu-link",
      className
    )}
    {...rest}
  >
    {children}
  </a>
)

const Menu = props => (
  <>
    <input type="checkbox" id="menu-input" className="hidden" />
    <label htmlFor="menu-input" className="menu-button cursor-pointer">
      <div className="burger-bar bg-black"></div>
      <div className="burger-bar bg-black"></div>
      <div className="burger-bar bg-black"></div>
    </label>
    <div className="menu sm:mx-12 flex text-white">
      <div className="flex flex-col align-center text-center">
        <a href="/">
          <Logo className="mb-8 text-center transform scale-125 sm:scale-150" />
        </a>
        <div className="mb-8 w-full mainmenu">
          <Link href="#">Услуги</Link>
          <Link href="#">О нас</Link>
          <Link href="/contact">Контакты</Link>
        </div>
        <div>
          <p className="text-sm font-light mb-6 text-center">
            Телефон для справок:
          </p>
          <p className="text-xs">
            <a
              className="text-white hover:bg-white hover:text-black border border-white font-bold py-3 px-4 sm:px-8 duration-150 transition-colors mb-6 lg:mb-0"
              href="tel:+79096904433"
            >
              +7 (909) 690-44-33
            </a>
          </p>
        </div>
        <div className="flex items-center justify-between w-4/5 mx-auto mt-12">
          <a
            href="https://www.facebook.com/detikino2016/?hc_ref=NEWSFEED"
            target="_blank"
            className="menu-social"
          >
            <RiFacebookCircleLine className="h-10 w-10 p-1" />
          </a>
          <a
            href="https://www.instagram.com/detikino/"
            target="_blank"
            className="menu-social"
          >
            <RiInstagramLine className="h-10 w-10 p-1" />
          </a>
          <a
            href="https://vk.com/detikino2016"
            target="_blank"
            className="menu-social"
          >
            <img src="/assets/vk_white.svg" className="h-10 p-1" />
          </a>
        </div>
      </div>
    </div>
  </>
)

export default Menu

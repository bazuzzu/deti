import Container from "./container"
import { RiFacebookCircleLine, RiInstagramLine } from "react-icons/ri"
import VkIcon from "../components/vk-icon"
import Logo from "./logo"
import { EXAMPLE_PATH } from "../lib/constants"

export default function Footer() {
  return (
    <footer className="bg-gray-100 darkmode">
      <Container>
        <div className="py-28 flex flex-col sm:flex-row items-center justify-between footlogo">
          <a href="/">
            <Logo dark />
          </a>
          <div className="px-12 pt-16 sm:pt-0">
            <h2 className="hidden title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              НАВИГАЦИЯ
            </h2>
            <nav className="list-none">
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="/services"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="/about">
                  О нас
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="/contact"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-yellow-800"
                  href="tel:+79096904433"
                >
                  +7 909 690 44 33
                </a>
              </li>
              <li>
                <div className="flex items-center justify-between w-4/5 mr-auto mt-3">
                  <a
                    href="https://www.facebook.com/detikino2016/?hc_ref=NEWSFEED"
                    target="_blank"
                    className="menu-social"
                  >
                    <RiFacebookCircleLine className="h-7 w-7 p-1" />
                  </a>
                  <a
                    href="https://www.instagram.com/detikino/"
                    target="_blank"
                    className="menu-social"
                  >
                    <RiInstagramLine className="h-7 w-7 p-1" />
                  </a>
                  <a
                    href="https://vk.com/detikino2016"
                    target="_blank"
                    className="menu-social vk-link"
                  >
                    <VkIcon className="h-7 p-1" />
                  </a>
                </div>
              </li>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  )
}

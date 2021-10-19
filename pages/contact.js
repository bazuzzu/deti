import Container from "../components/container"
import MoreStories from "../components/more-stories"
import HeroPost from "../components/hero-post"
import Intro from "../components/intro"
import Timetable from "../components/timetable"
import Layout from "../components/layout"
import Logo from "../components/logo"
import Head from "next/head"
import { RiFacebookCircleLine, RiInstagramLine } from "react-icons/ri"
import VkIcon from "../components/vk-icon"
import classnames from "classnames"

const Row = ({ children }) => (
  <div className="flex flex-col md:flex-row font-light  justify-center mb-8">
    {children}
  </div>
)
const ColLeft = ({ children }) => (
  <div className="font-light font-fancy md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-5/12 fadein-left">
    {children}
  </div>
)
const ColRight = ({ children }) => (
  <div className="font-light font-fancy mr-2 align-top md:pr-4 md:w-7/12 fadein">
    {children}
  </div>
)

const Link = ({ children, className, ...rest }) => (
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

const Contact = props => (
  <Layout>
    <Head>
      <title>Контакты</title>
    </Head>
    <Container>
      <h2 className="text-3xl font-fancy pt-3 pr-12">Контакты</h2>
      <div className="text-xl lg:text-2xl flex flex-col md:flex-row">
        <div>
          <h1 className="md:mt-8 mb-8 md:mb-12 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-heavy font-sans tracking-tighter leading-tight">
            Связаться с нами.
          </h1>
        </div>
      </div>
      <Row>
        <ColLeft>Телефон</ColLeft>
        <ColRight>
          <p>
            <Link href="tel:+79096904433">+7 (909) 690-44-33</Link>
          </p>
        </ColRight>
      </Row>
      <Row>
        <ColLeft>Электронная почта</ColLeft>
        <ColRight>
          <p className="mb-8">
            По всем вопросам:{" "}
            <Link href="mailto:info@detikino.ru">info@detikino.ru</Link>
          </p>
          <p>
            По вопросам приглашения актеров:{" "}
            <Link href="mailto:casting@detikino.ru">casting@detikino.ru</Link>
          </p>
        </ColRight>
      </Row>

      <Row>
        <ColLeft>Социальные сети</ColLeft>
        <ColRight>
          <p>
            <Link
              href="https://www.facebook.com/detikino2016/?hc_ref=NEWSFEED"
              target="_blank"
            >
              <RiFacebookCircleLine className="inline h-6" />
              &nbsp;/detikino2016
            </Link>
          </p>
          <p>
            <Link
              href="https://vk.com/detikino2016"
              target="_blank"
              className="vk-link"
            >
              <VkIcon className="inline h-4" />
              &nbsp;/detikino2016
            </Link>
          </p>

          <p>
            <Link href="https://www.instagram.com/detikino/" target="_blank">
              <RiInstagramLine className="inline h-6" />
              &nbsp;/detikino
            </Link>
          </p>
        </ColRight>
      </Row>
      <Row>
        <ColLeft>Адрес</ColLeft>
        <ColRight>
          <p className="mb-12">
            <Link
              href="https://www.google.com/maps/place/55%C2%B043'22.8%22N+37%C2%B040'45.8%22E/@55.7230064,37.6771889,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d55.7230064!4d37.6793776"
              target="_blank"
            >
              Москва, ул. Новоостаповская д.5 стр.3 Киностудия Амедиа, 2 этаж,
              10-11 павильоны, А2-11
            </Link>
          </p>
        </ColRight>
      </Row>
    </Container>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.012163488421!2d37.67689271629066!3d55.72354078054555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54ad44e086543%3A0x873e3723068e0e85!2z0JrQuNC90L7RgdGC0YPQtNC40Y8g0JDQnNCV0JTQmNCQ!5e0!3m2!1sen!2sru!4v1612104563609!5m2!1sen!2sru"
      frameborder="0"
      style={{ border: 0, height: "70vh" }}
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
      className="w-full"
    ></iframe>
  </Layout>
)

export default Contact


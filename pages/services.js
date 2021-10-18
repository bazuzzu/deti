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
      <title>Услуги</title>
    </Head>
    <Container>
      <h2 className="text-3xl font-fancy pt-3 pr-12">Услуги актёрам</h2>
      <div className="text-xl lg:text-2xl flex flex-col md:flex-row">
        <div>
          <h1 className="md:mt-8 mb-8 md:mb-12 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-heavy font-sans tracking-tighter leading-tight">
           Профессиональное портфолио
          </h1>
        </div>
      </div>
      <Row>
      Создание профессионального набора медиафайлов, включающего в себя 5 обработанных актёрских портретов и визитку, специально разработанных с учётом рекомендаций ведущих российских и зарубежных кастинг-директоров. Съёмка проводится в нашей фотовидеостудии с двух камер в дружелюбной, максимально раскрепощающей актёра атмосфере. Вы получаете не только готовые материалы, но и все исходники (не менее двухсот фотографий).
      </Row>
      <Row>
      Стоимость полного портфолио (фотографии и видеовизитка):
        <ColLeft>для учеников Школы-студии «DЕТИКИНО» </ColLeft>
        <ColRight>
          <p>
          6000₽
          </p>
        </ColRight>
        <ColLeft>для актёров, не являющихся учениками Школы  </ColLeft>
        <ColRight>
          <p>
          8000₽
          </p>
        </ColRight>
      Только фотографии:
      <ColLeft>для учеников Школы-студии «DЕТИКИНО» </ColLeft>
        <ColRight>
          <p>
          4000₽
          </p>
        </ColRight>
        <ColLeft>для актёров, не являющихся учениками Школы  </ColLeft>
        <ColRight>
          <p>
          5000₽
          </p>
        </ColRight>
      Только видеовизитка:
      <ColLeft>для учеников Школы-студии «DЕТИКИНО» </ColLeft>
        <ColRight>
          <p>
          4000₽
          </p>
        </ColRight>
        <ColLeft>для актёров, не являющихся учениками Школы  </ColLeft>
        <ColRight>
          <p>
          6000₽
          </p>
        </ColRight>
        Продолжительность съёмки — 1 час.

      </Row>
      <h1 className="md:mt-8 mb-8 md:mb-12 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-heavy font-sans tracking-tighter leading-tight">
        Самопробы
      </h1>

      <Row>
          Съёмка видеопроб (самопроб) на профессиональную камеру в студии. Вы получаете запись трёх дублей.

        С преподавателем и оператором:
        <ColLeft>для учеников Школы-студии «DЕТИКИНО» </ColLeft>
        <ColRight>
          <p>
          2500₽
          </p>
        </ColRight>
        <ColLeft>для актёров, не являющихся учениками Школы  </ColLeft>
        <ColRight>
          <p>
          3000₽
          </p>
        </ColRight> 
        Только с оператором:
        <ColLeft>для учеников Школы-студии «DЕТИКИНО» </ColLeft>
        <ColRight>
          <p>
          1000₽
          </p>
        </ColRight>
        <ColLeft>для актёров, не являющихся учениками Школы  </ColLeft>
        <ColRight>
          <p>
          1500₽
          </p>
        </ColRight>
        Продолжительность съёмки — 1 час.

        Записаться на съёмку можно по телефону     +7 926 462 63 85.
        Для записи пробы с преподавателем       —     +7 966 000 899 7.
      </Row>
      <h1 className="md:mt-8 mb-8 md:mb-12 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-heavy font-sans tracking-tighter leading-tight">
        Услуги киностудиям
      </h1>
      <Row>
      </Row>
      <Row>
      </Row>
    </Container>
  </Layout>
)

export default Contact


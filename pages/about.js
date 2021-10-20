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
  <div className="flex flex-col md:flex-row font-light mb-8 md:mb-16">
    {children}
  </div>
)
const ColLeft = ({ children, background }) => (
  <div
    style={{
      background: `center / cover no-repeat url(${background})`,
    }}
    className="font-light font-fancy md:text-left align-top lg:m-8 md:mr-10 lg:mr-20 text-gray-600 mb-2 md:w-5/12 fadein-left relative"
  >
    {children}
  </div>
)
const ColRight = ({ children }) => (
  <div className="aboutus font-light font-fancy my-12 mr-2 align-top md:pr-4 md:w-7/12 fadein">
    {children}
  </div>
)

const Link = ({ children, className, ...rest }) => (
  <a
    className={classnames(
      "font-sans display-block font-bold hover:text-yellow-500",
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
      <title>О нас</title>
    </Head>
    <Container>
    <div className="about"> 
    <h2 className="text-3xl font-fancy pt-3 pr-12">О нас</h2>
    <br/><br/><br/><br/>
      <Row>
       <ColLeft> 
      <div className="mb-8">
      <p>Отдел кастинга <a className="yellow" href="http://detikino.ru"><strong>Школы-студии «DЕТИКИНО»</strong></a> занимается поиском возможностей для реализации учениками Школы полученных в ней знаний и навыков на профессиональных съёмочных площадках в России и за рубежом, представляет интересы воспитанников Школы перед киностудиями, согласовывает договор и оформляет документы актёра в случае утверждения на роль, «ведёт» их на протяжении съёмочного процесса и действия договора.</p>
      </div>
      </ColLeft>
      <ColRight>
        <a href="http://detikino.ru" target="_blank"><img src="/assets/detikino_logo_word_white-school_custom.png" /></a>
      </ColRight>
      </Row>
    </div>  
    </Container>
  </Layout>
)

export default Contact


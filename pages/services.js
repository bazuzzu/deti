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
  <div className="flex flex-col md:flex-row font-light justify-center">
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
      <title>Услуги</title>
    </Head>
    <Container>
    <div className="services"> 
    <h2 className="text-3xl font-fancy pt-3 pr-12">Услуги</h2>
          <h3 className="md:mt-8 mb-8 md:mb-12 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-heavy font-sans tracking-tighter leading-tight">
          Актёрам.
          </h3>
      <h2 className="text-3xl font-fancy pt-3 pr-12">Профессиональное портфолио.</h2>
      <br/>
      <Row>
      <div className="mb-8">
       <p>Создание профессионального набора медиафайлов, включающего в себя 5 обработанных актёрских портретов и визитку, специально разработанных с учётом рекомендаций ведущих российских и зарубежных кастинг-директоров.</p>
      <p>Съёмка проводится в нашей фотовидеостудии с двух камер в дружелюбной, максимально раскрепощающей актёра атмосфере.</p>
      <p>Вы получаете не только готовые материалы, но и все исходники (не менее двухсот фотографий).</p>
      <p>Продолжительность съёмки — 1 час.</p>
      </div>
      </Row>
      <Row>        
        <ColLeft>Портфолио фотографии + видовизитка</ColLeft>
        <ColRight>
          <p>
          <strong>8000</strong><span className="rub">₽</span>  |  <a href="#school" className="yellow"><strong>6000</strong><span className="rub">₽</span></a>
          </p>
        </ColRight>
      </Row>
      <Row>
      <ColLeft>Только фотографии</ColLeft>
        <ColRight>
          <p>
          <strong>5000</strong><span className="rub">₽</span>  |  <a href="#school" className="yellow"><strong>4000</strong><span className="rub">₽</span></a>
          </p>
        </ColRight>
        </Row>
      <Row>      
      <ColLeft>Только видеовизитка</ColLeft>
        <ColRight>
          <p>
          <strong>6000</strong><span className="rub">₽</span>  |  <a href="#school" className="yellow"><strong>4000</strong><span className="rub">₽</span></a>
          </p>
        </ColRight>
        </Row>
      <h2 className="text-3xl font-fancy pt-3 pr-12">
        Самопробы
      </h2>
      <br/>

          <p>Съёмка видеопроб (самопроб) на профессиональную камеру в студии.</p>
          <p>Вы получаете запись трёх дублей.</p>
          <p>Продолжительность съёмки — 1 час.</p>
          <br/>
            
      <Row>        
        <ColLeft>С преподавателем и оператором</ColLeft>
        <ColRight>
          <p>
          <strong>3000</strong><span className="rub">₽</span>  |  <a href="#school" className="yellow"><strong>2500</strong><span className="rub">₽</span></a>
          </p>
        </ColRight>
        </Row>
        <br/>
        <p>Записаться на съёмку можно по телефону &nbsp;&nbsp;&nbsp;&nbsp;<Link href="tel:+79264626385">+7 926 462 63 85.</Link></p>
        <p>Для записи пробы с преподавателем &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link href="tel:+79660008997">+7 966 000 899 7.</Link></p>
        <a href="http://detikino.ru" target="_blank"><p className="yellow nomar" id="school"><strong>*для учеников Школы-студии «DЕТИКИНО»</strong></p></a>
        <br/><br/>
      <h1 className="md:mt-8 mb-8 md:mb-12 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-heavy font-sans tracking-tighter leading-tight">
      Киностудиям.
      </h1>
      <h2 className="text-3xl font-fancy pt-3 pr-12">Проведение проб</h2>
      <br/>
      <p>Мы можем взять на себя организацию проб к вашему фильму, подготовить списки и пригласить актёров.</p>
      <p>А также предоставить для проведения проб нашу фотостудию.</p>
      <br/>
  
      <h2 className="text-3xl font-fancy pt-3 pr-12">
      Специалист по работе с детьми на площадке
      </h2>
       <br/> 
      Мы готовы предоставить одного из наших преподавателей в качестве актёрского коуча для подготовки детей к съёмке, разбора и разучивания с ними сцены, настройки на неё.
      <br/>
      Стоимость услуг кинокомпаниям оговаривается с учётом требуемых ресурсов и объёмов по телефону     <Link href="tel:+79660008997">+7 966 000 899 7.</Link>
    </div>
    </Container>
  </Layout>
)

export default Contact


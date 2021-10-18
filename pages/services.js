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
  <div className="flex flex-col md:flex-row font-light  mb-8">
    {children}
  </div>
)
const ColLeft = ({ children }) => (
  <div className="font-light font-fancy align-top md:pr-20 text-gray-600 mb-2 md:w-4/12 fadein-left">
    {children}
  </div>
)
const ColRight = ({ children }) => (
  <div className="font-light font-fancy mr-2 align-top md:pr-4 md:w-8/12 fadein">
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
          <h3 className="md:mt-8 mb-8 md:mb-12 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-heavy font-sans tracking-tighter leading-tight">
          Услуги актёрам
          </h3>
      <h2 className="text-3xl font-fancy pt-3 pr-12">Профессиональное портфолио</h2>
<br/>
      <Row>
      Создание профессионального набора медиафайлов, включающего в себя 5 обработанных актёрских портретов и визитку, специально разработанных с учётом рекомендаций ведущих российских и зарубежных кастинг-директоров. Съёмка проводится в нашей фотовидеостудии с двух камер в дружелюбной, максимально раскрепощающей актёра атмосфере. Вы получаете не только готовые материалы, но и все исходники (не менее двухсот фотографий).
      </Row>
      <Row>
      Стоимость полного портфолио (фотографии и видеовизитка):
      </Row>
      <Row>        
        <ColLeft>для учеников Школы-студии «DЕТИКИНО» </ColLeft>
        <ColRight>
          <p>
          6000<span className="rub">₽</span>
          </p>
        </ColRight>
      </Row>
      <Row>        
        <ColLeft>для актёров, не являющихся учениками Школы  </ColLeft>
        <ColRight>
          <p>
          8000<span className="rub">₽</span>
          </p>
        </ColRight>
      </Row>
      <Row>        
      Только фотографии:
      </Row>  
      <Row>
      <ColLeft>для учеников Школы-студии «DЕТИКИНО» </ColLeft>
        <ColRight>
          <p>
          4000<span className="rub">₽</span>
          </p>
        </ColRight>
        </Row>
      <Row>        
        <ColLeft>для актёров, не являющихся учениками Школы  </ColLeft>
        <ColRight>
          <p>
          5000<span className="rub">₽</span>
          </p>
        </ColRight>
        </Row>
      <Row>        
      Только видеовизитка:
      </Row>  
      <Row>      
      <ColLeft>для учеников Школы-студии «DЕТИКИНО» </ColLeft>
        <ColRight>
          <p>
          4000<span className="rub">₽</span>
          </p>
        </ColRight>
        </Row>
      <Row>        
        <ColLeft>для актёров, не являющихся учениками Школы  </ColLeft>
        <ColRight>
          <p>
          6000<span className="rub">₽</span>
          </p>
        </ColRight>
        </Row>
      <Row>        
        Продолжительность съёмки — 1 час.

      </Row>
      <h2 className="text-3xl font-fancy pt-3 pr-12">
        Самопробы
      </h2>
      <br/>

          Съёмка видеопроб (самопроб) на профессиональную камеру в студии. Вы получаете запись трёх дублей.
          <br/><br/>
       <Row>   
        С преподавателем и оператором:
        </Row>
      <Row>        
        <ColLeft>для учеников Школы-студии «DЕТИКИНО» </ColLeft>
        <ColRight>
          <p>
          2500<span className="rub">₽</span>
          </p>
        </ColRight>
        </Row>
      <Row>        
        <ColLeft>для актёров, не являющихся учениками Школы  </ColLeft>
        <ColRight>
          <p>
          3000<span className="rub">₽</span>
          </p>
        </ColRight>
        </Row>
      <Row>         
        Только с оператором:
        </Row>
      <Row>        
        <ColLeft>для учеников Школы-студии «DЕТИКИНО» </ColLeft>
        <ColRight>
          <p>
          1000<span className="rub">₽</span>
          </p>
        </ColRight>
        </Row>
      <Row>        
        <ColLeft>для актёров, не являющихся учениками Школы  </ColLeft>
        <ColRight>
          <p>
          1500<span className="rub">₽</span>
          </p>
        </ColRight>
        </Row>
      <Row>
        Продолжительность съёмки — 1 час.
        </Row>
        Записаться на съёмку можно по телефону     +7 926 462 63 85.
        Для записи пробы с преподавателем       —     +7 966 000 899 7.
      <h1 className="md:mt-8 mb-8 md:mb-12 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-heavy font-sans tracking-tighter leading-tight">
      Услуги киностудиям
      </h1>
      <h2 className="text-3xl font-fancy pt-3 pr-12">Проведение проб</h2>
      <br/>
      Мы можем взять на себя организацию проб к вашему фильму, подготовить списки и пригласить актёров. А также предоставить для проведения проб нашу фотостудию.
      <br/><br/><br/>
  
      <h2 className="text-3xl font-fancy pt-3 pr-12">
      Специалист по работе с детьми на площадке
      </h2>
       <br/> 
      Мы готовы предоставить одного из наших преподавателей в качестве актёрского коуча для подготовки детей к съёмке, разбора и разучивания с ними сцены, настройки на неё.
      <br/><br/>
      Стоимость услуг кинокомпаниям оговаривается с учётом требуемых ресурсов и объёмов по телефону     +7 966 000 899 7.
    </Container>
  </Layout>
)

export default Contact


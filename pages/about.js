import { IoPeopleOutline } from "react-icons/io5"
import Container from "../components/container"
import MoreStories from "../components/more-stories"
import HeroPost from "../components/hero-post"
import Intro from "../components/intro"
import Timetable from "../components/timetable"
import Layout from "../components/layout"
import Logo from "../components/logo"
import Head from "next/head"
import VkIcon from "../components/vk-icon"
import { RiFacebookCircleLine, RiInstagramLine } from "react-icons/ri"
import classnames from "classnames"

const Row = ({ children }) => (
  <div className="flex flex-col md:flex-row font-light justify-center mb-8 md:mb-16">
    {children}
  </div>
)
const ColLeft = ({ children, background }) => (
  <div
    style={{
      background: `center / cover no-repeat url(${background})`,
      minHeight: "40rem",
    }}
    className="font-light font-fancy md:text-right align-top lg:m-8 md:mr-10 lg:mr-20 text-gray-600 mb-2 md:w-5/12 fadein-left relative"
  >
    {children}
  </div>
)
const ColRight = ({ children }) => (
  <div className="font-light font-fancy my-12 mr-2 align-top md:pr-4 md:w-7/12 fadein">
    {children}
  </div>
)

const Name = ({ children, ...rest }) => (
  <h2 className="font-bold font-sans text-4xl mb-0 pt-2" {...rest}>
    {children}
  </h2>
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

const TimetableBlock = ({ children, className, ...rest }) => (
  <div
    className={classnames(
      "absolute bottom-0 py-4 pr-8 pl-3 md:pl-8 text-black background-primary mb-5 text-base -right-8 w-full sm:w-auto text-right timetable-block",
      className
    )}
    {...rest}
  >
    {children}
  </div>
)

const About = props => (
  <Layout>
    <Head>
      <title>Команда</title>
    </Head>
    <Container>
      <h2 className="text-3xl font-fancy pt-3 pr-12">Команда</h2>
      <div className="text-xl lg:text-2xl flex flex-col md:flex-row">
        <div>
          <h1 className="md:mt-8 mb-8 md:mb-12 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-heavy font-sans tracking-tighter leading-tight">
            Администрация.
          </h1>
        </div>
      </div>
      <Row>
        <ColLeft background="/assets/about/safronov_hramtsova.png"></ColLeft>
        <ColRight>
          <Name>Михаил Сафронов и Дарья Храмцова</Name>
          <p className="text-xl text-gray-500 mb-5">
            Основатели школы-студии "Dетикино".
          </p>
        </ColRight>
      </Row>
      <Row>
        <ColLeft background="/assets/about/irina_hramtsova.jpg"></ColLeft>
        <ColRight>
          <Name>Ирина Храмцова</Name>
          <p className="text-xl text-gray-500 mb-5">
            Директор школы-студии "Dетикино".
          </p>
          <p>
            Ирина окончила МГТУ "МАМИ" экономический факультет (маркетолог).
          </p>
        </ColRight>
      </Row>
      <Row>
        <ColLeft background="/assets/about/nikitina.png"></ColLeft>
        <ColRight>
          <Name>Валентина Никитина</Name>
          <p className="text-xl text-gray-500 mb-5">
            Кастинг-директор школы-студии "Dетикино".
          </p>
          <p>
            Валентина окончила Французский Университет при МГУ им. М. В.
            Ломоносова (международное право) и ЧГУ факультет журналистики
            (телевидение).
          </p>
        </ColRight>
      </Row>

      <div className="text-xl lg:text-2xl flex flex-col md:flex-row">
        <div>
          <h1 className="md:mt-8 mb-8 md:mb-12 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-heavy font-sans tracking-tighter leading-tight">
            Педагоги.
          </h1>
        </div>
      </div>
      <Row>
        <ColLeft background="/assets/about/serina.jpg">
          <TimetableBlock>
            <p>
              <Link href="/timetable#saturday">
                сб 15:30 — 19:30{" "}
                <IoPeopleOutline className="inline-block mb-1" /> 13 - 17 лет
              </Link>
            </p>
            <p>
              <Link href="/timetable#sunday">
                вс 12:00 — 15:00{" "}
                <IoPeopleOutline className="inline-block mb-1" /> 7 - 8 лет
              </Link>
            </p>
            <p>
              <Link href="/timetable#sunday">
                15:30 — 19:30 <IoPeopleOutline className="inline-block mb-1" />{" "}
                9 - 12 лет
              </Link>
            </p>
          </TimetableBlock>
        </ColLeft>
        <ColRight>
          <Name id="serina">Юлия Серина</Name>
          <p className="text-xl text-gray-500 mb-5">
            Актриса театра и кино, психолог, педагог
          </p>
          <p className="mb-5">
            Один из самых востребованных, ярких педагогов в Москве. Большой опыт
            работы с детьми всех возрастов. Популярная и востребованная актриса
            в кино и сериалах. Окончила ТИ им. Щукина маст. Н.И. Дворжецкой.
            Актриса Московского Государственного театра Киноактера.
          </p>
          <p>Выбранная фильмография:</p>
          <ul className="mb-3">
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Вратарь Галактики (2020)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/1198735/"
                target="_blank"
              >
                Нефутбол (2020)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/1115552/"
                target="_blank"
              >
                Семь ужинов (2019)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/1112462/"
                target="_blank"
              >
                Лили (2018)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/1100380/"
                target="_blank"
              >
                Соседи (2018) (сериал)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/series/1108403/"
                target="_blank"
              >
                Крылья Пегаса (2017) (сериал)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/series/1071406/"
                target="_blank"
              >
                Ночь после выпуска (2017) (сериал)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/series/923146/"
                target="_blank"
              >
                Крыша мира (2016) (сериал)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/940680/"
                target="_blank"
              >
                Ольга (2016-2020) (сериал)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/705350/"
                target="_blank"
              >
                Класс коррекции (2014)
              </Link>
            </li>
          </ul>
        </ColRight>
      </Row>

      <Row>
        <ColLeft background="/assets/about/krivochurov.jpg">
          <TimetableBlock>
            <p>
              <Link href="/timetable#sunday">
                вс 15:30 — 19:30{" "}
                <IoPeopleOutline className="inline-block mb-1" /> 13 - 17 лет
              </Link>
            </p>
          </TimetableBlock>
        </ColLeft>
        <ColRight>
          <Name id="krivochurov">Дмитрий Кривочуров</Name>
          <p className="text-xl text-gray-500 mb-5">
            Актёр театра и кино, продюсер
          </p>
          <p className="mb-5">
            Педагог на все руки. Сценическая речь, пластика, сценическое
            движение, сценический бой, работа в кадре и это ещё не весь набор
            навыков этого прекрасного педагога. Скрупулёзный в подходе обучения
            детей. Сильная система преподавания, требующая полного погружения в
            профессию.
          </p>
          <p>Выбранная фильмография:</p>
          <ul className="mb-3">
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/series/993593/"
                target="_blank"
              >
                Секретарша (2016 &ndash; ...)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/933787/"
                target="_blank"
              >
                Не чужие (2018)
              </Link>
            </li>
          </ul>
        </ColRight>
      </Row>

      <Row>
        <ColLeft background="/assets/about/sotserdotskiy.jpg">
          <TimetableBlock>
            <p>
              <Link href="/timetable#saturday">
                сб 11:00 — 15:00{" "}
                <IoPeopleOutline className="inline-block mb-1" /> 8 - 12 лет
              </Link>
            </p>
            <p>
              <Link href="/timetable#sunday">
                вс 11:00 — 15:00{" "}
                <IoPeopleOutline className="inline-block mb-1" /> 10 - 13 лет
              </Link>
            </p>
          </TimetableBlock>
        </ColLeft>
        <ColRight>
          <Name id="sotserdotskiy">Сергей Соцердотский</Name>
          <p className="text-xl text-gray-500 mb-5">
            Актёр, педагог по актёрскому мастерству
          </p>
          <p className="mb-5">
            Яркий, харизматичный педагог с невероятной энергетикой. Сергей
            окончил ТИ им. Щукина в 2015 году. Актёр очень востребован в кино,
            большое количество съёмок всегда помогает оставаться в тонусе, что и
            передаётся детям на занятиях.
          </p>
          <p>Выбранная фильмография:</p>
          <ul className="mb-3">
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/series/1008105/"
                target="_blank"
              >
                Три королевы (2016)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kino-teatr.ru/kino/movie/ros/118882/annot/"
                target="_blank"
              >
                Лучший город земли (2016)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kino-teatr.ru/kino/movie/ros/121946/annot/"
                target="_blank"
              >
                Золотая орда (2017)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/series/1008105/"
                target="_blank"
              >
                Фантом (2017)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kino-teatr.ru/kino/movie/ros/131876/annot/"
                target="_blank"
              >
                ИП Пирогова (2018)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/1183582/"
                target="_blank"
              >
                Холоп (2019)
              </Link>
            </li>
          </ul>
        </ColRight>
      </Row>

      <Row>
        <ColLeft background="/assets/about/budnikova.jpg">
          <TimetableBlock>
            <p>
              <Link href="/timetable#saturday">
                сб 11:00 — 13:30{" "}
                <IoPeopleOutline className="inline-block mb-1" /> 3,5 - 6 лет
              </Link>
            </p>
            <p>
              <Link href="/timetable#sunday">
                вс 11:00 — 13:30{" "}
                <IoPeopleOutline className="inline-block mb-1" /> 3,5 - 6 лет
              </Link>
            </p>
          </TimetableBlock>
        </ColLeft>
        <ColRight>
          <Name id="budnikova">Инна Будникова</Name>
          <p className="text-xl text-gray-500 mb-5">
            Актриса театра и кино, педагог по актерскому мастерству и
            сценической речи, режиссёр
          </p>
          <p className="mb-5">
            Инна &mdash; педагог наших самых маленьких учеников, что требует
            особой подготовки и спокойствия. В этом она незаменима. Растит
            настоящих, профессиональных актеров. Окончила ТИ им. Щукина маст.
            Н.И. Дворжецкой
          </p>
          <p>Выбранная фильмография:</p>
          <ul className="mb-3">
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Мир! Дружба! Жвачка! (2020)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Официально красивые (2020)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Конная полиция (2018)
              </Link>
            </li>
          </ul>
        </ColRight>
      </Row>

      <Row>
        <ColLeft background="/assets/about/dankovtseva.jpg">
          <TimetableBlock className="hidden">
            <p>
              <Link href="/timetable#saturday">
                сб 15:30 — 19:30{" "}
                <IoPeopleOutline className="inline-block mb-1" /> 13 - 17 лет
              </Link>
            </p>
            <p>
              <Link href="/timetable#sunday">
                вс 12:00 — 15:00{" "}
                <IoPeopleOutline className="inline-block mb-1" /> 7 - 8 лет
              </Link>
            </p>
            <p>
              <Link href="/timetable#sunday">
                15:30 — 19:30 <IoPeopleOutline className="inline-block mb-1" />{" "}
                9 - 12 лет
              </Link>
            </p>
          </TimetableBlock>
        </ColLeft>
        <ColRight>
          <Name id="dankovtseva">Диана Данковцева</Name>
          <p className="text-xl text-gray-500 mb-5">
            Актриса театра и кино, педагог по сценической речи
          </p>
          <p className="mb-5">
            Диана выпускница ВАВТ (Всероссийская академия внешней торговли
            Минэкономразвития РФ) и РАТИ ГИТИС (мастерская М.Б. Борисова).
          </p>
          <p className="mb-5">
            Главная цель наших занятий ― умение быть на площадке максимально
            содержательным, научиться доносить мысли до партнера и зрителя
            максимально ясно и красочно."
          </p>
        </ColRight>
      </Row>

      <Row>
        <ColLeft background="/assets/about/yudina.jpg">
          <TimetableBlock>
            <p>
              <Link href="/timetable#saturday">
                сб 11:00 — 15:00{" "}
                <IoPeopleOutline className="inline-block mb-1" /> 13 - 17 лет
              </Link>
            </p>
          </TimetableBlock>
        </ColLeft>
        <ColRight>
          <Name id="yudina">Екатерина Юдина</Name>
          <p className="text-xl text-gray-500 mb-5">Актриса театра и кино</p>
          <p className="mb-5">
            Сильнейший педагог классической актерской школы. Начала сниматься
            еще будучи ребенком, в 9 лет сыграла в картине Петра Тодоровского
            «Военно-полевой роман» и продолжает сниматься по сей день. Она, как
            никто другой, поможет вашим детям раскрыть свой потенциал. Окончила
            ТИ им. Щепкина
          </p>
          <p>Выбранная фильмография:</p>
          <ul className="mb-3">
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Водитель для Веры (2004)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Солдаты (2005)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Все вмешалось в доме... (2006)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Единственный мужчина (2010)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Фурцева (2011)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Без срока давности (2012 &ndash; 2014)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Кости (2013 &ndash; 2014)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Мертв на 99% (2017)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Жена полицейского (2017)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Оптимисты (2017)
              </Link>
            </li>
          </ul>
        </ColRight>
      </Row>

      <Row>
        <ColLeft background="/assets/about/markelova.png">
          <TimetableBlock>
            <p>
              <Link href="/timetable#saturday">
                сб 15:30 — 19:30{" "}
                <IoPeopleOutline className="inline-block mb-1" /> 8 - 12 лет
              </Link>
            </p>
          </TimetableBlock>
        </ColLeft>
        <ColRight>
          <Name id="markelova">Лика Маркелова</Name>
          <p className="text-xl text-gray-500 mb-5">Актриса театра и кино</p>
          <p className="mb-5">
            Педагог с индивидуальным подходом к каждому актеру. Тонкая работа
            именно с тем «кто ты», отталкиваясь от самого себя, не «ломая»
            естественную непосредственность. Окончила ТИ им. Щукина Мастерская
            Поглазова
          </p>
          <p>Выбранная фильмография:</p>
          <ul className="mb-3">
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Потерянное счастье (2018)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Двойная ложь (2018)
              </Link>
            </li>

            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Потерянное счастье (2018)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Отцы (2017)
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Балабол 2
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Сашкина удача
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.kinopoisk.ru/film/841471/"
                target="_blank"
              >
                Долгий свет маяка
              </Link>
            </li>
          </ul>
        </ColRight>
      </Row>

      <Row>
        <ColLeft background="/assets/about/grishin.png">
          <TimetableBlock>
            <p>
              <Link href="/timetable#sunday">вс 15:30 — 20:00</Link>
            </p>
          </TimetableBlock>
        </ColLeft>
        <ColRight>
          <Name id="grishin">Олег Холявко-Гришин</Name>
          <p className="text-xl text-gray-500 mb-5">Оператор-постановщик</p>
          <p className="mb-5">
            Оператор-постановщик, фотограф, прирожденный педагог, способный
            показать совершенно иной, интересный, захватывающий взгляд на такое
            непростое направление, как операторское искусство.
          </p>
          <p className="mb-5">
            Олег понимает детей без слов, дети, в свою очередь, готовы слушать и
            учиться у него бесконечно.
          </p>
          <p className="mb-3">
            Большой опыт работы, как оператора-постановщика в кино, клипах,
            рекламах.
          </p>
        </ColRight>
      </Row>
    </Container>
  </Layout>
)

export default About

import { useState } from "react"
import ReactDOM from "react-dom";
import { IoPeopleOutline, IoCheckmarkCircleOutline } from "react-icons/io5"
import { useToasts } from "react-toast-notifications"
import { FiSun } from "react-icons/fi"
import Container from "../components/container"
import MoreStories from "../components/more-stories"
import HeroPost from "../components/hero-post"
import Intro from "../components/intro"
import Timetable from "../components/timetable"
import Layout from "../components/layout"
import Logo from "../components/logo"
import Head from "next/head"
import VkIcon from "../components/vk-icon"
import EmblaCarousel from "../components/EmblaCarousel"
import { post } from "../helpers/network"
import id from "../helpers/id"
import { RiFacebookCircleLine, RiInstagramLine } from "react-icons/ri"
import classnames from "classnames"

//useEffect( () => { document.querySelector("body").classList.add("home") } );

const SLIDE_COUNT = 6;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Row = ({ children }) => (
  <div className="flex flex-col md:flex-row font-light text-xl lg:text-4xl justify-center mb-8 md:mb-16">
    {children}
  </div>
)
const ColLeft = ({ children, background }) => (
  <div
    style={{
      background: 'center / cover no-repeat url(${background})',
      minHeight: "40rem",
    }}
    className="font-light font-fancy md:text-right align-top md:mr-10 lg:mr-20 text-black mb-2 md:w-5/12 fadein-left relative"
  >
    {children}
  </div>
)
const ColRight = ({ children }) => (
  <div className="font-light font-fancy mr-2 align-top md:pr-4 md:w-7/12 fadein">
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

const withToast = C => props => <C toast={useToasts().addToast} />

const TimetableBlock = ({ children, className, ...rest }) => (
  <div
    className={classnames(
      "absolute bottom-0 py-4 pr-8 pl-3 md:pl-8 text-black background-primary mb-5 text-base md:text-xl -right-8 w-full sm:w-auto text-right",
      className
    )}
    {...rest}
  >
    {children}
  </div>
)

const movies = [
  {
    title: "ОГОНЬ (2020)",
    image: "/assets/landing/fire.jpg",
    director: "Алексей Нужный",
    description:
      "Героическая история о пожарных и спасателях. То, что обычно называют подвигом, для них — привычные будни, если только можно привыкнуть к смертельной опасности и предельному риску.",
    href: "https://www.kinopoisk.ru/film/1183599/",
  },
  {
    title: "СТРЕЛЬЦОВ (2020)",
    image: "/assets/landing/streltsov.jpg",
    director: "Илья Учитель",
    description:
      "Эдуард Стрельцов — восходящая звезда советского футбола и кумир миллионов. Вся страна ждет побед советской сборной на предстоящем Чемпионате мира в Швеции и дуэли Стрельцова с Пеле.",
    href: "https://www.kinopoisk.ru/film/1167867/",
  },
  {
    title: "ГИПНОЗ (2020)",
    image: "/assets/landing/gipnoz.jpg",
    director: "Валерий Тодоровский",
    description:
      "Лунатик Миша окончательно тонет в иллюзиях после лечения гипнозом. Мистический триллер Валерия Тодоровского.",
    href: "https://www.kinopoisk.ru/film/1242705/",
  },
  {
    title: "КУРАТОР (2019)",
    image: "/assets/landing/curator.jpg",
    director: "Петр Левченко",
    description:
      "Посредник устраняет конфликт между бизнесом и властью после убийства мэра. Арт-детектив о политике и криминале.",
    href: "https://www.kinopoisk.ru/film/1261583/",
  },
  {
    title: "ЧУПАКАБРА (2020)",
    image: "/assets/landing/chupakabra.jpg",
    director: "Григорий Коломийцев",
    description:
      "Картина рассказывает о трудной доле девятилетнего мальчика Андрея, чье детство омрачено отсутствием родительской любви и заботы.",
    href: "https://www.kinopoisk.ru/film/1431114/",
  },
  {
    title: "ВРАТАРЬ ГАЛАКТИКИ (2020)",
    image: "/assets/landing/vratar.jpg",
    director: "Джаник Файзиев",
    description:
      "Сборная Земли против инопланетян — на кону спасение мира. Семейный блокбастер от режиссера «Турецкого гамбита».",
    href: "https://www.kinopoisk.ru/film/841471/",
  },
]

const withState = (C, initial) => props => {
  const [state, setState] = useState(initial || {})
  return (
    <C
      {...props}
      setState={x =>
        x === undefined ? state : setState(prev => ({ ...prev, ...x })) || state
      }
      state={state}
    />
  )
}

const Landing = ({ toast, state, setState, ...props }) => (
  <Layout>
    <Head>
      <title>DЕТИКИНО</title>
    </Head>
	<div className="blackout">
		<a href="/timetable">Детям</a>
		<a className="hide_blackout" onClick={e => {
			e.preventDefault();
			document.querySelector(".blackout").classList.add('hidden')}
		} href="#">Родителям</a>
		<a href="/timetable#price">Актерам</a>
		<a href="/casting">Кастинг</a>
	</div>
    <div
      className="w-full bg-center bg-cover h-screen relative text-white"
      style={{
        backgroundImage: "url(/assets/landing/hero.jpg)",
      }}
    >
	<EmblaCarousel slides={slides} />	
      <div className="flex welcome-text items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 p-3">
        <div className="text-center">
          <h1 className="mt-4 md:mt-8 mb-8 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-fancy font-light tracking-tighter leading-tight text-white">
            Хочешь увидеть своего ребенка
            <br />{" "}
            <span className="font-sans font-heavy">на большом экране?</span>
          </h1>
          <a
            href="#about"
            className="bg-black bg-opacity-25 text-white hover:bg-white hover:text-black border border-white font-bold py-3 px-4 sm:px-8 duration-150 transition-colors mb-6 lg:mb-0"
          >
            Конечно хочу!
          </a>
        </div>
      </div>
      <div className="hidden truehidden sm:block absolute text-base bottom-0 right-0 p-3 opacity-75">
        &laquo;Тренер&raquo;, реж. Александр Баскаков
      </div>
    </div>
    <section className="text-black body-font font-light" id="about">
      <div className="container flex flex-col items-start lg:items-center px-5 mx-auto md:flex-row">
        <div className="mx-auto w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0 pt-24 lg:py-24">
          <div
            className="scroll-background h-96 w-full"
            style={{ backgroundImage: "url(/assets/landing/less_kids.jpg)" }}
          />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 md:pl-8 lg:pl-16 md:items-start md:text-left md:pt-24 lg:py-24">
          <h2 className="mb-8 text-4xl tracking-tighter text-center text-black lg:text-left lg:text-5xl title-font">
            Мы &mdash; школа-студия &laquo;
            <span className="font-fancy">DЕТИКИНО</span>&raquo;
          </h2>
          <p className="mb-8 text-base leading-relaxed text-center text-black lg:text-left lg:text-1xl">
            Наши ученики снимаются в фильмах знаменитых режиссеров, таких как{" "}
            <Link href="https://www.kinopoisk.ru/name/231311/" target="_blank">
              Валерий Тодоровский
            </Link>
            ,{" "}
            <Link href="https://www.kinopoisk.ru/name/1757983/" target="_blank">
              Алексей Нужный
            </Link>{" "}
            и{" "}
            <Link href="https://www.kinopoisk.ru/name/2781359/" target="_blank">
              Илья Учитель
            </Link>
            .
          </p>
          <div className="flex flex-col lg:flex-row justify-center mb-4">
            <input
              className="w-full rounded-none bg-white border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out px-4 py-2 mr-4 mb-6 lg:mb-0"
              placeholder="Ваш номер телефона"
              type="tel"
              id="tel_first"
            />
            <button
              className={classnames({
                "disabled pointer-events-none opacity-75": state.disabled,
              })}
              onClick={e => {
                setState({ disabled: true })
                post("/api/post", {
                  tel: id("tel_first").value,
                }).then(x => {
                  toast(
                    "Ваши данные отправлены. Мы перезвоним вам в течение одного рабочего дня.",
                    { appearance: "success" }
                  )
                  setState({ disabled: false })
                })
              }}
              className="hover:bg-white hover:bg-opacity-25 hover:text-black bg-black text-white border border-black font-bold py-3 px-4 sm:px-8 duration-150 transition-colors mb-0"
            >
              Заказать&nbsp;звонок
            </button>
          </div>
          <p className="mt-2 text-left text-black">
            Ознакомьтесь с <Link href="/timetable">расписанием</Link>
          </p>
        </div>
      </div>
    </section>
    <section className="text-black font-light body-font">
      <div className="container px-5 pt-24 lg:pt-0 pb-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full items-center justify-center">
          <div className="lg:w-3/5 lg:mt-0 lg:pr-16">
            <p className="leading-relaxed text-lg mb-4">
              Мы создали Школу, чтобы помочь нашим юным коллегам увереннее
              чувствовать себя на пробах, точнее работать в кадре,
              совершенствоваться в профессии. Мы не только делимся своим опытом,
              но и предоставляем ребятам возможность применять полученные знания
              и навыки в боевых условиях настоящей киноидустрии.
            </p>
            <a
              href="/about"
              className="font-sans font-bold hover:text-yellow-500 leading-relaxed inline-flex items-center"
            >
              Подробнее о школе
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="lg:w-2/5 lg:pr-10 pt-24 lg:pt-0">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                <IoPeopleOutline className="w-5 h-5" />{" "}
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  ДЛЯ ДЕТЕЙ ВСЕХ ВОЗРАСТОВ
                </h2>
                <p className="leading-relaxed">
                  У нас есть группы для детей от 3,5 до 17 лет.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                <IoCheckmarkCircleOutline className="w-6 h-6" />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  ОПЫТНЫЕ НАСТАВНИКИ
                </h2>
                <p className="leading-relaxed">
                  Каждый из наших преподавателей является действующим
                  профессионалом киноиндустрии.
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                <FiSun className="w-5 h-5" />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  ВЗРОСЛАЯ ГРУППА
                </h2>
                <p className="leading-relaxed">
                  Мы также проводим занятия для родителей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="text-black body-font font-light">
      <div className="container px-5 pb-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="mb-6 text-4xl tracking-tighter text-center text-black lg:text-5xl title-font">
            Избранная фильмография
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Самые известные работы с нашими учениками и преподавателями.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {movies.map(({ image, title, director, description, href }, i) => (
            <div
              className="block lg:w-1/3 sm:w-1/2 px-16 py-8 md:py-16 xl:px-24"
              key={i}
            >
              <div className="relative">
                <img
                  alt="gallery"
                  className="inset-0"
                  src={image}
                />
                <a
                  href={href}
                  target="_blank"
                  className="absolute cursor-pointer left-0 bottom-0 h-full w-full px-4 text-sm py-3 z-10 border-4 border-gray-200 bg-white opacity-0 md:hover:opacity-100"
                >
                  <h2 className="tracking-widest text-sm title-font font-medium mb-1">
                    {title}
                  </h2>
                  <hr className="my-3 w-20 border-yellow-500 pezhnya" />
                  <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {director}
                  </h2>
                  <p className="leading-relaxed">{description}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="text-black body-font relative font-light">
      <div className="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder={0}
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.012163488421!2d37.67689271629066!3d55.72354078054555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54ad44e086543%3A0x873e3723068e0e85!2z0JrQuNC90L7RgdGC0YPQtNC40Y8g0JDQnNCV0JTQmNCQ!5e0!3m2!1sen!2sru!4v1612104563609!5m2!1sen!2sru"
            //style={{ filter: "grayscale(1) contrast(1.2) opacity(0.74)" }}
          />
          <div className="bg-white relative flex flex-wrap py-6 shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                АДРЕС
              </h2>
              <p className="mt-1">
                Москва, ул. Новоостаповская д.5 стр.3 Киностудия Амедиа, 2 этаж,
                10-11 павильоны, А2-11
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 flex justify-between flex-col">
              {/*<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <Link
                href="mailto:info@detikino.ru"
                className="text-yellow-500 leading-relaxed"
              >
                info@detikino.ru
              </Link>*/}
              <div>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ТЕЛЕФОН
                </h2>
                <Link className="leading-relaxed" href="tel:+79660008997">
                  +7 966 000 899 7
                </Link>
              </div>
              <p className="mt-4">
                <a
                  href="/contact"
                  className="font-sans font-bold hover:underline leading-relaxed inline-flex items-center"
                >
                  Страница контактов
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="mb-6 text-4xl tracking-tighter text-center lg:text-left text-black lg:text-5xl title-font">
            Записаться на занятие
          </h2>
          <p className="leading-relaxed mb-5 text-black">
            Воспользуйтесь формой ниже, чтобы получить бесплатную консультацию
            от нашего менеджера.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-black">
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-none bg-white border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="tel" className="leading-7 text-sm text-black">
              Номер телефона
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              className="w-full rounded-none bg-white border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="age" className="leading-7 text-sm text-black">
              Возраст ребенка
            </label>
            <input
              type="text"
              id="age"
              name="age"
              className="w-full rounded-none bg-white border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button className="hover:bg-white hover:bg-opacity-25 hover:text-black bg-black text-white border border-black font-bold py-3 px-4 sm:px-8 duration-150 transition-colors mb-0">
            Заказать&nbsp;звонок
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Нажимая на кнопку, вы даете согласие на обработку своих персональных
            данных
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default withToast(withState(Landing))


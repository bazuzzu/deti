import React, { useState } from "react"
import Container from "../components/container"
import MoreStories from "../components/more-stories"
import HeroPost from "../components/hero-post"
import Intro from "../components/intro"
import Timetable from "../components/timetable"
import Layout from "../components/layout"
import Logo from "../components/logo"
import Head from "next/head"
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiAddLine,
} from "react-icons/ri"
import VkIcon from "../components/vk-icon"
import classnames from "classnames"
import CupertinoPane from "../components/cupertino-pane"
import { getKids } from "../lib/api"



const extractPhoto = s => s.split(", ")[0].replace(/open/, "thumbnail").replace(' ','')+'&sz=w800'
const extractTube = s =>
  s ? s.split(/,| /).filter(s => /youtu.be/.test(s)) : []

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

const Kids = ({ kids }) => {
  const [state, _setState] = useState({})
  const setState = s => _setState(prev => ({ ...prev, ...s }))
  return (
    <Layout>
      <Head>
        <title>Актерское агенство школы-студии Detikino</title>
      </Head>
      <Container
        id="boys"
        className={classnames({ "pointer-events-none": state.open })}
      >
 		<a href="/" className="blacklogo toplogo"></a>
		
		<div className="topcontacts">
			<a href="tel:+79096904433">+7 (909) 690-44-33</a>
			<a href="email:casting@detikino.ru">casting@detikino.ru</a>

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
        <h2 className="text-3xl font-fancy pt-3 pr-12">Актерское агенство школы-студии Detikino</h2>
		<div className="clear"></div>
        {state.open && (
          <CupertinoPane onCloseClick={_ => setState({ open: false })}>
            <div className="container mx-auto px-8">
              <div>
                <div className="w-full h-72 pt-3 select-none">
                  <img
                    className="w-56 h-full mx-auto object-top object-cover max-w-lg"
                    src={extractPhoto(state.photo || "")}
                    alt={`${state.name} ${state.surname}`}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full max-w-lg mx-auto mt-3">
                  <h3 className="text-gray-700 text-3xl mb-3">
                    {state.name.trim()} {state.surname.trim()}
                  </h3>
                  <span className="text-gray-500 mt-3">
                    {state.age} {state.age < 5 ? "года" : "лет"}
                  </span>
                  <hr className="my-3" />
                  <div className="mt-3">
                    <p className="mb-2">Рост {state.height} см</p>
                    <p className="mb-2">Телосложение {state.constitution}</p>
                    <p className="mb-2">Цвет глаз {state.eyes}</p>
                    <p className="mb-2">Цвет волос {state.hair}</p>
                    <p className="mb-2">Длина волос {state.hairlength}</p>
                    <p className="mb-2">Готов(а) красить волосы {state.colorready}</p>
                    <p className="mb-2">Готов(а) стричься наголо {state.cutready}</p>
                    <p className="mb-2">Тип внешности {state.type}</p>
                    <p className="mb-2">Иностранные языки {state.languages}</p>
                    <p className="mb-2">Вокал {state.vocal}</p>
                    <p className="mb-2">Музыкальные инструменты {state.instruments}</p>


                    <div className="flex items-center"></div>
                  </div>
                  <div>
                    {!!extractTube(state.links).length && (
                      <>
                        <p className="mb-2">Видеовизитка</p>
                        {/*<button className="text-sm mr-2 mb-3 text-gray-600 border rounded-md py-2 px-4 hover:bg-gray-200 focus:outline-none">
                      Синий
                    </button>
                    <button className="text-sm mr-2 mb-3 text-gray-600 border rounded-md py-2 px-4 hover:bg-gray-200 focus:outline-none">
                      Красный
                    </button>*/}
                        {extractTube(state.links).map((m, i) => (
                          <iframe
                            key={i}
                            src={`https://www.youtube.com/embed/${m.replace(
                              /https:\/\/youtu.be\/(.*)/,
                              "$1"
                            )}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        ))}
                        <hr className="mb-3" />
                      </>
                    )}
                  </div>
                  <p className="mb-2">Пригласить на пробы</p>
                  <div className="flex flex-col items-center text-base pb-16">
                    <input
                      type="tel"
                      className="w-full rounded-none bg-white border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out px-4 py-2 mb-3"
                      placeholder="Ваше имя"
                      onChange={e => setState({ yourName: e.target.value })}
                      value={state.yourName || ""}
                    />

                    <input
                      type="tel"
                      className="w-full rounded-none bg-white border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out px-4 py-2 mb-3"
                      placeholder="Ваш номер телефона"
                      onChange={e => setState({ tel: e.target.value })}
                      value={state.tel || ""}
                    />
                    <button className="flex items-center justify-center hover:bg-white hover:bg-opacity-25 hover:text-black bg-black text-white border border-black font-bold py-3 px-4 duration-150 transition-colors mb-0 w-full">
                      <RiAddLine className="mr-1" /> Пригласить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CupertinoPane>
        )}
        <div className="flex flex-col md:flex-row sunday-wrapper">
          <a href="#girls">
            <h1
              className={classnames(
                "font-sans mt-4 md:mt-8 lg:mb-8 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-heavy tracking-tighter leading-tight md:pr-8 transition-colors duration-150 cursor-pointer text-orange hover:text-gray-600"
              )}
            >
              ДЕВОЧКИ.
            </h1>
          </a>
          <a href="#boys">
            <h1
              className={classnames(
                "font-sans md:mt-8 mb-8 md:mb-12 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-heavy tracking-tighter leading-tight text-gray-400 hover:text-gray-600 transition-colors duration-150 cursor-pointer text-gray-400 hover:text-gray-600"
              )}
            >
              МАЛЬЧИКИ.
            </h1>
          </a>
        </div>
		<a className="filtershow" href="#">Фильтры</a>
	    <a className="filterhide" href="#">Скрыть</a>

		<div className="filters">
			<a className="add_filter_but" href="#">Дополнительно</a>
			<a className="add_filter_but_act" href="#">Дополнительно</a>			
			<div className="agefilt filtr">
			<div>Возраст</div><br/>
			от <input id="ageinputmin" type="text" /> до <input id="ageinputmax" type="text" />
			</div>
			<div className="heightfilt filtr">
			<div>Рост</div><br/>
			от <input id="heightinputmin" type="text" /> до <input id="heightinputmax" type="text" />
			</div>

			<div className="add_filters">
				<div className="filterselect" id="constitution">
					<div>Телосложение</div>
					<select></select>
				</div>
				<div className="filterselect" id="eyes">
					<div>Цвет глаз</div>
					<select></select>
				</div>
				<div className="filterselect" id="hair">
					<div>Цвет волос</div>
					<select></select>
				</div>
				<div className="filterselect" id="hairlength">
					<div>Длина волос</div>
					<select></select>
				</div>
				<div className="filterselect" id="colorready">
					<div>Готов(а) красить волосы</div>
					<select></select>
				</div>
				<div className="filterselect" id="cutready">
					<div>Готов(а) стричься наголо</div>
					<select></select>
				</div>
				<div className="filterselect" id="type">
					<div>Тип внешности</div>
					<select></select>
				</div>
				<div className="filterselect" id="colorready">
					<div>Готов красить волосы</div>
					<select></select>
				</div>
				<div className="filterselect" id="languages">
					<div>Иностранные языки</div>
					<select></select>
				</div>
				<div className="filterselect" id="vocal">
					<div>Вокал</div>
					<select></select>
				</div>
				<div className="filterselect" id="instruments">
					<div>Музыкальные инструменты</div>
					<select></select>
				</div>
			
			<div className="filterselect" id="resetfilters">Сбросить фильтры</div>
	      </div>
		</div>
        <div className="agesection">
          {Object.keys(kids).map((gender, i) => (
            <div key={i} data-sex={gender} className="sunday-tab">
              {Object.keys(kids[gender]).map(age => (
                <div key={age}>

                  {kids[gender][age].map(
                    ({ name, surname, photo, age, height, links, constitution, eyes, hair, hairlength, colorready, cutready, type, languages, vocal, instruments }, j) => (
                      <div
                        key={j}
                        className="inline-block mx-8 mb-8 text-center w-48 align-top cursor-pointer"
                        onClick={() =>
                          setState({
                            open: true,
                            name,
                            surname,
                            photo,
                            age,
                            height,
                            links,
							constitution, 
							eyes, 
							hair, 
							hairlength, 
							colorready, 
							cutready, 
							type, 
							languages, 
							vocal, 
							instruments,
                          })
                        }
                      >
                        <img
                          className="object-cover object-top h-56 w-48"
                          src={extractPhoto(photo)}
                          alt={`${name.trim()} ${surname.trim()}`}
						  data-height={`${height}`}
						  data-age={`${age}`}
						  data-constitution={`${constitution}`}
						  data-eyes={`${eyes}`}
						  data-hair={`${hair}`}
						  data-hairlength={`${hairlength}`}
						  data-colorready={`${colorready}`}
						  data-cutready={`${cutready}`}
						  data-type={`${type}`}
						  data-languages={`${languages}`}
						  data-vocal={`${vocal}`}
						  data-instruments={`${instruments}`}
                          referrerPolicy="no-referrer"
                        />
                        <p className="text-xl font-fancy font-bold mt-2">
                          {name.trim()} {surname.trim()}
                        </p>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const kids = await getKids()

  return {
    props: {
      kids,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 600, // In seconds
  }
}

export default Kids

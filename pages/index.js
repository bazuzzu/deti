import React, { useState } from "react"
import Image from "next/image"
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


const extractPhoto = s => s.split(", ")[0].replace(/open/, "thumbnail").replace(/\s/g,'')+'&sz=w800'
const testAllphoto = s => s.split(" , ")
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
  
// mail
  
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')
	const [submitted, setSubmitted] = useState(false)	

	const handleSubmit = (e) => { 
	  e.preventDefault()
	
	  console.log('Sending')
	let data = {
		name,
		phone,
		message
	  }
	fetch('/api/contact', {
		method: 'POST',
		headers: {
		  'Accept': 'application/json, text/plain, */*',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	  }).then((res) => {
		//console.log(res.status)
		console.log('Response received')
		if (res.status === 200) {
		  $('.sending').show();
		  $('.calltoview input').val('');  
		  setTimeout(function(){
		    $('.sending').fadeOut('slow');
		  }, 3000)			
		  console.log('Response succeeded!')
		  setSubmitted(true)
		  setName('')
		  setPhone('')
		  setMessage('')
		}

	  })
	}
  
// endmail  
  
  return (
    <Layout>
      <Head>
        <title>Актёрское агенство Школы-студии DЕТИКИНО</title>
      </Head>
      <Container
        id="boys"
        className={classnames({ "pointer-events-none": state.open })}
      >
 		<a href="/" className="blacklogo toplogo"></a>
		
		<div className="topcontacts">
			<a className="maincont" href="tel:+79096904433">+7 (909) 690-44-33</a>
			<a className="maincont" href="email:casting@detikino.ru">casting@detikino.ru</a>
			<div className="mainsocial">
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
		</div>	
        <h2 className="text-3xl font-fancy pt-3 pr-12">Актёрское агенство<br/> Школы-студии<br/> DЕТИКИНО</h2>
		<div className="clear"></div>
        {state.open && (
          <CupertinoPane onCloseClick={_ => setState({ open: false })}>
            <div className="container mx-auto px-8">
              <div>
   			    <div className="photo_arr">{state.photo}</div>

                <div className="w-full h-72 pt-3 select-none slideholder swipeslider">
					<ul className="sw-slides">
					</ul>		
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
					  
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">Рост: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.height} см</div>
					</div>	
 					{!!state.constitution.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">Телосложение: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.constitution}</div>
					</div>	
					  </>
					)}
 					{!!state.eyes.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">Цвет глаз: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.eyes}</div>
					</div>	
					  </>
					)}
 					{!!state.hair.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">Цвет волос: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.hair}</div>
					</div>	
					  </>
					)}
 					{!!state.type.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">Тип внешности: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.type}</div>
					</div>	
					  </>
					)}
                  <div className="videos">
                    {!!extractTube(state.links).length && (
                      <>
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
                            frameBorder="0"
							width=""
							height="auto"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                         
                          ></iframe>
                        ))}
                        <hr className="mb-3" />
                      </>
                    )}
                  </div><br/>

					<div className="addtoggle">Дополнительно</div>
					<div className="additional">
 					{!!state.hairlength.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">Длина волос: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.hairlength}</div>
					</div>	
					  </>
					)}
 					{!!state.colorready.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">Готов(а) красить волосы: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.colorready}</div>
					</div>	
					  </>
					)}
 					{!!state.cutready.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">Готов(а) стричься налысо: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.cutready}</div>
					</div>	
					  </>
					)}

 					{!!state.languages.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">Иностранные языки: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.languages}</div>
					</div>	
					  </>
					)}
 					{!!state.vocal.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">Вокал: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.vocal}</div>
					</div>	
					  </>
					)}
 					{!!state.instruments.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">Музыкальные инструменты: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.instruments}</div>
					</div>	
	
					  </>
					)}
					</div>

					{(state.roles_tv.length>=3 || state.roles_th.length>=3 || state.roles_ad.length>=3) && (
                      <>					
						<div className="exptoggle">Опыт работы</div>
					  </>
					)}					
					
					<div className="experience">
 					{state.roles_tv.length>=3 && (
                      <>

                    <p className="mb-2 fadein-right">Кино: {state.roles_tv.split(/\;/g).map(function(item, idx) {
											return (
												<span className="break" key={idx}>
													{item}

												</span>
											 )
										})
					}
					 </p><br/>
					  </>
					)}
 					{state.roles_th.length>=3 && (
                      <>
	
                    <p className="mb-2 fadein-right">Театр: {state.roles_th.split(/\;/g).map(function(item, idx) {
											return (
												<span className="break" key={idx}>
													{item}

												</span>
											 )
										})
					}
					</p><br/>
					  </>
					)}
 					{state.roles_ad.length>=3 && (
                      <>
                    <p className="mb-2 fadein-right">Реклама: {state.roles_ad.split(/\;/g).map(function(item, idx) {
											return (
												<span className="break" key={idx}>
													{item}

												</span>
											 )
										})
						}
					</p>
					  </>
					)}
					</div>
					<br/>

                    <div className="flex items-center"></div>
                  </div>

                  <p className="mb-2 calltoview">Пригласить на пробы</p>
                  <div className="flex flex-col calltoview items-center text-base pb-16">
                    <input
                      type="text"
                      className="w-full rounded-none bg-white border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out px-4 py-2 mb-3"
                      placeholder="Ваше имя" name="name"
                      onChange={(e)=>{setName(e.target.value)}}
                      
                    />

                    <input
                      type="text"
                      className="w-full rounded-none bg-white border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out px-4 py-2 mb-3"
                      placeholder="Ваш номер телефона" name="phone"
                      onChange={(e)=>{setPhone(e.target.value)}}
                     
                    />
                    <input className='storenames'
                      type="text"
                      name="message"
                      onChange={(e)=>{setMessage(e.target.value)}}
                     
                    />
                    <button type="submit" onClick={(e)=>{handleSubmit(e)}} className="flex items-center justify-center hover:bg-white hover:bg-opacity-25 hover:text-black bg-black text-white border border-black font-bold py-3 px-4 duration-150 transition-colors mb-0 w-full">
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
			<div className="searchinput filtr">
				<div>Поиск</div><br/>
				<input id="searchform" placeholder="Начните вводить имя или фамилию" type="text" />
			</div>

			<div className="add_filters">
				<div className="filtercheckbox" id="constitution">
					<div>Телосложение</div>
				</div>
				<div className="filtercheckbox" id="eyes">
					<div>Цвет глаз</div>
				</div>
				<div className="filtercheckbox" id="hair">
					<div>Цвет волос</div>
				</div>
				<div className="filtercheckbox" id="hairlength">
					<div>Длина волос</div>
				</div>				
				<div className="filtercheckbox" id="languages">
					<div>Иностранные языки</div>
					<label><input type="checkbox" value="Английский"/>Английский</label>
					<label><input type="checkbox" value="Испанский"/>Испанский</label>
					<label><input type="checkbox" value="Итальянский"/>Итальянский</label>
					<label><input type="checkbox" value="Немецкий"/>Немецкий</label>
					<label><input type="checkbox" value="Грузинский"/>Грузинский</label>
					<label><input type="checkbox" value="Китайский"/>Китайский</label>
					<label><input type="checkbox" value="Французский"/>Французский</label>
					<label><input type="checkbox" value="Болгарский"/>Болгарский</label>
				</div>
				<div className="filtercheckbox" id="vocal">
					<div>Вокал</div>
					<label><input type="checkbox" value="Академический"/>Академический</label>
					<label><input type="checkbox" value="Джазовый"/>Джазовый</label>
					<label><input type="checkbox" value="Эстрадный"/>Эстрадный</label>
					<label><input type="checkbox" value="Хор"/>Хор</label>
				</div>
				<div className="filtercheckbox" id="instruments">
					<div>Музыкальные инструменты</div>
					<label><input type="checkbox" value="Духовые"/>Духовые</label>
					<label><input type="checkbox" value="Ударные"/>Ударные</label>
					<label><input type="checkbox" value="Клавишные"/>Клавишные</label>
					<label><input type="checkbox" value="Струнные"/>Струнные</label>
					<label><input type="checkbox" value="Смычковые"/>Смычковые</label>
				</div>
			

	      </div>
		<div className="filterselect" id="resetfilters">Сбросить фильтры</div>
	  </div>
        <div className="agesection">
          {Object.keys(kids).map((gender, i) => (
            <div key={i} data-sex={gender} className="sunday-tab">
              {Object.keys(kids[gender]).map(age => (
                <div key={age}>

                  {kids[gender][age].map(
                    ({ name, surname, photo, age, height, links, constitution, eyes, hair, hairlength, colorready, cutready, type, languages, vocal, instruments, roles_tv, roles_th, roles_ad }, j) => (
                      
					  <div
                        key={j}
                        className="inline-block mx-8 mb-8 text-center w-72 align-top cursor-pointer"

                      ><div className="forcopy">
                        <img onClick={() =>
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
							roles_tv,
							roles_th,
							roles_ad,
                          })
                        }
                          className="object-cover kidcard object-top h-96 w-72"
                          src={extractPhoto(photo)}
                          alt={`${name.trim()} ${surname.trim()}`}
						  data-height={`${height}`}
						  data-age={`${age}`}
						  data-links={`${links}`}
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
						  data-allphoto={`${photo}`}
						  data-allphotoarr=""
                          referrerPolicy="no-referrer"
                        />
						
						
                        <div className="fullname text-xl font-fancy font-bold mt-2">
                          {name.trim()} <br/>{surname.trim()}
						<div className="mark" ></div>
                        </div>
						</div>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
		<div className="cupertino-pane-new favorities">
				<div className="picholder"></div>
                  <p className="mb-2 calltoview">Пригласить на пробы</p>
                  <div className="flex flex-col calltoview text-base pb-16">
                    <input
                      type="text"
                      className="w-full rounded-none bg-white border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out px-4 py-2 mb-3"
                      placeholder="Ваше имя" name="name"
                      onChange={(e)=>{setName(e.target.value)}}
                      
                    />

                    <input
                      type="text"
                      className="w-full rounded-none bg-white border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out px-4 py-2 mb-3"
                      placeholder="Ваш номер телефона" name="phone"
                      onChange={(e)=>{setPhone(e.target.value)}}
                     
                    />
                    <input className='storenames'
                      type="text"
                      name="message"
                      onChange={(e)=>{setMessage(e.target.value)}}
                     
                    />
                    <button type="submit" onClick={(e)=>{handleSubmit(e)}} className="flex items-center justify-center hover:bg-white hover:bg-opacity-25 hover:text-black bg-black text-white border border-black font-bold py-3 px-4 duration-150 transition-colors mb-0 w-full">
                      <RiAddLine className="mr-1" /> Пригласить
                    </button>
					<button className="genpdf">Каст-лист</button>
			</div>
		</div>
		<div className="hidecontent">
		<div style={{'color':'#000 !important'}} id="pdfexport" className="testpdf">

		</div>
		</div>
		<div className="sending">Ваша заявка отправлена. Спасибо!</div>
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



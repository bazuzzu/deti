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
        <title>?????????????????? ?????????????????? ??????????-???????????? D??????????????</title>
      </Head>
      <Container
        id="boys"
        className={classnames({ "pointer-events-none": state.open })}
      >
 		<a href="/" className="blacklogo toplogo"></a>
		
		<div className="topcontacts">
			<a className="maincont" href="tel:+79096904433">+7 909 690 44 33</a>
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
        <h2 className="text-3xl font-fancy pt-3 pr-12">?????????????????? ??????????????????<br/> ??????????-????????????<br/> D??????????????</h2>
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
                    {state.age} {state.age < 5 ? "????????" : "??????"}
                  </span>
                  <hr className="my-3" />
                  <div className="mt-3">
					  
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">????????: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.height} ????</div>
					</div>	
 					{!!state.constitution.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">????????????????????????: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.constitution}</div>
					</div>	
					  </>
					)}
 					{!!state.eyes.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">???????? ????????: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.eyes}</div>
					</div>	
					  </>
					)}
 					{!!state.hair.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">???????? ??????????: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.hair}</div>
					</div>	
					  </>
					)}
 					{!!state.type.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">?????? ??????????????????: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.type}</div>
					</div>	
					  </>
					)}
                  <div className="videos">
                    {!!extractTube(state.links).length && (
                      <>
                        {/*<button className="text-sm mr-2 mb-3 text-gray-600 border rounded-md py-2 px-4 hover:bg-gray-200 focus:outline-none">
                      ??????????
                    </button>
                    <button className="text-sm mr-2 mb-3 text-gray-600 border rounded-md py-2 px-4 hover:bg-gray-200 focus:outline-none">
                      ??????????????
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

					<div className="addtoggle">??????????????????????????</div>
					<div className="additional">
 					{!!state.hairlength.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">?????????? ??????????: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.hairlength}</div>
					</div>	
					  </>
					)}
 					{!!state.colorready.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">??????????(??) ?????????????? ????????????: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.colorready}</div>
					</div>	
					  </>
					)}
 					{!!state.cutready.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">??????????(??) ???????????????? ????????????: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.cutready}</div>
					</div>	
					  </>
					)}

 					{!!state.languages.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">?????????????????????? ??????????: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.languages}</div>
					</div>	
					  </>
					)}
 					{!!state.vocal.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">??????????: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.vocal}</div>
					</div>	
					  </>
					)}
 					{!!state.instruments.length && (
                      <>
					<div className="flex-row">	
                    	<div className="md:text-right align-top md:pr-20 text-gray-600 mb-2 md:w-6/12 fadein-left">?????????????????????? ??????????????????????: </div><div className="mr-2 align-top md:pr-4 md:w-6/12 fadein">{state.instruments}</div>
					</div>	
	
					  </>
					)}
					</div>

					{(state.roles_tv.length>=3 || state.roles_th.length>=3 || state.roles_ad.length>=3) && (
                      <>					
						<div className="exptoggle">???????? ????????????</div>
					  </>
					)}					
					
					<div className="experience">
 					{state.roles_tv.length>=3 && (
                      <>

                    <p className="mb-2 fadein-right">????????: {state.roles_tv.split(/\;/g).map(function(item, idx) {
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
	
                    <p className="mb-2 fadein-right">??????????: {state.roles_th.split(/\;/g).map(function(item, idx) {
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
                    <p className="mb-2 fadein-right">??????????????: {state.roles_ad.split(/\;/g).map(function(item, idx) {
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

                  <p className="mb-2 calltoview">???????????????????? ???? ??????????</p>
                  <div className="flex flex-col calltoview items-center text-base pb-16">
                    <input
                      type="text"
                      className="w-full rounded-none bg-white border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out px-4 py-2 mb-3"
                      placeholder="???????? ??????" name="name"
                      onChange={(e)=>{setName(e.target.value)}}
                      
                    />

                    <input
                      type="text"
                      className="w-full rounded-none bg-white border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out px-4 py-2 mb-3"
                      placeholder="?????? ?????????? ????????????????" name="phone"
                      onChange={(e)=>{setPhone(e.target.value)}}
                     
                    />
                    <input className='storenames'
                      type="text"
                      name="message"
                      onChange={(e)=>{setMessage(e.target.value)}}
                     
                    />
                    <button type="submit" onClick={(e)=>{handleSubmit(e)}} className="flex items-center justify-center hover:bg-white hover:bg-opacity-25 hover:text-black bg-black text-white border border-black font-bold py-3 px-4 duration-150 transition-colors mb-0 w-full">
                      <RiAddLine className="mr-1" /> ????????????????????
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
              ??????????????.
            </h1>
          </a>
          <a href="#boys">
            <h1
              className={classnames(
                "font-sans md:mt-8 mb-8 md:mb-12 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-heavy tracking-tighter leading-tight text-gray-400 hover:text-gray-600 transition-colors duration-150 cursor-pointer text-gray-400 hover:text-gray-600"
              )}
            >
              ????????????????.
            </h1>
          </a>
        </div>
		<a className="filtershow" href="#">??????????????</a>
	    <a className="filterhide" href="#">????????????</a>

		<div className="filters">
			<a className="add_filter_but" href="#">??????????????????????????</a>
			<a className="add_filter_but_act" href="#">??????????????????????????</a>			
			<div className="agefilt filtr">
				<div>??????????????</div><br/>
				???? <input id="ageinputmin" type="text" /> ???? <input id="ageinputmax" type="text" />
			</div>
			<div className="heightfilt filtr">
				<div>????????</div><br/>
				???? <input id="heightinputmin" type="text" /> ???? <input id="heightinputmax" type="text" />
			</div>
			<div className="searchinput filtr">
				<div>??????????</div><br/>
				<input id="searchform" placeholder="?????????????? ?????????????? ?????? ?????? ??????????????" type="text" />
			</div>

			<div className="add_filters">
				<div className="filtercheckbox" id="constitution">
					<div>????????????????????????</div>
				</div>
				<div className="filtercheckbox" id="eyes">
					<div>???????? ????????</div>
				</div>
				<div className="filtercheckbox" id="hair">
					<div>???????? ??????????</div>
				</div>
				<div className="filtercheckbox" id="hairlength">
					<div>?????????? ??????????</div>
				</div>				
				<div className="filtercheckbox" id="languages">
					<div>?????????????????????? ??????????</div>
					<label><input type="checkbox" value="????????????????????"/>????????????????????</label>
					<label><input type="checkbox" value="??????????????????"/>??????????????????</label>
					<label><input type="checkbox" value="??????????????????????"/>??????????????????????</label>
					<label><input type="checkbox" value="????????????????"/>????????????????</label>
					<label><input type="checkbox" value="????????????????????"/>????????????????????</label>
					<label><input type="checkbox" value="??????????????????"/>??????????????????</label>
					<label><input type="checkbox" value="??????????????????????"/>??????????????????????</label>
					<label><input type="checkbox" value="????????????????????"/>????????????????????</label>
				</div>
				<div className="filtercheckbox" id="vocal">
					<div>??????????</div>
					<label><input type="checkbox" value="??????????????????????????"/>??????????????????????????</label>
					<label><input type="checkbox" value="????????????????"/>????????????????</label>
					<label><input type="checkbox" value="??????????????????"/>??????????????????</label>
					<label><input type="checkbox" value="??????"/>??????</label>
				</div>
				<div className="filtercheckbox" id="instruments">
					<div>?????????????????????? ??????????????????????</div>
					<label><input type="checkbox" value="??????????????"/>??????????????</label>
					<label><input type="checkbox" value="??????????????"/>??????????????</label>
					<label><input type="checkbox" value="??????????????????"/>??????????????????</label>
					<label><input type="checkbox" value="????????????????"/>????????????????</label>
					<label><input type="checkbox" value="??????????????????"/>??????????????????</label>
				</div>
			

	      </div>
		<div className="filterselect" id="resetfilters">???????????????? ??????????????</div>
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
							gender,
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
						  data-gender={`${gender}`}
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
                  <p className="mb-2 calltoview">???????????????????? ???? ??????????</p>
                  <div className="flex flex-col calltoview text-base pb-16">
                    <input
                      type="text"
                      className="w-full rounded-none bg-white border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out px-4 py-2 mb-3"
                      placeholder="???????? ??????" name="name"
                      onChange={(e)=>{setName(e.target.value)}}
                      
                    />

                    <input
                      type="text"
                      className="w-full rounded-none bg-white border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out px-4 py-2 mb-3"
                      placeholder="?????? ?????????? ????????????????" name="phone"
                      onChange={(e)=>{setPhone(e.target.value)}}
                     
                    />
                    <input className='storenames'
                      type="text"
                      name="message"
                      onChange={(e)=>{setMessage(e.target.value)}}
                     
                    />
                    <button type="submit" onClick={(e)=>{handleSubmit(e)}} className="flex items-center justify-center hover:bg-white hover:bg-opacity-25 hover:text-black bg-black text-white border border-black font-bold py-3 px-4 duration-150 transition-colors mb-0 w-full">
                      <RiAddLine className="mr-1" /> ????????????????????
                    </button>
					<button className="genpdf">????????-????????</button>
			</div>
		</div>
		<div className="hidecontent">
		<div style={{'color':'#000 !important'}} id="pdfexport" className="testpdf">

		</div>
		</div>
		<div className="sending">???????? ???????????? ????????????????????. ??????????????!</div>
		<div className="generating">??????????????-???????? ????????????????????????<br/>????????????????????, ??????????????????.</div>
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



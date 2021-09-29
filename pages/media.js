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

const Media = props => (
  <Layout>
    <Head>
      <title>DЕТИКИНО</title>
    </Head>
    <div className="frame-root">
      <div className="frame-content">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto px-5">
            <h2 className="text-3xl font-fancy pt-3 pr-12">Медиатека</h2>
            <div className="text-xl lg:text-2xl flex flex-col md:flex-row">
              <h1 className="md:mt-8 mb-8 md:mb-12 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-heavy font-sans tracking-tighter leading-tight text-black">
                Фото учеников.
              </h1>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-full md:w-1/2">
                <div className="relative md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://dummyimage.com/500x300"
                  />
                  <div className="hidden items-center justify-center absolute left-0 bottom-0 h-full w-full px-8 py-10 z-10 border-8 border-gray-100 bg-opacity-50 bg-black text-white">
                    <h2 className="tracking-widest text-sm title-font font-medium mb-1 text-3xl">
                      Привет!
                    </h2>
                  </div>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://dummyimage.com/501x301"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="https://dummyimage.com/600x360"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full md:w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="https://dummyimage.com/601x361"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://dummyimage.com/502x302"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://dummyimage.com/503x303"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default Media

import { IoPeopleOutline } from "react-icons/io5"
import classnames from "classnames"
import { Link } from "./common"
import { FiSun } from "react-icons/fi"
import { RiMoonClearLine } from "react-icons/ri"

const data = [
  [
    {
      start: "11:00",
      end: "15:00",
      teacher: "Сергей Соцердотский",
      age: "8 - 12 лет",
      price: "9 000 руб",
      slug: "sotserdotskiy",
    },
    {
      start: "11:00",
      end: "15:00",
      teacher: "Екатерина Юдина",
      age: "13 - 17 лет",
      price: "9 000 руб",
      slug: "yudina",
    },
    {
      start: "11:00",
      end: "13:30",
      teacher: "Инна Будникова",
      age: "3,5 - 6 лет",
      price: "7 000 руб",
      slug: "budnikova",
    },

    {
      start: "15:30",
      end: "19:30",
      teacher: "Анжелика Маркелова",
      age: "8 - 12 лет",
      price: "9 000 руб",
      slug: "markelova",
    },
    {
      start: "15:30",
      end: "19:30",
      teacher: "Юлия Серина",
      age: "13 - 17 лет",
      price: "9 000 руб",
      slug: "serina",
    },
    {
      start: "14:00",
      end: "17:00",
      teacher: "Илья Брыльков",
      age: "7 - 8 лет",
      price: "8 000 руб",
    },
  ],
  [
    {
      start: "11:00",
      end: "15:00",
      teacher: (
        <>
          <Link href="/about#sotserdotskiy">Сергей Соцердотский</Link> и{" "}
          <Link href="/about#markelova">Анжелика Маркелова</Link>
        </>
      ),
      age: "10 - 13 лет",
      price: "9 000 руб",
    },
    {
      start: "11:00",
      end: "13:30",
      teacher: "Инна Будникова",
      age: "3,5 - 6 лет",
      price: "7 000 руб",
      slug: "budnikova",
    },
    {
      start: "12:00",
      end: "15:00",
      teacher: "Юлия Серина",
      age: "7 - 8 лет",
      price: "8 000 руб",
      slug: "serina",
    },
    {
      start: "15:30",
      end: "19:30",
      teacher: "Дмитрий Кривочуров",
      age: "13 - 17 лет",
      price: "9 000 руб",
      slug: "krivochurov",
    },
    {
      start: "15:30",
      end: "19:30",
      teacher: "Юлия Серина",
      age: "9 - 12 лет",
      price: "9 000 руб",
      slug: "serina",
    },
    {
      start: "15:30",
      end: "20:00",
      teacher: "Олег Холявко-Гришин",
      subtitle: "Операторское искусство",
      price: "10 000 руб",
      slug: "grishin",
    },
  ],
]

const Timetable = props => (
  <section id="sunday">
    <h2 className="text-3xl font-fancy pt-3 pr-12">Расписание и цены 20/21</h2>
    <div className="sunday-wrapper flex flex-col md:flex-row">
      <div>
        <a href="#saturday">
          <h1 className="font-sans mt-4 md:mt-8 lg:mb-8 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-heavy tracking-tighter leading-tight md:pr-8 transition-colors duration-150 cursor-pointer">
            СУББОТА.
          </h1>
        </a>
      </div>
      <div>
        <a href="#sunday">
          <h1 className="font-sans md:mt-8 mb-8 md:mb-12 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-heavy tracking-tighter leading-tight text-gray-400 hover:text-gray-600 transition-colors duration-150 cursor-pointer">
            ВОСКРЕСЕНЬЕ.
          </h1>
        </a>
        <div>
          {data.map((d, i) => (
            <div key={i} className="sunday-tab">
              {d.map(
                ({ start, end, teacher, age, price, subtitle, slug }, i) => (
                  <div
                    key={i}
                    className={classnames("flex flex-col md:flex-row", {
                      "mb-8 md:mb-12": i % 3 === 2,
                      relative: i === 3 || i === 0,
                    })}
                  >
					
                    {i === 0 && (
                      <span className="hidden md:flex absolute top-top right-full mr-2 text-gray-600 items-center justify-center">
                        <div>утро</div>
                        <FiSun className="ml-2" />
                      </span>
					 
                    )}

                    {i === 3 && (						
                      
						<span className="hidden md:flex absolute top-top right-full mr-2 text-gray-600 items-center justify-center">
						<div>вечер</div>
                        <RiMoonClearLine className="ml-2" />
                      </span>
                    )}
                    <div className="font-light font-fancy mr-2 align-top md:pr-4 lg:w-32">
                      {start}&nbsp;&mdash;&nbsp;{end}
                    </div>
                    <div className="ml-2 md:ml-1 pb-6">
                      <h3 className="">
                        {slug ? (
                          <Link href={`/about#${slug}`}>{teacher}</Link>
                        ) : (
                          <>{teacher}</>
                        )}
                      </h3>
                      {age && (
                        <p className="font-light">
                          <IoPeopleOutline className="inline-block mb-1" />{" "}
                          {age}
                        </p>
                      )}
                      {subtitle && <p className="font-light">{subtitle}</p>}
                      <p>{price}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
        <div id="price">
          <div className="flex flex-col md:flex-row md:ml-4 mb-8">
            <div className="font-light font-fancy md:text-right mr-2 align-top md:pr-4 w-40"></div>
            <h2 className="mb-4 text-3xl md:text-6xl font-bold tracking-tighter leading-tight">
              Дополнительные услуги
            </h2>
          </div>
        </div>
        <div className="border-solid border-l-4 border-yellow-500 pl-4 md:pl-8">
          <p>
            <span className="font-fancy font-light mr-2">
              Пробное занятие для новых учеников:
            </span>
            1 000 руб
          </p>
          <p>
            <span className="font-fancy font-light mr-2">
              Разовые оплаты в зависимости от абонемента:
            </span>
            2&nbsp;500&nbsp;руб
            <span className="font-fancy mr-1 ml-1">/</span>
            <wbr />
            2&nbsp;250&nbsp;руб
            <span className="font-fancy mr-1 ml-1">/</span>
            <wbr />
            2&nbsp;000&nbsp;руб
          </p>
          <p className="mb-16">
            <span className="font-fancy font-light mr-2">
              Индивидуальное занятие (60 минут):
            </span>
            2&nbsp;500&nbsp;руб
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Timetable

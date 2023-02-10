import React from "react";
import { Phone } from "@mui/icons-material";
import logo from "../images/logo.png";
import menuBar from "../images/menuBar.png";
import CalculateIcon from "@mui/icons-material/Calculate";
import clock from "../images/clock.png";
import medal from "../images/Medal.png";
import Cash from "../images/Cash.png";
import Kubok from "../images/Kubok.png";
import videoIMG from "../images/VideoIMG.png";
import krug1 from "../images/krug1.png";
import krug2 from "../images/krug2.png";
import krug3 from "../images/krug3.png";
import work1 from "../images/work1.png";
import work2 from "../images/work2.png";
import work3 from "../images/work3.png";
import knauf from "../images/KNAUF.png";
import slide from "../images/slide.png";
import shtukatur1 from "../images/shtukatur1.png";
import shtukatur2 from "../images/shtukatur2.png";
import shtukatur3 from "../images/shtukatur3.png";
import shtukatur4 from "../images/shtukatur4.png";
import shtukatur5 from "../images/shtukatur5.png";
import shtukatur6 from "../images/shtukatur6.png";
import shtukatur7 from "../images/shtukatur7.png";
import shtukatur8 from "../images/shtukatur8.png";
import iconWORK1 from "../images/iconWORK1.png";
import iconWORK2 from "../images/iconWORK2.png";
import iconWORK3 from "../images/iconWORK3.png";
import iconWORK4 from "../images/iconWORK4.png";
import iconWORK5 from "../images/iconWORK5.png";
// import arrow from "../images/arrow.png";
import instaPOST from "../images/instagrAM.png";
import aroba1 from "../images/Aroba1.png";
import aroba2 from "../images/Aroba2.png";
import aroba3 from "../images/Aroba3.png";
import city1 from "../images/city1.png";
import city2 from "../images/city2.png";
import city3 from "../images/city3.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import "../App.css";

function Home() {
  return (
    <div>
      {/* section 1 */}
      <nav>
        <div className="flex justify-between xs:justify-center px-5 md:grid xs:grid md:grid-cols-3 items-center my-5">
          <div className="m-auto">
            <img className="w-[80%] md:w-[100%]" src={logo} alt="logo" />
          </div>
          <div className="m-auto hidden md:flex bg-[#2DA6DD33] px-5 py-2 rounded-full">
            <button>Заказать обратный звонок</button>
          </div>
          <div className="m-auto hidden sm:flex">
            <button className="">
              <Phone color="primary" /> +7 (499) 647-63-47
            </button>
          </div>
          <div className="xs:flex md:hidden">
            <img src={menuBar} alt="menuBar" />
          </div>
        </div>
        {/*  MenuBar  */}
        <div>
          <ul className="hidden flex-wrap gap-5 sm:flex justify-evenly px-40 p-3 m-auto border  items-center ">
            <li className="cursor-pointer hover:text-slate-400">Главная</li>
            <li className="cursor-pointer hover:text-slate-400">
              Штукатурка фасадов
            </li>
            <li className="cursor-pointer hover:text-slate-400">Галерея</li>
            <li className="cursor-pointer hover:text-slate-400">
              Карта объектов
            </li>
            <li className="cursor-pointer hover:text-slate-400">Информация</li>
            <li className="cursor-pointer hover:text-slate-400">О компании</li>
            <li className="cursor-pointer hover:text-slate-400">Контакты</li>
            <li className="cursor-pointer hover:bg-green-400 px-5 py-2 rounded-full bg-[#BCD249] ">
              <CalculateIcon />
              Калькулятор
            </li>
          </ul>
        </div>
      </nav>
      {/* section 2 */}
      <section>
        <div className="bg1 h-[60vh] md:px-40 text-center md:text-start m-auto">
          <div className=" ">
            <h1 className="font-bold  md:text-[20px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px]">
              Механизированная штукатурка стен от 250 р/м2
            </h1>
            <p className="text-slate-400 px-5 md:w-[80%] ">
              Качественная механизированная шуткатурка в новостройках, домах,
              помещениях, зданиях и квартирах.
            </p>
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section className="my-20">
        <div className="my-10 md:pl-40 text-center md:text-start xl:w-[40%]">
          <h1 className="font-bold text-[50px]">МЫ В ЦИФРАХ</h1>
          <p>
            После работы нашей компании было выполнено огромное количество
            проектов ниже цифры наших достижений
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          <div className="m-auto text-center">
            <h1 className="font-bold text-[50px]">177</h1>
            <p>Завершенных проектов</p>
          </div>
          <div className="m-auto text-center">
            <h1 className="font-bold text-[50px]">130</h1>
            <p>Построенных зданий</p>
          </div>
          <div className="m-auto text-center">
            <h1 className="font-bold text-[50px]">6</h1>
            <p>Лет надежной работы</p>
          </div>
          <div className="m-auto text-center">
            <h1 className="font-bold text-[50px]">200+</h1>
            <p>Сотрудников в компании</p>
          </div>
        </div>
      </section>
      {/* section 4 */}
      <section className="bg-[#E7F2F9] p-20">
        <div className="text-center md:text-start md:my-20 md:w-[50%]">
          <h1 className="font-bold text-[20px] md:text-[35px]">
            Преимущества механизированной штукатурки
          </h1>
          <p>
            Рассчитайте стоимость механизированной штукатурки в новостройках,
            домах, помещениях, зданиях и квартирах.
          </p>
        </div>
        <div className="grid text-center md:grid-cols-4 gap-5 items-center">
          <div className="m-auto py-10">
            <img
              className="m-auto bg-[#254152] p-5 rounded-2xl"
              src={clock}
              alt="clock"
            />
            <h1 className="font-bold text-[30px]">Выгода во времени</h1>
            <p>
              Данная технология намного быстрее, чем традиционные методы
              штукатурки
            </p>
          </div>
          <div className="m-auto py-10">
            <img
              className="m-auto bg-[#254152] p-5 rounded-2xl"
              src={medal}
              alt="medal"
            />
            <h1 className="font-bold text-[30px]">Высокое качество</h1>
            <p>
              Данная технология намного быстрее, чем традиционные методы
              штукатурки
            </p>
          </div>
          <div className="m-auto py-10">
            <img
              className="m-auto bg-[#254152] p-5 rounded-2xl"
              src={Cash}
              alt="Cash"
            />
            <h1 className="font-bold text-[30px]">Низкий бюджет</h1>
            <p>
              Данная технология намного быстрее, чем традиционные методы
              штукатурки
            </p>
          </div>
          <div className="m-auto py-10">
            <img
              className="m-auto bg-[#254152] p-5 rounded-2xl"
              src={Kubok}
              alt="clock"
            />
            <h1 className="font-bold text-[30px]">Результат</h1>
            <p>
              Данная технология намного быстрее, чем традиционные методы
              штукатурки
            </p>
          </div>
        </div>
      </section>
      {/* section 5 */}
      <section className="my-20">
        <div className="text-center md:text-start md:my-20 md:w-[50%] xl:pl-40 my-10">
          <h1 className="font-bold text-[20px] md:text-[35px]">
            Видео обзор штукатурных работ
          </h1>
          <p>
            Посмотрите видео-обзор штукатурных работ от специалистов компании
            “Штукатурки.net”
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10 ">
          <div>
            <div>
              <img src={videoIMG} alt="videoIMG" />
            </div>
          </div>
          <div className="md:w-[30%] space-y-10 text-center md:text-start ">
            <h1 className="font-bold">
              Видео обзор штукатурных работ механизированным способом
            </h1>
            <p>
              В этом видео показан краткий обзор проведения штукатурных работ
              механизированным способом с использованием современного
              оборудования и высококачественных материалов
            </p>
            <button className="text-blue-500 underline">Подробнее</button>
          </div>
        </div>
      </section>
      {/* section 6 */}
      <section className="bg-[#E7F2F9] my-20">
        <div className="text-center md:text-start md:my-20 md:w-[50%] pt-20 xl:pl-40 my-10">
          <h1 className="font-bold text-[30px] md:text-[35px]">
            Сравнение стоимости и качества штукатурных работ
          </h1>
          <p>
            Мы используем только качественные материалы для механизированной
            штукатурки
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="text-center m-auto space-y-5 my-10">
            <img className="m-auto" src={krug1} alt="krug1" />
            <p className=" xs:text-[30px] m-auto md:w-[80%]">
              СНиП “Простая” штукатурка
            </p>
            <h1 className="text-[50px] text-[#2DA6DD] font-bold">
              от 250 ₽/м2
            </h1>
          </div>
          <div className="text-center m-auto space-y-5 my-10">
            <img className="m-auto" src={krug2} alt="krug1" />
            <p className=" xs:text-[30px] m-auto md:w-[80%]">
              СНиП “Простая” штукатурка
            </p>
            <h1 className="text-[50px] text-[#2DA6DD] font-bold">
              от 250 ₽/м2
            </h1>
          </div>
          <div className="text-center m-auto space-y-5 my-10">
            <img className="m-auto" src={krug3} alt="krug1" />
            <p className=" xs:text-[30px] m-auto md:w-[80%]">
              СНиП “Простая” штукатурка
            </p>
            <h1 className="text-[50px] text-[#2DA6DD] font-bold">
              от 250 ₽/м2
            </h1>
          </div>
        </div>
      </section>
      {/* section 7 */}
      <section>
        <div className="text-center md:text-start md:my-20 md:w-[50%]  xl:pl-40 my-5">
          <h1 className="font-bold text-[30px] md:text-[35px]">Наши работы</h1>
          <p>
            Примеры механизированных штукатурных работ выполненные нашей
            компанией
          </p>
        </div>
        <div className="  md:w-[50%] m-auto">
          <div>
            <img src={work1} alt="work1" />
          </div>
          <div className="flex gap-5 my-5">
            <img src={work2} alt="work2" />
            <img src={work3} alt="work3" />
          </div>
        </div>
      </section>
      {/* section 8 */}
      <section className="grid md:grid-cols-2 items-center bg-[#E7F2F9] p-10 text-[#254152]">
        <div className=" md:w-[80%] text-center my-10 md:text-start m-auto">
          <h1 className="font-bold text-[30px] md:text-[40px]">
            Получи бесплатную консультацию
          </h1>
          <p className="text-slate-400">
            Просто оставьте свои контактные данные и наши специалисты
            проконсультируют вас по любому вопросу
          </p>
        </div>
        <div className="flex flex-wrap md:w-[70%] m-auto gap-10">
          <input
            className=" w-[100%] bg-slate-300 rounded-lg px-10 py-3 outline-none "
            type="text"
            placeholder="Ваше имя"
          />
          <input
            className=" w-[100%] bg-slate-300 rounded-lg px-10 py-3 outline-none "
            type="text"
            placeholder="+7 (999) 999 99 99"
          />
          <button className="bg-[#254152] text-white px-5 py-2 rounded-full">
            Отправить
          </button>
          <p>
            <span className="text-slate-400">
              Отправляя заявку вы даете согласие на
            </span>
            обработку своих персональных данных
          </p>
        </div>
      </section>
      {/* section 9 */}
      <section className="my-10">
        <div className="text-center md:text-start md:my-20 md:w-[50%]  xl:pl-40 my-5">
          <h1 className="font-bold text-[30px] md:text-[35px]">
            Используемые материалы
          </h1>
          <p>
            Вы можете ознакомиться с материалами которые мы используем в своей
            работе
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-4 text-center md:text-start gap-5 ">
            <div className="px-5 w-[60%] space-y-5 shadow-lg m-auto pb-5 rounded-lg">
              <img src={knauf} alt="knauf" />
              <h1 className="text-[20px] font-bold">Штукатурка</h1>
              <p className="text-slate-400">
                Мы используем только качественные материалы
              </p>
              <button className="text-blue-500 underline">Подробнее</button>
            </div>
            <div className="px-5 hidden md:grid w-[60%] space-y-5 shadow-lg m-auto pb-5 rounded-lg">
              <img src={knauf} alt="knauf" />
              <h1 className="text-[20px] font-bold">Штукатурка</h1>
              <p className="text-slate-400">
                Мы используем только качественные материалы
              </p>
              <button className="text-blue-500 underline">Подробнее</button>
            </div>
            <div className="px-5 hidden md:grid w-[60%] space-y-5 shadow-lg m-auto pb-5 rounded-lg">
              <img src={knauf} alt="knauf" />
              <h1 className="text-[20px] font-bold">Штукатурка</h1>
              <p className="text-slate-400">
                Мы используем только качественные материалы
              </p>
              <button className="text-blue-500 underline">Подробнее</button>
            </div>
            <div className="px-5 hidden md:grid w-[60%] space-y-5 shadow-lg m-auto pb-5 rounded-lg">
              <img src={knauf} alt="knauf" />
              <h1 className="text-[20px] font-bold">Штукатурка</h1>
              <p className="text-slate-400">
                Мы используем только качественные материалы
              </p>
              <button className="text-blue-500 underline">Подробнее</button>
            </div>
          </div>
          <img className="m-auto my-20" src={slide} alt="slide" />
        </div>
      </section>
      {/* section 10 */}
      <section className="bg-[#E7F2F9] p-10">
        <div className="text-center md:text-start md:my-20 md:w-[70%]  xl:pl-40 my-5">
          <h1 className="font-bold text-[30px] md:text-[40px]">
            Процесс оштукатуривания машинным способом
          </h1>
          <p className="text-[20px] text-slate-400">
            Наглядно показываем материалами Процесс оштукатуривания машинным
            способом
          </p>
        </div>
        <div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-5">
            <div className="text-center">
              <img className="m-auto" src={shtukatur1} alt="shtukatur1" />
              <h1 className="text-[20px]">СНиП “Простая” штукатурка</h1>
            </div>
            <div className="text-center">
              <img className="m-auto" src={shtukatur2} alt="shtukatur1" />
              <h1 className="text-[20px]">СНиП “Простая” штукатурка</h1>
            </div>
            <div className="text-center">
              <img className="m-auto" src={shtukatur3} alt="shtukatur1" />
              <h1 className="text-[20px]">СНиП “Простая” штукатурка</h1>
            </div>
            <div className="text-center">
              <img className="m-auto" src={shtukatur4} alt="shtukatur1" />
              <h1 className="text-[20px]">СНиП “Простая” штукатурка</h1>
            </div>
            <div className="text-center">
              <img className="m-auto" src={shtukatur5} alt="shtukatur1" />
              <h1 className="text-[20px]">СНиП “Простая” штукатурка</h1>
            </div>
            <div className="text-center">
              <img className="m-auto" src={shtukatur6} alt="shtukatur1" />
              <h1 className="text-[20px]">СНиП “Простая” штукатурка</h1>
            </div>
            <div className="text-center">
              <img className="m-auto" src={shtukatur7} alt="shtukatur1" />
              <h1 className="text-[20px]">СНиП “Простая” штукатурка</h1>
            </div>
            <div className="text-center">
              <img className="m-auto" src={shtukatur8} alt="shtukatur1" />
              <h1 className="text-[20px]">СНиП “Простая” штукатурка</h1>
            </div>
          </div>
          <div className="flex justify-end mt-20">
            <button className="text-blue-500 underline text-center ">
              Подробнее
            </button>
          </div>
        </div>
      </section>
      {/* section 11 */}
      <section className="text-[#254152] py-20">
        <div className="text-center md:text-start md:my-20 md:w-[45%]  xl:pl-40 my-5">
          <h1 className="font-bold text-[30px] md:text-[40px]">
            Как мы работаем
          </h1>
          <p className="text-[20px] text-slate-400">
            Наглядно показываем материалами Процесс оштукатуривания машинным
            способом
          </p>
        </div>
        <div className="grid md:grid-cols-3 font-bold"></div>
        <div className="grid md:grid-cols-5 items-center">
          <div>
            <div className="flex m-auto p-5 w-[90%] gap-5">
              <div>
                <h1 className="border-[5px] px-3 py-1 rounded-full border-blue-500 ">
                  1.
                </h1>
              </div>
              <h1> Выезд замерщика</h1>
            </div>
            <img className="m-auto" src={iconWORK1} alt="iconWORK1" />
          </div>
          <div className="flex flex-col-reverse md:flex-col">
            <img className="m-auto" src={iconWORK2} alt="iconWORK1" />
            <div className="flex m-auto p-5 w-[90%] gap-5">
              <div>
                <h1 className="border-[5px] px-3 py-1 rounded-full border-blue-500 ">
                  2.
                </h1>
              </div>
              <h1> Подписание актов выполненных работ </h1>
            </div>
          </div>
          <div>
            <div className="flex m-auto p-5 w-[90%] gap-5">
              <div>
                <h1 className="border-[5px] px-3 py-1 rounded-full border-blue-500 ">
                  3.
                </h1>
              </div>
              <h1> Подписание договора бригады на объекты </h1>
            </div>
            <img className="m-auto" src={iconWORK3} alt="iconWORK1" />
          </div>
          <div className="flex flex-col-reverse md:flex-col">
            <img className="m-auto" src={iconWORK4} alt="iconWORK1" />
            <div className="flex m-auto p-5 w-[90%] gap-5">
              <div>
                <h1 className="border-[5px] px-3 py-1 rounded-full border-blue-500 ">
                  4.
                </h1>
              </div>
              <h1> Подписание актов выполненных работ </h1>
            </div>
          </div>
          <div>
            <div className="flex m-auto p-5 w-[90%] gap-5">
              <div>
                <h1 className="border-[5px] px-3 py-1 rounded-full border-blue-500 ">
                  5.
                </h1>
              </div>
              <h1> Подписание актов выполненных работ </h1>
            </div>
            <img className="m-auto" src={iconWORK5} alt="iconWORK1" />
          </div>
        </div>
      </section>
      {/* section 12 */}
      <section className="bg-[#E7F2F9] py-10 pb-20">
        <div className="text-center md:text-start md:my-20 md:w-[45%]  xl:pl-40 my-5">
          <h1 className="font-bold text-[30px] md:text-[40px]">
            Наш instagram
          </h1>
          <p className="text-[20px] text-slate-400">
            Мы используем только качественные материалы для механизированной
            штукатурки
          </p>
        </div>
        <div>
          <img className="m-auto" src={instaPOST} alt="instaPOST" />
        </div>
      </section>
      {/* section 13 */}
      <section>
        <div className="text-center md:text-start md:my-20 md:w-[45%]  xl:pl-40 my-5">
          <h1 className="font-bold text-[30px] md:text-[40px]">
            Наше оборудование
          </h1>
          <p className="text-[20px] text-slate-400">
            Наглядно показываем материалами Процесс оштукатуривания машинным
            способом
          </p>
        </div>
        <div className="grid md:grid-cols-3">
          <div className="text-center ">
            <img className="m-auto" src={aroba1} alt="aroba1" />
            <h1 className="font-bold">Штукатурная станция PFT G4</h1>
            <button className="text-blue-500 underline py-5 ">Подробнее</button>
          </div>
          <div className="text-center ">
            <img className="m-auto" src={aroba2} alt="aroba1" />
            <h1 className="font-bold">Штукатурная станция KALETA 5</h1>
            <button className="text-blue-500 underline py-5 ">Подробнее</button>
          </div>
          <div className="text-center ">
            <img className="m-auto" src={aroba3} alt="aroba1" />
            <h1 className="font-bold">Штукатурная станция PFT RITMO XL</h1>
            <button className="text-blue-500 underline py-5 ">Подробнее</button>
          </div>
        </div>
      </section>
      {/* section 14 */}
      <section className="my-10">
        <div className="text-center md:text-start md:my-20 md:w-[45%]  xl:pl-40 my-5">
          <h1 className="font-bold text-[30px] md:text-[40px]">
            Полезные статьи
          </h1>
          <p className="text-[20px] text-slate-400">
            Наглядно показываем материалами Процесс оштукатуривания машинным
            способом
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#E7F2F9] rounded-lg w-[70%] m-auto">
            <img src={city1} alt="city1" />
            <div className="p-5 space-y-5">
              <h1 className="font-bold">Экологичиски чистый материал</h1>
              <p className="text-slate-400">
                Мы используем только качественные материалы для механизированной
                штукатурки
              </p>
              <button className="text-blue-500 underline">Подробнее</button>
            </div>
          </div>
          <div className="bg-[#E7F2F9] rounded-lg w-[70%] m-auto">
            <img src={city2} alt="city1" />
            <div className="p-5 space-y-5">
              <h1 className="font-bold">Экологичиски чистый материал</h1>
              <p className="text-slate-400">
                Мы используем только качественные материалы для механизированной
                штукатурки
              </p>
              <button className="text-blue-500 underline">Подробнее</button>
            </div>
          </div>
          <div className="bg-[#E7F2F9] rounded-lg w-[70%] m-auto">
            <img src={city3} alt="city1" />
            <div className="p-5 space-y-5">
              <h1 className="font-bold">Экологичиски чистый материал</h1>
              <p className="text-slate-400">
                Мы используем только качественные материалы для механизированной
                штукатурки
              </p>
              <button className="text-blue-500 underline">Подробнее</button>
            </div>
          </div>
        </div>
      </section>
      {/* section 15 */}
      <footer className="text-white bg-[#2B4051] p-10">
        <div className="flex flex-wrap flex-col-reverse md:flex-row justify-between m-auto w-[80%]">
          <div>
            <button className="bg-slate-400 px-5 md:px-10 my-10  py-2 rounded-full">
              <WhatsAppIcon /> Написать в whatsapp
            </button>
            <div className="flex my-10 gap-10 ">
              <InstagramIcon />
              <TwitterIcon />
              <FacebookOutlinedIcon />
            </div>
            <div className="my-10">
              <ul>
                <li>+7 (999) 999 99 99</li>
                <li>info@shtukaturki.net</li>
                <li>
                  г. Москва, ул. Ленинский проспект 111/1, секция Д, офис 509
                </li>
                <li>
                  <span className="font-bold"> ШТУКАТУРКИ.NET </span>© 2009-2022
                </li>
              </ul>
            </div>
          </div>
          <div className="my-10 space-y-3">
            <h1 className="hover:text-slate-400 cursor-pointer font-bold text-[20px]">
              Главная
            </h1>
            <h1 className="hover:text-slate-400 cursor-pointer font-bold text-[20px]">
              Штукатурка фасадов
            </h1>
            <h1 className="hover:text-slate-400 cursor-pointer font-bold text-[20px]">
              галерея
            </h1>
            <h1 className="hover:text-slate-400 cursor-pointer font-bold text-[20px]">
              Карта обьектов
            </h1>
            <h1 className="hover:text-slate-400 cursor-pointer font-bold text-[20px]">
              Информация
            </h1>
            <p className="hover:text-slate-200 cursor-pointer text-slate-400">
              Политика конфиденциальности
            </p>
            <p className="hover:text-slate-200 cursor-pointer text-slate-400">
              Политика обработки Cookies
            </p>
            <p className="hover:text-slate-200 cursor-pointer text-slate-400">
              develop by awem
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

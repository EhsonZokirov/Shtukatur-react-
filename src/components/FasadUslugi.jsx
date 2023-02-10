import React from "react";
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
import logo from "../images/logo.png";
import menuBar from "../images/menuBar.png";
import CalculateIcon from "@mui/icons-material/Calculate";
import { Phone } from "@mui/icons-material";
import kirpish from "../images/kirpish.png";
import "../App.css";

function FasadUslugi() {
  return (
    <div>
      {/* section 1 */}
      <nav>
        <div className="flex justify-between xs:justify-center px-5 hidden md:grid xs:grid md:grid-cols-3 items-center my-5">
          <div className="m-auto">
            <img className="w-[90%] md:w-[100%]" src={logo} alt="logo" />
          </div>
          <div className="m-auto hidden md:flex bg-[#2DA6DD33] px-5 py-2 rounded-full">
            <button>Заказать обратный звонок</button>
          </div>
          <div className="m-auto hidden xs:flex">
            <button className="">
              <Phone color="primary" /> +7 (499) 647-63-47
            </button>
          </div>
          <div className="flex xs:hidden">
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
        <div className="text-center md:text-start md:w-[45%]  xl:pl-40 my-5">
          <h1 className="font-bold text-[30px] md:text-[40px]">
            Штукатурка фасадов
          </h1>
          <p className="text-[20px] text-slate-400">
            С грамотно выполненной фасадной отделкой дом может простоять
            несколько десятилетий, не требуя какого бы то ни было ремонта.
          </p>
        </div>
        <div>
          <img className="m-auto" src={kirpish} alt="kirpish" />
        </div>
        <div>
          <h1 className="text-center font-bold text-[30px] my-10">
            Что входит в наружную отделку дома?
          </h1>
          <div className="flex justify-evenly flex-wrap gap-5 text-center md:text-start ">
            <div className="md:w-[30%]">
              <p>
                Наружная отделка дома входит в число наиболее важных этапов
                возведения, поскольку от качества ее выполнения и прочности
                напрямую зависит срок эксплуатации здания. С грамотно
                выполненной фасадной отделкой дом может простоять несколько
                десятилетий, не требуя какого бы то ни было ремонта.
              </p>
            </div>
            <div className="md:w-[30%] text-slate-400">
              <p>
                Мы предлагаем услугу по механизированной штукатурке фасадов с
                применением цементного обрызга для создания высокой адгезии
                (цементный шероховатый состав ) на который будет ложиться
                базовый слой цементно-известковой штукатурки.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* section 3 */}
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
      {/* section 4 */}
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
      {/* section 5 */}
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
      {/* section 6 */}
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
      {/* section 7 */}
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

export default FasadUslugi;

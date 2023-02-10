import React from "react";
import logo from "../images/logo.png";
import menuBar from "../images/menuBar.png";
import CalculateIcon from "@mui/icons-material/Calculate";
import { Phone } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import karta from "../images/karta.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
function Contacts() {
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
      <div>
        <div className="text-center md:text-start md:my-20 md:w-[45%]  xl:pl-40 my-5">
          <h1 className="font-bold text-[30px] md:text-[40px]">Контакты</h1>
          <p className="text-[20px] text-slate-400">
            По всем вопросам обращайтесь по нашим контактным данным
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 my-10  space-y-5 ">
          <div className="flex m-auto">
            <div>
              <AccessTimeIcon color="primary" />
            </div>
            <div>
              <h1>Режим работы</h1>
              <p>Пн.-Пт. с 9.00 - 20.00</p>
              <p>Сб.-Вс. с 9.00 - 18.00</p>
            </div>
          </div>
          <div className=" m-auto space-y-5">
            <h1>
              <Phone color="primary" /> +7 (499) 647-63-47
            </h1>
            <h1>
              <LocationOnIcon color="primary" /> г. Москва, ул. Ленинский
              проспект 111/1, секция Д, офис 509.
            </h1>
            <h1>
              <EmailOutlinedIcon color="primary" /> info@shtukaturki.net
            </h1>
            <h1 className="md:w-[40%]">
              <InfoOutlinedIcon color="primary" /> Юр. адрес 248033, Калужская
              обл., г. Калуга, ул. 65 лет победы, д.43, кв. 155 ИП Платонов
              Павел Сергеевич ИНН 400902427514 ОГРН 309400110000020
            </h1>
          </div>
        </div>
        <div className="w-[100%]">
          <img className="m-auto w-[100%]" src={karta} alt="karta" />
        </div>
      </div>

      {/* section 3 */}
      <footer  className="text-white bg-[#2B4051] p-10">
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

export default Contacts;

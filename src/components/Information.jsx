import React from "react";
import logo from "../images/logo.png";
import menuBar from "../images/menuBar.png";
import CalculateIcon from "@mui/icons-material/Calculate";
import { Phone } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import anatoly from "../images/Anatoly Lazarev.png";
function Information() {
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
        <div>
          <div className="text-center md:text-start md:my-20 md:w-[45%]  xl:pl-40 my-5">
            <h1 className="font-bold text-[30px] md:text-[40px]">О компании</h1>
            <p className="text-[20px] text-slate-400">
              С грамотно выполненной фасадной отделкой дом может простоять
              несколько десятилетий, не требуя какого бы то ни было ремонта.
            </p>
          </div>
          <div className="grid md:grid-cols-2 my-10">
            <div>
              <img className="m-auto" src={anatoly} alt="Anatoly Lazarev" />
            </div>
            <div className="m-auto space-y-10">
              <h1 className="font-bold text-[20px]">
                Предлагаем Вам свои услуги по проведениию механизированных
                штукатурных работ высокого качества.
              </h1>
              <p className="text-slate-400">
                Мы занимаемся созданием ровных плоскостей в вашем доме,
                достигнутых путём механического нанесения современных материалов
                и высокого профессионализма наших мастеров. Штукатурные работы
                являются основными и играют очень важную роль в отделке
                помещений ваших квартир, офисов домов и т.д., именно поэтому от
                правильной геометрии, качества материалов и соблюдения
                технологии будет зависеть дальнейшее качество ваших отделочных
                работ. Высококвалифицированный индивидуальный подход к каждому
                заказчику — вот залог нашего и Вашего успеха!
              </p>
              <div>
                <h1 className="font-bold">Анатолий Лазарев</h1>
                <p>Управляющий</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[75%] m-auto my-20">
          <h1 className="font-bold text-[20px]">
            Мы занимаемся созданием ровных плоскостей в вашем доме, достигнутых
            путём механического нанесения современных материалов и высокого
            профессионализма наших мастеров.
          </h1>
          <p className="w-[70%]">
            Штукатурные работы являются основными и играют очень важную роль в
            отделке помещений ваших квартир, офисов домов и т.д., именно поэтому
            от правильной геометрии, качества материалов и соблюдения технологии
            будет зависеть дальнейшее качество ваших отделочных работ.
          </p>
        </div>
      </div>
      {/* section 3 */}
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
      {/* section 4 */}
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

export default Information;

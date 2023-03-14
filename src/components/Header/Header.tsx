import { useState } from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 flex items-center px-5 h-16 justify-between max-w-7xl m-auto">
        <div
          className={`${
            open ? "bg-gray-200 h-max " : "h-0 opacity-0"
          } fixed top-14 md:hidden flex flex-col text-lg w-auto rounded-lg left-5 transition-all duration-500 z-50 select-none cursor-pointer`}
        >
          <p className="py-2 px-4 pt-2 hover:bg-gray-50 rounded-t-lg">Cursos</p>
          <p className="py-2 px-4 border-t border-gray-300 pt-2 hover:bg-gray-50">Pacotes</p>
          <p className="py-2 px-4 border-t pt-2 border-gray-300 hover:bg-gray-50 rounded-b-lg">
            Sobre mim
          </p>
        </div>
        {!open ? (
          <AiOutlineMenu
            onClick={() => setOpen(!open)}
            size={20}
            className="md:hidden"
          />
        ) : (
          <AiOutlineCloseCircle
            onClick={() => setOpen(!open)}
            size={20}
            className="md:hidden"
          />
        )}
        <p>FOTO DA LOGO</p>
        <div className="hidden md:flex gap-14 h-12 items-center font-semibold">
          <p className="hover:animate-flip-hand">Cursos</p>
          <p>Pacotes</p>
          <p>Sobre mim</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-lg bg-yellowgreen p-1 px-2 font-semibold hover:bg-yellowgreendark shadow-sm">
            Fale comigo aqui!
          </button>
        </div>
      </div>
    </div>
  );
}

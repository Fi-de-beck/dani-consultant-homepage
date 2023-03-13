import { useState } from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex items-center h-16 justify-around max-w-7xl m-auto">
      <div
        className={`${
          open ? "bg-gray-100 h-max " : "h-0 opacity-0"
        } fixed top-14 md:hidden flex flex-col text-lg w-auto rounded-lg left-5 transition-all duration-500 z-50 select-none cursor-pointer`}
      >
        <p className="py-2 px-4 pt-2 hover:bg-gray-50 rounded-t-lg">Cursos</p>
        <p className="py-2 px-4 border-t pt-2 hover:bg-gray-50">Pacotes</p>
        <p className="py-2 px-4 border-t pt-2 hover:bg-gray-50 rounded-b-lg">Sobre mim</p>
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
          <p>Cursos</p>
          <p>Pacotes</p>
          <p>Sobre mim</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-lg bg-purple-600 p-1 px-2 text-white hover:bg-purple-700">Fale comigo aqui!</button>
        </div>
      </div>
  );
}

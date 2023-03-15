import Phrase from "./Phrase";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs"

export default function Footer() {
  return (
    <div className="bg-footer">
    <div className="w-full h-32 m-auto">
      <Phrase />
      <div className="relative m-auto w-[280px] top-[50%]">
        <div className="flex justify-center gap-2 md:gap-3">
        <AiFillTwitterCircle size={20} style={{ fill:"yellowgreen" }} />
        <BsFacebook size={18} style={{ fill:"yellowgreen" }} />
        <BsLinkedin size={18} style={{ fill:"yellowgreen" }}  />
        <BsWhatsapp size={18} style={{ fill:"yellowgreen" }}  />
        <AiFillInstagram size={20} style={{ fill:"yellowgreen" }}  />
        </div>
      </div>
    </div>
    </div>
  );
}

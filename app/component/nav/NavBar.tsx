import {Container} from "../Container";
import Link from "next/link";
import { Redressed } from "next/font/google";

const redressed= Redressed ({subsets:['latin'], weight:['400']})
export const NavBar = () => {
  return (
    <div
      className="
    stycky
    top-0
    w-full
    bg-slate-200
    z-30
    shadow-sm
    "
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="
          flex
          items-center
          justify-between
          gap-3
          md:gap-0">
            <Link href="/" className={ `
            ${redressed.className} 
            font-bold text-2x1`}>E-shop</Link>
            <div className="
            hidden
            md:block">Search</div>
            <div className="
            flex 
            itmes-center
            gap-8
            md:gap-12">CartCount</div>
            <div>UserMenu</div>
            <div></div>
          </div>
        </Container>
      </div>
    </div>
  );
};

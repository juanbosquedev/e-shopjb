import { Container } from "../Container";
import { FooterList } from "./FooterList";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className="
    bg-slate-700
    text-slate-200
    text-sm
    mt-16"
    >
      <Container>
        <div
          className="
        flex
        flex-col
        md:flex-row
        justify-between
        pt-16
        pb-8"
        >
          <FooterList>
            <h3>Shop Categories</h3>
            <Link
              href="#"
              className="
          "
            >
              Phones
            </Link>
            <Link
              href="#"
              className="
          "
            >
              Laptops
            </Link>
            <Link
              href="#"
              className="
          "
            >
              Desktops
            </Link>
            <Link
              href="#"
              className="
          "
            >
              Watches
            </Link>
            <Link
              href="#"
              className="
          "
            >
              Tvs
            </Link>
            <Link
              href="#"
              className="
          "
            >
              Accesories
            </Link>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

import { Container } from "../Container";
import { FooterList } from "./FooterList";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

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
            <h3
              className="text-base font-bolld
            mb-2"
            >
              Shop Categories
            </h3>
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
              TVs
            </Link>
            <Link
              href="#"
              className="
          "
            >
              Accesories
            </Link>
          </FooterList>
          <FooterList>
            <h3
              className="text-base font-bolld
            mb-2"
            >
              Customer Service
            </h3>
            <Link
              href="#"
              className="
          "
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="
          "
            >
              Shipping Policy
            </Link>
            <Link
              href="#"
              className="
          "
            >
              Returns & Exchanges
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
              FAQs
            </Link>
          </FooterList>
          <div
            className="
          w-full
          md:w-1/3
          mb-6
          md:mb-0"
          >
            <h3
              className="text-base font-bolld
        mb-2"
            >
              About Us
            </h3>
            <p className="mb-2">
              At our electronics store. We are dedicated to provide the latest
              and gretest devices and accesories to our costumers. With a wide
              selection of phones, TVs, laptops, watches, and accesories
            </p>
            <p>©{new Date().getFullYear()} E-Shop. All rights reserved</p>
          </div>
          <FooterList>
            <h3
              className="text-base font-bolld
            mb-2"
            >
              Follow Us
            </h3>
            <div
              className="
           flex gap-2 "
            >
              <Link
                href="#"
                className="
       "
              >
                <MdFacebook size={24} />
              </Link>
              <Link href="#" className="">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link
                href="#"
                className="
       "
              >
                <AiFillInstagram size={24} />
              </Link>
              <Link
                href="#"
                className="
       "
              >
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

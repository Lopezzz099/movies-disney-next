import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className=" bg-[#0e0b14] mt-[40px] w-full flex flex-col justify-center items-center">
            <Link href="/" className="w-20 pt-5">
            <Image
              src="https://res.cloudinary.com/dishtratk/image/upload/v1685474334/disney-app/common/logo.1a56f51c764022ee769c91d894d44326_d0ssm3.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </Link>
          <p className=" text-center w-96 my-[10px] text-xs text-[#cacaca]">Esta página fue creada con Next.js 13 y Tailwind, utilizando diversas herramientas de React como Redux Toolkit.</p>
          <Link href="https://www.linkedin.com/in/ignacio-lopezzz/" className=" pb-6 text-xs text-[#cacaca]">Ignacio Lopez, Programador Front End.</Link>
        </footer>
    );
  };
  
  export default Footer;
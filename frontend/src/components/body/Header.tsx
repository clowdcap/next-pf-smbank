import Image from "next/image"

import Logo from './../../assets/logo.svg'
import IconBuy from './../../assets/icon-buy.svg'
import Cards from './../../assets/cards.svg'

import { MdOutlineArrowRightAlt } from 'react-icons/md'

export const Header = () => {
  return (
    <div className="max-w-7xl m-auto my-5">

        <header className="flex flex-row items-center justify-between w-full">

            <div className="left w-1/3 flex flex-row items-center justify-start">
                <nav>
                    <ul className="flex flex-row gap-10">
                        <li><a href="#about" className="uppercase font-medium text-sm text-geral-1">About</a></li>
                        <li><a href="#howItWorks" className="uppercase font-medium text-sm text-geral-1">How it works</a></li>
                        <li><a href="#contact" className="uppercase font-medium text-sm text-geral-1">Contact</a></li>
                    </ul>
                </nav>
            </div>

            <div className="middle w-1/3 flex flex-row items-center justify-center">
                <Image src={Logo} alt="Logo"/>
            </div>

            <div className="right w-1/3 flex flex-row items-center justify-end">
                <Image src={IconBuy} alt="Icon Buy" className="w-[50px] h-[50px]"/>
            </div>

        </header>

        <section className="flex flex-row items-center justify-between">
            <div className="left w-2/5 flex flex-col justify-between gap-10">
                <h1 className="text-7xl font-bold text-geral-2">Banking <br />more smart</h1>
                <p>Meet the only spend management <br />platform and corporate card.</p>
                <div className="flex flex-row items-center gap-4">
                    <div className="flex items-center justify-center bg-black w-[50px] h-[50px]">
                        <MdOutlineArrowRightAlt className="text-white w-[30px] h-[30px]" />
                    </div>
                    <span className="text-geral-3 font-bold">Get your card</span>
                </div>
            </div>
            <div className="right w-3/5">
                <Image src={Cards} alt="Cards" className="w-full"/>
            </div>
        </section>
    </div>
  )
}
